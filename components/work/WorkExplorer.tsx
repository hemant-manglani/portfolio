"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { domains, type Project, type Domain } from "@/content/projects";
import { WorkCard } from "./WorkCard";
import { cn } from "@/lib/cn";

type Filter = Domain | "All";

export function WorkExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.domain === filter);
  const chips: Filter[] = ["All", ...domains];

  return (
    <div className="container-x pb-8">
      <div className="flex flex-wrap gap-2 pb-10" role="group" aria-label="Filter projects by domain">
        {chips.map((chip) => {
          const active = filter === chip;
          const count =
            chip === "All" ? projects.length : projects.filter((p) => p.domain === chip).length;
          return (
            <button
              key={chip}
              onClick={() => setFilter(chip)}
              aria-pressed={active}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                active
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-muted hover:border-ink hover:text-ink",
              )}
            >
              {chip}
              <span className={cn("text-xs", active ? "text-bg/60" : "text-faint")}>{count}</span>
            </button>
          );
        })}
      </div>

      <div>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="border-t border-line" />
      </div>
    </div>
  );
}
