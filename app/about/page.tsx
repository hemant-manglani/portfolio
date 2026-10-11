import type { Metadata } from "next";
import Image from "next/image";
import { experience, skillGroups } from "@/content/about";
import { site } from "@/content/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hemant Manglani, senior product engineer in Ahmedabad, India. 6+ years, production software, fully accountable delivery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Senior engineer. Fully accountable." />

      <Section rule={false} className="pt-0">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <figure className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-[19rem] overflow-hidden rounded-xl bg-surface">
              <Image
                src="/hemant_profile.png"
                alt={site.name}
                fill
                sizes="(max-width: 768px) 80vw, 304px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm text-faint">
              {site.role}, {site.location}
            </figcaption>
          </figure>

          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-[52ch] text-xl leading-relaxed text-ink">
              I&rsquo;m Hemant, a product engineer in Ahmedabad with six years of production
              software behind me. I own the whole build, from the data model to the deploy, and
              stay accountable for whether it works.
            </p>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
              Most of my work is the load-bearing kind: APIs that stay fast under load, real-time
              pipelines that can&rsquo;t drop a message, and AI features that have to be right in
              front of a paying customer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book a call</Button>
              <Button href={site.resumeHref} external variant="outline">
                Download résumé
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Experience" title="Six years of shipping." />
        <div className="mt-12">
          {experience.map((job) => (
            <div
              key={job.role + job.company}
              className="grid gap-4 border-t border-line py-7 md:grid-cols-12 md:gap-8"
            >
              <p className="text-sm text-faint md:col-span-3">{job.period}</p>
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium leading-tight text-ink">{job.role}</h3>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
              </div>
              <p className="leading-relaxed text-muted md:col-span-5">{job.points[0]}</p>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Stack" title="What I build with." />
        <dl className="mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 border-t border-line py-5 md:grid-cols-12 md:gap-8"
            >
              <dt className="text-sm text-faint md:col-span-3">{group.label}</dt>
              <dd className="leading-relaxed text-ink md:col-span-9">{group.items.join(", ")}</dd>
            </div>
          ))}
          <div className="border-t border-line" />
        </dl>
      </Section>

      <FinalCTA />
    </>
  );
}
