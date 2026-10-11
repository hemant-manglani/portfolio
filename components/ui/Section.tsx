import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Page section. Every section shares the same vertical rhythm and is
 * separated from the previous one by a single hairline.
 */
export function Section({
  id,
  children,
  className,
  rule = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  rule?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("container-x scroll-mt-24 py-20 md:py-28", rule && "border-t border-line", className)}
    >
      {children}
    </section>
  );
}

/**
 * Section heading row. Title on the left, optional intro on the right,
 * so every section opens with the same two-column shape.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-12 md:gap-8", className)}>
      <div className="md:col-span-7">
        {eyebrow && <p className="label mb-3">{eyebrow}</p>}
        <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-md text-[1.0625rem] leading-relaxed text-muted md:col-span-5 md:justify-self-end md:self-end">
          {intro}
        </p>
      )}
    </div>
  );
}
