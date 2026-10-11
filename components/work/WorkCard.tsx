import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "@/components/ui/icons";

/**
 * One project as a single row: title and outcome on the left, the two
 * strongest results on the right, stack underneath. The whole row links.
 */
export function WorkCard({ project }: { project: Project; index?: number }) {
  const access = project.liveUrl ? "Live site" : project.nda ? "NDA, private walkthrough" : null;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-line py-9 md:py-11"
    >
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="label">
            {project.domain} · {project.year}
            {access && <> · {access}</>}
          </p>
          <h3 className="mt-3 flex items-start gap-2 text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink">
            <span className="link-underline group-hover:link-underline-hover">{project.title}</span>
            <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
          </h3>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.outcome}</p>
        </div>

        <dl className="grid gap-4 md:col-span-5 md:grid-cols-2 md:self-start md:pt-7">
          {project.results.slice(0, 2).map((r) => (
            <div key={r.label} className="flex flex-col border-l border-line pl-4">
              <dt className="order-2 text-sm leading-snug text-muted">{r.label}</dt>
              <dd className="text-xl font-medium tracking-tight text-ink">{r.metric}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}
