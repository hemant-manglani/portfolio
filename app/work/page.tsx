import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkExplorer } from "@/components/work/WorkExplorer";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Production backend, AI and SaaS systems: case studies with the situation, the constraint, the decisions and what shipped.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Case studies, not screenshots."
        intro="Each one is the real shape of the problem: the situation, the constraint I worked under, the decisions I made (and the ones I rejected), and what actually shipped."
      />
      <WorkExplorer projects={projects} />
      <FinalCTA />
    </>
  );
}
