/* ------------------------------------------------------------------ *
 *  Case studies - six-block structure (playbook Ch.4):
 *  Situation → Constraint → Decisions → Build → Result → (Quote).
 *
 *  Results are honest qualitative proxies. Where a real measured number
 *  exists, swap it into the `metric` field. Quotes are intentionally
 *  omitted rather than fabricated; add real ones when you have them.
 *
 *  Showing the work to a prospective client:
 *   - `liveUrl` → a public URL the client can click through themselves.
 *     Set it and a "Visit live site" button appears on the case study.
 *   - `nda: true` → client software under NDA that can't be linked
 *     publicly. The case study shows a note offering a private, live
 *     walkthrough on a call instead. Prefer this over leaving a project
 *     link-less and unexplained. If a project ever gets a public link,
 *     add `liveUrl` and the live button takes over from the NDA note.
 * ------------------------------------------------------------------ */

export type Domain =
  | "E-commerce"
  | "SaaS"
  | "AI"
  | "Real-time"
  | "Computer Vision";

export type Decision = { choice: string; rejected: string; why: string };

export type Project = {
  slug: string;
  title: string;
  outcome: string;
  summary: string;
  year: string;
  domain: Domain;
  role: string;
  stack: string[];
  status?: string;
  liveUrl?: string; // public URL → shows a "Visit live site" button
  nda?: boolean; // NDA client work → shows a "private walkthrough on a call" note
  featured: boolean;
  situation: string;
  constraint: string;
  decisions: Decision[];
  build: { timeline: string; delivered: string[] };
  results: { metric: string; label: string }[];
  quote?: { text: string; author: string };
};

