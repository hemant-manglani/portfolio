import { trustSignals } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";

export function TrustStrip() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Working with me"
        title="One person, accountable for the whole thing."
        intro="I build the backend, the AI and the frontend myself. When scope or deadline demands it, I bring in a small bench of trusted specialists and stay your single point of contact."
      />

      <ul className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {trustSignals.map((signal) => (
          <li key={signal} className="flex gap-4 leading-relaxed text-muted">
            <span className="mt-[0.72rem] h-px w-4 shrink-0 bg-ink" aria-hidden />
            <span>{signal}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
