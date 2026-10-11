import type { Metadata } from "next";
import { services } from "@/content/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Named, scoped engagements: backend & API platforms, AI systems, end-to-end SaaS builds, and ongoing ownership.",
};

const howItWorks = [
  {
    title: "Scoped in writing",
    body: "The outcome, what's included and what's out, agreed before anything starts.",
  },
  {
    title: "Delivered in stages",
    body: "Fixed dates, a staging link that always works, and a written update every Friday.",
  },
  {
    title: "Yours to keep",
    body: "You own the code, the cloud accounts and the domains, in your name, from day one.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Clear scope. Fixed timeline."
        intro="Every engagement is scoped in writing with a clear outcome. We work out the details on a short call."
      >
        <Button href="/contact">Book a scoping call</Button>
      </PageHeader>

      <div className="container-x">
        {services.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="grid scroll-mt-24 gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <div className="md:col-span-5">
              <h2 className="display text-[clamp(1.7rem,3vw,2.3rem)] text-ink">{s.title}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted">{s.outcome}</p>
              <dl className="mt-8 grid gap-4 text-sm">
                <div>
                  <dt className="label">Timeline</dt>
                  <dd className="mt-0.5 text-ink">{s.timeline}</dd>
                </div>
                <div>
                  <dt className="label">Built with</dt>
                  <dd className="mt-0.5 text-ink">{s.stack.join(", ")}</dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
              <div>
                <p className="label mb-3">Included</p>
                <ul className="space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
                      <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-3">Not included</p>
                <ul className="space-y-2.5">
                  {s.notIncluded.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                      <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-line" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Section>
        <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">How an engagement runs.</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {howItWorks.map((item) => (
            <div key={item.title} className="border-t border-line pt-5">
              <h3 className="text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
