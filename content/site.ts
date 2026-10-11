/* ------------------------------------------------------------------ *
 *  Site-wide content & copy.
 *  Copy strategy follows "The Overlap" playbook: outcome-positioning,
 *  cross-border trust signals, objection-handling. Edit freely.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Hemant Manglani",
  firstName: "Hemant",
  role: "Senior Product Engineer",
  location: "Ahmedabad, India",
  email: "hemant.manglani01@gmail.com",
  phoneDisplay: "+91 76985 18963",
  phoneHref: "tel:+917698518963",
  whatsapp: "https://wa.me/917698518963",

  linkedin: "https://www.linkedin.com/in/hemant-manglani-114593176/",
  github: "https://github.com/hemant-manglani",

  // TODO(cal): replace with your real Cal.com / Calendly link
  calLink: "https://cal.com/hemant-manglani/intro",
  resumeHref: "/Hemant_Manglani_Backend_Engineer.pdf",

  url: "https://hemant-manglani.com",

  tagline: "Full-stack product engineering for businesses that can't afford to break.",

  headline: "I build revenue-critical products, end to end.",
  subheadline:
    "Senior product engineer, 6+ years. I own the whole build: Django and FastAPI backends, LLM and real-time systems, and the React and Next.js frontends on top. When scope grows or a deadline is tight, I bring in a small, trusted bench of freelance specialists and coordinate them myself, so you get one accountable partner and a finished product, not a pile of parts.",
} as const;

export const primaryCta = { label: "Book a 20-min call", href: "/contact" } as const;
export const secondaryCta = { label: "See the work", href: "/work" } as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Proof strip — specific and honest, not vanity metrics. */
export const proof = [
  { stat: "6+", label: "years building production software" },
  { stat: "8", label: "systems shipped across SaaS, AI, real-time & CV" },
  { stat: "End-to-end", label: "owned from data model to production deploy" },
  { stat: "Backend + AI", label: "Django, FastAPI, LLM/RAG, AWS" },
] as const;

/** The problem, stated better than the buyer could (highest-leverage copy). */
export const problem = {
  eyebrow: "The situation you're probably in",
  lines: [
    "You shipped an MVP and it works, until it doesn't.",
    "The backend that got you here is now the thing slowing you down: queries crawl under load, the AI feature is stuck in demo purgatory, and half your operations still run on spreadsheets and manual steps.",
    "You don't need more code typed. You need one senior person to decide what to build, ship the whole product, and still be there when it has to scale.",
  ],
} as const;

/** Cross-border trust signals (playbook Ch.5). */
export const trustSignals = [
  "Hemant Manglani, a real person in Ahmedabad, India. Not an agency front, not a logo.",
  "One accountable point of contact, start to finish. When a project needs more hands or a tighter deadline, I bring in a small, trusted bench of vetted freelance specialists and coordinate them myself.",
  "You own the code, the cloud accounts and the domains. In your name, from day one.",
  "I make myself available at a time we agree, so calls land inside your working day, wherever you are.",
  "Every message answered within one business day.",
  "Fixed scope, fixed timeline, staged delivery, so you're never exposed.",
  "Public projects link straight to the live site; NDA-bound client work I'll demo privately on a call. References and recorded walkthroughs on request.",
] as const;

/** Process — with durations. Certainty sells. */
export const processSteps = [
  {
    n: "01",
    title: "Discovery call",
    duration: "20 minutes",
    body: "We find out whether this is a real problem worth solving. If I'm not the right fit, I'll say so.",
  },
  {
    n: "02",
    title: "Scope & proposal",
    duration: "2–3 days",
    body: "A short proposal: the outcome, what's in, what's out, and real dates.",
  },
  {
    n: "03",
    title: "Kickoff & baseline",
    duration: "Week 1",
    body: "Signed agreement, a shared board, a staging link, and the numbers we'll measure against.",
  },
  {
    n: "04",
    title: "Build in the open",
    duration: "Weekly cadence",
    body: "A staging link that always works, a written update every Friday, one call a week.",
  },
  {
    n: "05",
    title: "Launch & handover",
    duration: "On the agreed date",
    body: "You get the code, the accounts, the domains and a walkthrough. Then I keep improving it.",
  },
] as const;

/** Objection-handling FAQ. */
export const faqs = [
  {
    q: "You're in India. How does that actually work?",
    a: "Timezone isn't the problem. I make myself available at a time we agree, so calls land inside your working day. You get a weekly call at a fixed time, a written update every Friday, and a reply within one business day. Happy to connect you with a client who can tell you how it went.",
  },
  {
    q: "Can you handle the whole product, or just the backend?",
    a: "The whole product. I lead the build and own the backend, the AI and the React/Next.js frontend myself. When the scope is large or the deadline is tight, I bring in a small, trusted bench of professional freelance specialists, frontend and UI/UX designers, QA, and a business analyst, who work in parallel on their own pieces while I keep everything integrated and accountable. You get one point of contact and a finished product, not a stack of vendors to coordinate.",
  },
  {
    q: "Can I see the live projects?",
    a: "Where a project is public, the case study links straight to the live site so you can click through it yourself. A good part of my work is client software under NDA, which I can't link publicly, but I'm happy to walk you through it live on a call and answer anything about how it was built.",
  },
  {
    q: "Why not just use AI to build this?",
    a: "You could generate a version in a weekend; I use those tools daily and they make me faster. What they can't do is decide what your product should be given how your business actually runs, or be accountable when something breaks during your busiest week. You're not paying for typing. You're paying for the decisions and the ownership.",
  },
  {
    q: "Who owns the code and the accounts?",
    a: "You do: the code, the cloud accounts and the domains, in your name from day one. Ownership transfers cleanly at handover, and that's written down at the start, not sprung on you at the end.",
  },
  {
    q: "What if it goes wrong?",
    a: "Scope is fixed and in writing, work is delivered in staged milestones, and I guarantee my side: the deadline and the defined scope, with continued work until an agreed technical metric is met. I never guarantee your revenue or rankings; those depend on things I don't control.",
  },
] as const;
