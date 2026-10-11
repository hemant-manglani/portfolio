import { faqs } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Plus } from "@/components/ui/icons";

/** Objection-handling FAQ. Native details, so it is accessible with no JS. */
export function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-4">
          <p className="label mb-3">Questions</p>
          <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">Straight answers.</h2>
        </div>

        <div className="md:col-span-8">
          {faqs.map((item) => (
            <details key={item.q} className="group border-t border-line py-5 [&_svg]:open:rotate-45">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                <span className="text-lg font-medium leading-snug text-ink">{item.q}</span>
                <Plus className="h-5 w-5 shrink-0 text-faint transition-transform duration-200" />
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </Section>
  );
}
