import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/icons";

/**
 * Services as a two-by-two grid. Each cell: what you get, the three things
 * that are included, and how long it takes. Hairlines only, no cards.
 */
export function ServicesOverview() {
  return (
    <Section id="services-overview">
      <SectionHeader eyebrow="Services" title="What I can take on." />

      <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.id}
            href={`/services#${s.id}`}
            className="group flex flex-col border-t border-line pt-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-medium leading-tight tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
            </div>
            <p className="mt-3 max-w-md leading-relaxed text-muted">{s.outcome}</p>

            <ul className="mt-6 space-y-2 text-[0.95rem] text-ink">
              {s.includes.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-ink" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-faint">{s.timeline}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
