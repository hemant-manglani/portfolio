"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-3 text-ink placeholder:text-faint transition-colors focus:border-ink focus:outline-none";

/**
 * Contact form. Posts straight to the Brevo-backed `send-email.php` endpoint
 * that ships alongside the static export on Hostinger, so the whole site can be
 * a static export (no Next.js API route). Endpoint is same-origin by default.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/send-email.php";
const SUBJECT =
  process.env.NEXT_PUBLIC_CONTACT_SUBJECT ?? "New enquiry · hemant-manglani.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot: silently accept bots without sending anything.
    if (data.company_website) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name?.trim(),
          email: data.email?.trim(),
          company: data.company?.trim() ?? "",
          message: data.message?.trim(),
          subject: SUBJECT,
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || result?.status !== "success") throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[20rem] flex-col justify-center"
        >
          <h3 className="text-2xl font-medium tracking-tight text-ink">Message sent.</h3>
          <p className="mt-3 max-w-sm text-muted">
            I&rsquo;ll reply within one business day. If it&rsquo;s urgent, message me on{" "}
            <a href={site.whatsapp} className="link-underline link-underline-hover text-ink">
              WhatsApp
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          {/* honeypot */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="label mb-1.5 block">Name</span>
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="label mb-1.5 block">Email</span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
          </div>

          <label className="block">
            <span className="label mb-1.5 block">Company or project</span>
            <input name="company" autoComplete="organization" className={field} />
          </label>

          <label className="block">
            <span className="label mb-1.5 block">What are you trying to build or fix?</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="The problem, the timeline, and what a good outcome looks like."
              className={`${field} resize-none`}
            />
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-[0.95rem] font-medium text-bg transition-colors hover:bg-accent-soft disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          {status === "error" && (
            <p className="text-sm text-danger">
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
              .
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
