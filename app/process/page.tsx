import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How I work: fixed scope, weekly cadence, a staging link that always works, and a clean handover.",
};

const weekly = [
  "A written update every Friday.",
  "One live call a week, at a fixed time in your timezone.",
  "A staging link that always works.",
  "Replies within one business day.",
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Predictability is the product."
        intro="Fixed scope, fixed dates, and you always know what's happening."
      />

      <ProcessTimeline withHeader={false} />

      <Section>
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink md:col-span-5">
            Every week, without fail.
          </h2>
          <ul className="md:col-span-7">
            {weekly.map((item) => (
              <li key={item} className="border-t border-line py-4 text-lg text-ink last:border-b">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
