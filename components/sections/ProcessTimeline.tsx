import { processSteps } from "@/content/site";
import { Section, SectionHeader } from "@/components/ui/Section";

/** The five steps as a numbered list. Numbers earn their place: this is a sequence. */
export function ProcessTimeline({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <Section id="process">
      {withHeader && (
        <SectionHeader
          eyebrow="Process"
          title="Fixed scope, fixed dates, no silence."
          intro="Certainty is what makes hiring someone overseas feel safe, so the process is built to remove risk."
        />
      )}

      <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step) => (
          <li key={step.n} className="border-t border-line pt-5">
            <p className="text-sm text-faint">
              {step.n} · {step.duration}
            </p>
            <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