export const projects: Project[] = [
  {
    slug: "d2c-fashion-ecommerce",
    title: "D2C Fashion Storefront with AI Try-On",
    outcome:
      "A direct-to-consumer fashion store shoppers can try on before they buy.",
    summary:
      "Django REST + server-rendered Next.js storefront with AI virtual try-on and size guidance, full payments and order lifecycle, and an RBAC admin.",
    year: "2024",
    domain: "E-commerce",
    role: "Backend & product engineer, end to end",
    stack: [
      "Django",
      "Django REST",
      "Next.js",
      "PostgreSQL",
      "Computer Vision",
      "AWS",
      "Docker",
      "Nginx",
    ],
    status: "Production system",
    featured: true,
    liveUrl: "https://ipsystyle.com",
    situation:
      "A direct-to-consumer fashion brand was selling through a generic template store. Product pages were slow, returns were high because customers couldn't judge fit online, and the team ran catalog, pricing and orders through a patchwork of disconnected tools.",
    constraint:
      "Fashion catalogs are variant-heavy: every product multiplies into sizes, colours and per-SKU stock. The storefront had to stay fast and SEO-friendly for organic traffic while an AI try-on feature and a returns-heavy checkout ran on top of it.",
    decisions: [
      {
        choice:
          "Split the system into a Django REST backend and a server-rendered Next.js storefront.",
        rejected: "A single monolithic template store.",
        why: "SSR kept catalog pages fast and indexable for organic traffic, while one API served the storefront, the admin and any future mobile client from a single contract.",
      },
      {
        choice:
          "Made AI virtual try-on and size recommendation opt-in and cached.",
        rejected: "Running the models synchronously on every product view.",
        why: "Try-on is expensive compute; making it opt-in and cached kept product pages instant for everyone and reserved the heavy work for shoppers who actually wanted it.",
      },
      {
        choice:
          "Modelled variants, inventory and pricing explicitly, with faceted search.",
        rejected: "Flattening products into one denormalised table.",
        why: "Explicit variants made stock, pricing and faceted filtering correct under concurrency, which is the difference between overselling and not.",
      },
    ],
    build: {
      timeline: "~10 weeks to first launch, then ongoing",
      delivered: [
        "Django REST API with faceted catalog search & caching",
        "Server-rendered Next.js storefront",
        "AI virtual try-on + size recommendation",
        "Cart → checkout → payment → fulfilment → returns",
        "Gift-card and flash-sale engines",
        "RBAC admin for catalog, pricing, coupons & orders",
        "AWS: EC2, S3 media, RDS, Docker, Nginx, CI/CD, CloudWatch",
      ],
    },
    results: [
      { metric: "Sub-second", label: "catalog & listing API responses under load" },
      { metric: "AI try-on", label: "raises fit confidence and cuts size-driven returns" },
      { metric: "SEO-ready", label: "server-rendered pages indexable from day one" },
    ],
  },

  {
    slug: "scan2serve-qr-pos",
    title: "Scan2Serve: QR Ordering & POS",
    outcome:
      "Scan-to-order and billing for restaurants, with no app install for diners.",
    summary:
      "Multi-tenant QR ordering + POS with real-time kitchen/waiter dashboards over WebSockets and a full GST billing engine.",
    year: "2023",
    domain: "Real-time",
    role: "Backend & product engineer, end to end",
    stack: ["Django", "WebSockets", "PostgreSQL", "Next.js", "AWS", "Docker"],
    status: "Production system",
    featured: true,
    liveUrl: "https://scan2serve.in",
    situation:
      "Restaurants were losing time and orders to paper tickets, manual billing and third-party ordering apps that took a cut of every sale. They wanted diners to scan, order and pay from their own phones, and the kitchen to see it instantly.",
    constraint:
      "It had to be multi-tenant across many restaurants, work with zero app install for diners, and push order updates to the kitchen and waiters in real time, all while getting GST, discounts and split bills exactly right.",
    decisions: [
      {
        choice: "Built the order pipeline on WebSockets.",
        rejected: "Polling the server for order status.",
        why: "Kitchens and waiters need updates the instant an order changes; WebSockets kept every screen live without hammering the server.",
      },
      {
        choice:
          "Designed per-restaurant tenancy with owner / manager / staff RBAC.",
        rejected: "A separate deployment per restaurant.",
        why: "One multi-tenant system meant a new restaurant could be provisioned in minutes and maintained once, not N times.",
      },
      {
        choice: "Isolated billing (GST, splits, merges) in its own engine.",
        rejected: "Bolting tax logic onto the order model.",
        why: "Billing correctness is the one thing a restaurant can't forgive; isolating it made taxes, discounts and split/merged bills auditable.",
      },
    ],
    build: {
      timeline: "~8 weeks",
      delivered: [
        "Table QR → digital menu → order → kitchen ticket → bill",
        "Real-time kitchen & waiter dashboards (WebSockets)",
        "Billing engine: GST, discounts, split & merged bills, receipts",
        "Per-restaurant tenancy, RBAC, menu & table/QR provisioning",
        "Daily sales & item-level reporting",
        "Dockerised AWS deploy with CI/CD",
      ],
    },
    results: [
      { metric: "0", label: "app installs required for diners" },
      { metric: "Real-time", label: "tickets to kitchen & waiters the moment an order changes" },
      { metric: "Multi-tenant", label: "new restaurants provisioned in minutes" },
    ],
  },

  {
    slug: "llm-support-automation",
    title: "LLM Customer-Support Automation",
    outcome:
      "Support automation that answers from a company's own knowledge, in production.",
    summary:
      "RAG + hybrid semantic search + contextual chat, integrated into a live product to deflect repetitive support and surface the right answer instantly.",
    year: "2024",
    domain: "AI",
    role: "AI / backend engineer",
    stack: ["Python", "LangChain", "RAG", "Vector search", "FastAPI", "LLM APIs"],
    status: "Production system",
    featured: true,
    nda: true, // TODO(live): add `liveUrl: "https://…"` if/when this is public
    situation:
      "A live product was drowning in repetitive support questions that all had answers somewhere (in docs, past tickets and product data), but nobody could find them fast enough, so the same questions kept reaching a human.",
    constraint:
      "Answers had to be grounded in the company's own content rather than hallucinated, fast enough for a chat experience, and safe to put in front of real paying customers.",
    decisions: [
      {
        choice:
          "Grounded every answer with retrieval-augmented generation over the company's corpus.",
        rejected: "Prompting a base model with no grounding.",
        why: "RAG kept answers tied to real, current content, the difference between a helpful assistant and a confident liar.",
      },
      {
        choice: "Used hybrid semantic + keyword retrieval, with guardrails.",
        rejected: "Pure vector search.",
        why: "Hybrid retrieval caught both fuzzy questions and exact product terms, and guardrails stopped it answering outside what it actually knew.",
      },
      {
        choice: "Streamed responses inside the existing product.",
        rejected: "A bolt-on chatbot widget in the corner.",
        why: "Streaming natively felt fast and trustworthy, and let the system hand off cleanly to a human whenever confidence dropped.",
      },
    ],
    build: {
      timeline: "~4–6 weeks",
      delivered: [
        "Ingestion + embedding pipeline with real-time indexing",
        "Hybrid semantic + keyword retrieval",
        "Contextual chat with memory & guardrails",
        "Streaming responses in the product UI",
        "Human-in-the-loop escalation on low confidence",
      ],
    },
    results: [
      { metric: "Grounded", label: "answers cite the company's own content, not hallucinations" },
      { metric: "Instant", label: "semantic search across the full knowledge base" },
      { metric: "Deflects", label: "repetitive questions before they reach a human" },
    ],
  },

  {
    slug: "agencywale-marketplace",
    title: "AgencyWale: Service Marketplace",
    outcome:
      "A marketplace that connects households with verified service professionals.",
    summary:
      "Multi-tenant marketplace with discovery, search, lead management, live job tracking and a ratings system.",
    year: "2023",
    domain: "SaaS",
    role: "Backend engineer",
    stack: ["Django", "PostgreSQL", "REST APIs", "AWS", "Docker"],
    featured: false,
    liveUrl: "https://agencywale.com",
    situation:
      "Booking a plumber or an AC technician meant scattered phone numbers, unclear pricing and no accountability. The goal was a single marketplace where households could find verified professionals and track the job.",
    constraint:
      "Two-sided marketplaces have to serve customers, professionals and operators from the same system, keep leads from getting lost, and keep the partner network genuinely verified.",
    decisions: [
      {
        choice: "Modelled discovery, leads and jobs as first-class objects.",
        rejected: "Treating every enquiry as a generic message.",
        why: "Explicit lead and job lifecycles meant nothing fell through the cracks and operators could see exactly where each request was.",
      },
      {
        choice: "Built verification and ratings into the partner model.",
        rejected: "An open, unmoderated listing.",
        why: "Trust is the product in a service marketplace; verification and ratings were the difference between a directory and a business.",
      },
    ],
    build: {
      timeline: "~7 weeks",
      delivered: [
        "Multi-tenant marketplace backend & search",
        "Lead capture and lifecycle management",
        "Live job tracking & status updates",
        "Verified-partner network with ratings",
        "Operator dashboard with RBAC",
      ],
    },
    results: [
      { metric: "One place", label: "for discovery, booking and tracking" },
      { metric: "Verified", label: "partner network with ratings built in" },
      { metric: "No lost leads", label: "every enquiry has an explicit lifecycle" },
    ],
  },

  {
    slug: "papermaker",
    title: "PaperMaker: Automated Exam Papers",
    outcome: "Generate exam papers from a question bank in minutes, not hours.",
    summary:
      "Django backend, admin dashboard and a companion app that assemble papers from a question bank by subject, difficulty and blueprint.",
    year: "2023",
    domain: "SaaS",
    role: "Backend engineer",
    stack: ["Django", "PostgreSQL", "REST APIs", "Flutter", "AWS"],
    featured: false,
    liveUrl: "https://papermaker.in",
    situation:
      "Educators were building exam papers by hand: copying questions, balancing difficulty and reformatting each time. It was slow, repetitive and error-prone.",
    constraint:
      "The system had to respect a paper 'blueprint' (marks per section, difficulty mix, syllabus coverage) while drawing from a growing, tagged question bank, and work for both a dashboard and a mobile app.",
    decisions: [
      {
        choice: "Made the question bank richly tagged and the blueprint declarative.",
        rejected: "Hard-coding paper formats.",
        why: "A declarative blueprint over a tagged bank meant new paper patterns were configuration, not code changes.",
      },
      {
        choice:
          "Generated each paper by satisfying the blueprint's constraints, not by random sampling.",
        rejected: "Randomly pulling questions until the marks added up.",
        why: "Constraint-driven selection guaranteed the right marks, difficulty mix and syllabus coverage every time, and made a paper reproducible instead of a lucky draw.",
      },
      {
        choice:
          "Served one REST API to both the admin dashboard and the companion app.",
        rejected: "A separate backend for the web and mobile clients.",
        why: "One contract meant the dashboard and the Flutter app behaved identically and every new feature shipped once, not twice.",
      },
    ],
    build: {
      timeline: "~6 weeks",
      delivered: [
        "Tagged question-bank data model",
        "Blueprint-driven paper generation",
        "Admin dashboard for subjects, questions & papers",
        "REST API powering a companion app",
      ],
    },
    results: [
      { metric: "Minutes", label: "to assemble a balanced paper, not hours by hand" },
      { metric: "Reusable", label: "blueprints instead of reformatting every time" },
      { metric: "One bank", label: "many paper patterns from a single tagged question set" },
    ],
  },

  {
    slug: "person-detection-reid",
    title: "Real-Time Person Detection & Re-ID",
    outcome:
      "Detect and re-identify people from live camera streams, on screen in real time.",
    summary:
      "Computer-vision pipeline over RTSP streams with known/unknown labelling and deep-learning re-identification, exposed through a REST API.",
    year: "2021",
    domain: "Computer Vision",
    role: "ML / backend engineer",
    stack: ["Python", "Deep Learning", "Computer Vision", "Flask", "REST APIs"],
    featured: false,
    nda: true, // TODO(live): add `liveUrl: "https://…"` if/when this is public
    situation:
      "A site needed to detect people from RTSP camera feeds, show results live, and recognise whether a person had been seen before on a return visit.",
    constraint:
      "Video is unforgiving: the pipeline had to keep up with live streams, distinguish known from unknown people, and stay reliable enough to expose as a service.",
    decisions: [
      {
        choice: "Separated detection from re-identification behind an API.",
        rejected: "One tightly coupled script per camera.",
        why: "Splitting the stages behind a REST API made the system observable, testable and reusable across feeds.",
      },
      {
        choice:
          "Decoupled inference from camera capture as a streaming pipeline.",
        rejected: "Running detection inline on every captured frame.",
        why: "Live video never waits; decoupling let the pipeline skip frames under load and stay in sync with the stream instead of falling behind.",
      },
      {
        choice:
          "Matched people on lightweight appearance embeddings, not raw image crops.",
        rejected: "Comparing each new detection against stored images directly.",
        why: "Embeddings turned 'have I seen this person before?' into a fast vector comparison and kept the identity store small enough to scan in real time.",
      },
    ],
    build: {
      timeline: "Research + delivery",
      delivered: [
        "RTSP stream ingestion & detection",
        "Known/unknown labelling with re-identification",
        "Live results UI",
        "End-to-end pipeline behind a REST API",
      ],
    },
    results: [
      { metric: "Live", label: "detection rendered on a real-time UI" },
      { metric: "Re-ID", label: "recognises returning individuals across visits" },
      { metric: "RTSP", label: "ingests standard IP-camera streams, no special hardware" },
    ],
  },

  {
    slug: "survey-analysis-platform",
    title: "Survey Analysis Platform",
    outcome:
      "Turn mixed survey data into quantitative insight and qualitative highlights.",
    summary:
      "NLP/ML platform over text, numeric, image and video data, with semantic-search-driven highlight and showreel generation.",
    year: "2021",
    domain: "AI",
    role: "ML / backend engineer",
    stack: ["Python", "NLP", "FastAPI", "MongoDB", "AWS"],
    featured: false,
    nda: true, // TODO(live): add `liveUrl: "https://…"` if/when this is public
    situation:
      "A research team had rich survey responses across text, numbers, images and video, but no fast way to move from raw responses to insight and shareable highlights.",
    constraint:
      "The data was genuinely multi-modal, and 'the interesting bits' had to be found semantically, not by keyword.",
    decisions: [
      {
        choice: "Used semantic search to surface and reel together highlights.",
        rejected: "Keyword filters over transcripts.",
        why: "Semantic search found relevant moments even when the words didn't match, which is where qualitative insight actually lives.",
      },
      {
        choice:
          "Stored the mixed responses in a document model instead of rigid tables.",
        rejected: "Forcing text, numbers, images and video into one relational schema.",
        why: "Survey data is genuinely irregular; a document store let each modality keep its own shape without a schema migration every time a question changed.",
      },
      {
        choice:
          "Split quantitative and qualitative analysis into separate passes.",
        rejected: "One monolithic analysis step over everything.",
        why: "Numbers want aggregation and free text wants NLP; separating the passes let each use the right tool and kept every result explainable back to its source.",
      },
    ],
    build: {
      timeline: "Research + delivery",
      delivered: [
        "Multi-modal ingestion (text, numeric, image, video)",
        "Quantitative + qualitative analysis",
        "Semantic-search highlight & showreel generation",
        "Dockerised deploy on EC2 with Nginx",
      ],
    },
    results: [
      { metric: "Multi-modal", label: "text, numeric, image and video in one pipeline" },
      { metric: "Semantic", label: "highlights found by meaning, not keywords" },
      { metric: "Showreels", label: "auto-assembled from the most relevant moments" },
    ],
  },

  {
    slug: "jobs-classification",
    title: "Jobs Classification & Search",
    outcome:
      "Collect and classify job descriptions at scale, then make them searchable.",
    summary:
      "Multithreaded / multiprocessing scrapers feeding NLP categorisation and Elasticsearch search over cleaned data.",
    year: "2020",
    domain: "AI",
    role: "Backend / data engineer",
    stack: ["Python", "Web Scraping", "NLP", "Elasticsearch"],
    featured: false,
    nda: true, // TODO(live): add `liveUrl: "https://…"` if/when this is public
    situation:
      "Job descriptions were scattered across many sites in inconsistent formats, with no unified way to categorise or search them.",
    constraint:
      "Collection had to be fast and parallel across many sources, and the messy text had to be cleaned before it could be classified or searched usefully.",
    decisions: [
      {
        choice: "Built parallel scrapers feeding a clean NLP + Elasticsearch pipeline.",
        rejected: "Sequential scraping into a plain database.",
        why: "Multithreaded/multiprocessing collection plus a proper search index turned a slow scrape into a searchable, categorised dataset.",
      },
      {
        choice:
          "Normalised every source into one clean schema before indexing.",
        rejected: "Indexing each site's raw, inconsistent format as-is.",
        why: "Consistent fields for location, skills and experience were the whole reason cross-site search and categorisation worked at all.",
      },
      {
        choice:
          "Kept collection and processing decoupled so a slow source couldn't stall the rest.",
        rejected: "One sequential scrape-then-process job.",
        why: "Decoupling let scrapers run in parallel and continuously while NLP and indexing consumed at their own pace, so one blocked site never held up the pipeline.",
      },
    ],
    build: {
      timeline: "Research + delivery",
      delivered: [
        "Multithreaded / multiprocessing scrapers",
        "NLP categorisation by location, skills & experience",
        "Cleaning & preprocessing pipeline",
        "Elasticsearch search over the corpus",
      ],
    },
    results: [
      { metric: "Parallel", label: "collection across many sources at once" },
      { metric: "Categorised", label: "by location, skills & experience with NLP" },
      { metric: "Searchable", label: "full-text and faceted via Elasticsearch" },
    ],
  },
];

