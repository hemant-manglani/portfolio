import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { primaryCta, site } from "@/content/site";

export function FinalCTA() {
  return (
    <Section id="contact-cta" className="py-24 md:py-36">
      <div className="max-w-2xl">
        <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)] text-ink">
          Have a product that has to work? Let&rsquo;s talk.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
          A 20-minute call, no pitch. Replies within one business day.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <a
            href={`mailto:${site.email}`}
            className="link-underline hover:link-underline-hover text-[0.95rem] text-ink"
          >
            {site.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
