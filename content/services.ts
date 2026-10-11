/* Outcome-framed services (playbook's four buckets). */

export type Service = {
  id: string;
  n: string;
  title: string;
  outcome: string;
  timeline: string;
  includes: string[];
  notIncluded: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "backend",
    n: "01",
    title: "Backend & API platforms",
    outcome:
      "Turn a fragile MVP backend into one that stays fast and correct under real load.",
    timeline: "3–6 weeks",
    includes: [
      "Scalable REST / WebSocket APIs with a documented contract",
      "Data modelling, query & ORM optimisation, caching",
      "Auth, roles & permissions (RBAC), rate limiting",
      "Background jobs, queues and real-time pipelines",
      "Observability: logging, metrics, error tracking",
    ],
    notIncluded: ["Brand / visual design", "Ongoing content writing", "Paid ads management"],
    stack: ["Python", "Django / DRF", "FastAPI", "PostgreSQL", "Redis", "WebSockets", "AWS", "Docker"],
  },
  {
    id: "ai",
    n: "02",
    title: "AI systems that do real work",
    outcome:
      "Get an AI feature out of demo purgatory and into production, with the plumbing and guardrails around it.",
    timeline: "3–8 weeks",
    includes: [
      "RAG & semantic search over your own data",
      "LLM automation for support, intake, triage & document workflows",
      "Agentic workflows with tool use and human-in-the-loop",
      "Evaluation, guardrails, latency & efficiency optimisation",
      "Streaming chat and smart-search UX wired to your product",
    ],
    notIncluded: ["Foundation-model training", "GPU procurement", "Data labelling at scale"],
    stack: ["LangChain", "LangGraph", "RAG", "Vector DBs", "OpenAI / Claude", "FastAPI", "Python"],
  },
  {
    id: "saas",
    n: "03",
    title: "SaaS builds, end-to-end",
    outcome:
      "Ship a complete multi-tenant product (backend, payments, admin and all) that you fully own.",
    timeline: "5–12 weeks",
    includes: [
      "Multi-tenant architecture with per-tenant isolation",
      "Payments, billing, subscriptions & the full order lifecycle",
      "Admin dashboards with RBAC and audit trails",
      "Server-rendered Next.js frontend for speed & SEO",
      "CI/CD, staging, monitoring and a clean handover",
    ],
    notIncluded: ["Company registration / legal", "Customer support staffing", "Long-term marketing"],
    stack: ["Django", "Next.js", "PostgreSQL", "Stripe / gateways", "AWS", "Docker", "Nginx"],
  },
  {
    id: "retainer",
    n: "04",
    title: "Ongoing ownership",
    outcome:
      "Someone senior who keeps it running, improves it every month, and answers when things break.",
    timeline: "Rolling · 30-day notice",
    includes: [
      "A defined block of improvement work each month",
      "Monitoring, updates and dependency hygiene",
      "On-call for production incidents",
      "A monthly review of the metrics that matter",
    ],
    notIncluded: ["Unlimited scope", "24/7 SLA", "Net-new large builds (scoped separately)"],
    stack: ["Monitoring", "CI/CD", "Cloud", "Performance", "Security patches"],
  },
];
