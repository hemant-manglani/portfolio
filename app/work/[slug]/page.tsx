import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.outcome,
  };
}

/** One narrative block: label on the left, content on the right. */
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8">
      <h2 className="text-sm text-faint md:col-span-3">{label}</h2>
      <div className="md:col-span-9 md:max-w-2xl">{children}</div>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      <header className="container-x pt-36 pb-14 md:pt-44 md:pb-16">
        <Link
          href="/work"
          className="link-underline hover:link-underline-hover text-sm text-muted transition-colors hover:text-ink"
        >
          All work
        </Link>

        <p className="label mt-8">
          {project.domain} · {project.year}
          {project.status && <> · {project.status}</>}
        </p>
        <h1 className="display mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] text-ink">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.outcome}</p>

        <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <dt className="label">Role</dt>
            <dd className="mt-0.5 text-sm text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="label">Timeline</dt>
            <dd className="mt-0.5 text-sm text-ink">{project.build.timeline}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="label">Built with</dt>
            <dd className="mt-0.5 text-sm text-ink">{project.stack.join(", ")}</dd>
          </div>
        </dl>

        {project.liveUrl ? (
          <div className="mt-8">
            <Button href={project.liveUrl} external variant="outline" arrow>
              Visit live site
            </Button>
          </div>
        ) : project.nda ? (
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
            This is client work under NDA, so it isn&rsquo;t linked publicly. I&rsquo;ll walk
            you through it live on a call.
          </p>
        ) : null}
      </header>

      <div className="container-x">
        <Block label="The situation">
          <p className="text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug tracking-[-0.01em] text-ink">
            {project.situation}
          </p>
        </Block>

        <Block label="The constraint">
          <p className="leading-relaxed text-muted">{project.constraint}</p>
        </Block>

        <Block label="The decisions">
          <div className="space-y-7">
            {project.decisions.map((d, i) => (
              <div key={i}>
                <p className="leading-relaxed text-ink">{d.choice}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  <span className="text-faint">Instead of</span> {d.rejected}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  <span className="text-faint">Why</span> {d.why}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="What I built">
          <ul className="space-y-2.5">
            {project.build.delivered.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-[0.72rem] h-px w-3 shrink-0 bg-ink" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="The result">
          <dl className="grid gap-6 sm:grid-cols-2">
            {project.results.map((r) => (
              <div key={r.label} className="flex flex-col border-l border-line pl-4">
                <dt className="order-2 text-sm leading-snug text-muted">{r.label}</dt>
                <dd className="text-xl font-medium tracking-tight text-ink">{r.metric}</dd>
              </div>
            ))}
          </dl>
        </Block>

        {project.quote && (
          <Block label="In their words">
            <figure>
              <blockquote className="text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug tracking-[-0.01em] text-ink">
                &ldquo;{project.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-faint">{project.quote.author}</figcaption>
            </figure>
          </Block>
        )}

        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 border-t border-line py-8"
        >
          <div>
            <p className="label">Next case study</p>
            <p className="mt-1.5 text-xl font-medium tracking-tight text-ink md:text-2xl">
              <span className="link-underline group-hover:link-underline-hover">{next.title}</span>
            </p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink" />
        </Link>
      </div>

      <FinalCTA />
    </article>
  );
}