export const domains: Domain[] = [
  "E-commerce",
  "SaaS",
  "AI",
  "Real-time",
  "Computer Vision",
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ *
 *  Project gallery - the complete build log for the home page.
 *
 *  It is a superset of the case studies above: every entry with a real
 *  case-study page links to it (`href`), and a handful of client builds
 *  from Pyonix that don't (yet) have a full write-up are included as
 *  display-only cards so the gallery shows *everything* I've shipped.
 * ------------------------------------------------------------------ */

export type GalleryItem = {
  title: string;
  blurb: string;
  category: string;
  year: string;
  tags: string[];
  href?: string; // case-study page when one exists
  liveUrl?: string; // public live site, if any
  nda?: boolean; // NDA client work, walkthrough on a call
  status?: string;
};

/* Client builds shipped at Pyonix that don't have a full case study yet.
 * Descriptions kept factual and low-claim - see pyonix.in portfolio. */
const additionalProjects: GalleryItem[] = [
  {
    title: "Temport",
    blurb:
      "A location-aware dating platform - discovery, matching and real-time chat built around where people actually are.",
    category: "Social",
    year: "2023",
    tags: ["Django", "WebSockets", "Geo", "PostgreSQL"],
    liveUrl: "https://temport.org",
  },
];

export const galleryProjects: GalleryItem[] = [
  ...projects.map((p) => ({
    title: p.title,
    blurb: p.outcome,
    category: p.domain as string,
    year: p.year,
    tags: p.stack,
    href: `/work/${p.slug}`,
    liveUrl: p.liveUrl,
    nda: p.nda,
    status: p.status,
  })),
  ...additionalProjects,
];
