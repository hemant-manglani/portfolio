"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "@/components/ui/icons";

/**
 * One card at a time. The stage pins to the viewport for the length of the
 * section; scrolling slides the next card up over the current one until it
 * covers it completely, while the covered card settles back a little.
 * Under reduced motion the cards stack in normal flow.
 */
export function WorkStack({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <div className="mt-12 space-y-6">
        {projects.map((p, i) => (
          <Card key={p.slug} project={p} index={i} />
        ))}
      </div>
    );
  }

  const steps = Math.max(projects.length - 1, 1);

  return (
    <div
      ref={ref}
      className="relative mt-12"
      style={{ height: `calc(78vh + ${steps * 70}vh)` }}
    >
      <div className="sticky top-0 h-[78vh] overflow-hidden">
        {projects.map((p, i) => (
          <StackItem
            key={p.slug}
            project={p}
            index={i}
            steps={steps}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

function StackItem({
  project,
  index,
  steps,
  progress,
}: {
  project: Project;
  index: number;
  steps: number;
  progress: MotionValue<number>;
}) {
  // Card `index` arrives during step `index - 1` and is covered during step
  // `index`. Scroll-timeline offsets must stay inside [0, 1], so the first
  // card never moves and the last card is never covered.
  const first = index === 0;
  const last = index === steps;
  const arriveStart = first ? 0 : (index - 1) / steps;
  const arriveEnd = first ? 1 : index / steps;
  const coverStart = last ? 0 : index / steps;
  const coverEnd = last ? 1 : (index + 1) / steps;

  const y = useTransform(
    progress,
    [arriveStart, arriveEnd],
    first ? ["0vh", "0vh"] : ["100vh", "0vh"],
  );
  const scale = useTransform(progress, [coverStart, coverEnd], last ? [1, 1] : [1, 0.95]);
  // The covered card stays opaque so nothing bleeds through the one on top.
  // Instead it softens: a blur plus a white veil that rises over its content.
  const filter = useTransform(
    progress,
    [coverStart, coverEnd],
    last ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(6px)"],
  );
  const veil = useTransform(progress, [coverStart, coverEnd], last ? [0, 0] : [0, 0.75]);

  return (
    <motion.div
      style={{ y, scale, filter, willChange: "transform" }}
      className="absolute inset-x-0 top-[5.5rem] origin-top"
    >
      <Card project={project} index={index} />
      <motion.div
        style={{ opacity: veil }}
        className="pointer-events-none absolute inset-0 rounded-2xl bg-bg"
        aria-hidden
      />
    </motion.div>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const access = project.liveUrl ? "Live site" : project.nda ? "Under NDA" : null;

  return (
    <article className="rounded-2xl border border-line bg-bg p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] md:p-10">
      <div className="flex items-start justify-between gap-6 text-sm text-faint">
        <span>0{index + 1}</span>
        <span className="text-right">
          {project.domain} · {project.year}
          {access && <> · {access}</>}
        </span>
      </div>

      <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h3 className="display max-w-[14ch] text-[clamp(1.9rem,4vw,3.6rem)] text-ink">
            <Link href={`/work/${project.slug}`} className="link-underline hover:link-underline-hover">
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{project.outcome}</p>
        </div>

        <div className="flex flex-col justify-between gap-8 md:col-span-5 md:border-l md:border-line md:pl-10">
          <dl className="grid gap-5">
            {project.results.slice(0, 2).map((r) => (
              <div key={r.label} className="flex flex-col">
                <dt className="order-2 text-sm leading-snug text-muted">{r.label}</dt>
                <dd className="text-xl font-medium tracking-tight text-ink">{r.metric}</dd>
              </div>
            ))}
          </dl>
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 self-start text-[0.95rem] font-medium text-ink"
          >
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
