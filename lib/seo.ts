import { site } from "@/content/site";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressCountry: "IN",
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Python",
    "Django",
    "FastAPI",
    "Backend engineering",
    "React",
    "Next.js",
    "Full-stack development",
    "AI systems",
    "RAG",
    "SaaS architecture",
    "AWS",
  ],
};

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} · ${site.role}`,
    description: site.subheadline,
    url: site.url,
    email: `mailto:${site.email}`,
    provider: { "@type": "Person", name: site.name },
  };
}
