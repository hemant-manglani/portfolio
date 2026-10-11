import type { Metadata } from "next";
import { site, primaryCta } from "@/content/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 20-minute call or send a message. Based in Ahmedabad, with call hours that overlap your working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's find out if it's a fit."
        intro="A 20-minute call, no pitch. Prefer to write first? The form works just as well."
      >
        {/* To embed a live calendar inline, replace this button with a Cal.com embed pointed at site.calLink. */}
        <Button href={site.calLink} external size="lg">
          {primaryCta.label}
        </Button>
      </PageHeader>

      <div className="container-x grid gap-14 border-t border-line pt-14 pb-24 md:grid-cols-12 md:gap-8">
        <dl className="md:col-span-4">
          <Detail label="Email">
            <a href={`mailto:${site.email}`} className="link-underline hover:link-underline-hover">
              {site.email}
            </a>
          </Detail>
          <Detail label="WhatsApp">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:link-underline-hover"
            >
              {site.phoneDisplay}
            </a>
          </Detail>
          <Detail label="Based in">{site.location}, UTC+5:30</Detail>
          <Detail label="Calls">At a time we agree, in your timezone.</Detail>
          <Detail label="Replies">Within one business day.</Detail>
        </dl>

        <div className="md:col-span-7 md:col-start-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-line py-4 first:pt-0 sm:grid-cols-[6rem_1fr]">
      <dt className="label">{label}</dt>
      <dd className="text-[0.95rem] leading-relaxed text-ink">{children}</dd>
    </div>
  );
}
