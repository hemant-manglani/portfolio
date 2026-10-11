import { Hero } from "@/components/hero/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { personJsonLd, professionalServiceJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personJsonLd, professionalServiceJsonLd()]),
        }}
      />
      <Hero />
      <ProofStrip />
      <FeaturedWork />
      <ServicesOverview />
      <FinalCTA />
    </>
  );
}
