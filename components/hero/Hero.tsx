"use client";

import { motion, useReducedMotion } from "motion/react";
import { Portrait } from "./Portrait";
import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta, site } from "@/content/site";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = ["I build products", "that have to work."];

/**
 * The hero is the one place the site spends its boldness: an oversized,
 * two-line headline that rises in line by line, next to a large portrait.
 * Everything after it is quiet.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease },
        };

  return (
    <section className="container-x pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid items-end gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7 lg:col-span-8">
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-live" aria-hidden />
            Available for new work
          </motion.p>

          <h1 className="display mt-8 text-[clamp(2.7rem,6.2vw,5rem)] text-ink">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span {...rise(1 + i)} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...rise(3)} className="mt-8 max-w-[42ch] text-lg leading-relaxed text-muted">
            {site.role}. Backend, AI and frontend, shipped as one finished product by one
            accountable engineer.
          </motion.p>

          <motion.div {...rise(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.5, ease },
              })}
          className="w-full max-w-[20rem] md:col-span-5 md:max-w-[22rem] md:justify-self-end lg:col-span-4"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
