import { featuredProjects } from "@/content/projects";
import { Section, SectionHeader } from "@/components/ui/Section";
import { WorkStack } from "@/components/work/WorkStack";
import { Button } from "@/components/ui/Button";

export function FeaturedWork() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected work"
        title="Systems already running in production."
        intro="Three case studies. Keep scrolling."
      />

      <WorkStack projects={featuredProjects} />

      <div className="mt-8">
        <Button href="/work" variant="outline" arrow>
          All case studies
        </Button>
      </div>
    </Section>
  );
}
