/* About-page content — sourced from the résumé. */

export const bio = [
  "I'm Hemant, a product engineer based in Ahmedabad, India, with 6+ years building production software, deep backend and AI roots, and the React and Next.js frontend skills to ship the whole product. I don't sell hours; I own outcomes. From the data model to the deploy, I decide what to build, ship it, and stay accountable for whether it works.",
  "Most of my work is the unglamorous, load-bearing kind: the API that has to stay fast under load, the real-time pipeline that can't drop a message, the AI feature that has to be right in front of a paying customer. I've shipped e-commerce, restaurant POS, marketplaces and LLM systems, end to end, in production, much of it client software under NDA.",
  "I lead the build myself and bring in a small, trusted bench of professional freelance specialists, frontend and UI/UX designers, QA, and a business analyst, when a project needs more hands or a tighter deadline. They work in parallel on their own pieces while I keep everything integrated, so you get one accountable person who has done this before, not a rotating cast and a project manager relaying messages.",
];

export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Lead Backend / Product Engineer",
    company: "Pyonix Technology",
    period: "Aug 2022 – Present",
    points: [
      "Architected and shipped multiple production SaaS platforms on Django, FastAPI and AWS, owning backend design, build and deployment end to end.",
      "Built a scalable e-commerce backend with secure payments, order-lifecycle management, notifications and admin workflows.",
      "Designed a multi-tenant SaaS platform for agency discovery, search and lead management.",
      "Built real-time chat and audio-calling over WebSockets and WebRTC.",
      "Integrated LLM-powered support automation (FAQ handling, contextual responses, semantic search) into live production systems.",
    ],
  },
  {
    role: "Backend Developer (Freelance)",
    company: "Self-employed",
    period: "Jan 2021 – Aug 2022",
    points: [
      "Delivered backend solutions for multiple client applications in Django and FastAPI.",
      "Designed REST APIs, authentication flows and real-time features with Python WebSockets.",
      "Implemented NLP-based chat analysis and voice-assistant integrations.",
      "Worked directly with clients to gather requirements and ship production-ready software.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Softvan Pvt. Ltd.",
    period: "Jul 2019 – Dec 2021",
    points: [
      "Built ML, deep-learning, computer-vision and NLP solutions across text, image and speech.",
      "Built backend services on AWS Lambda and FastAPI with automated deployment pipelines.",
      "Implemented Elasticsearch capabilities: fuzzy search, n-gram and round-robin querying.",
      "Led a team of four and was the primary point of contact for daily client communication.",
    ],
  },
];

export const education = {
  degree: "B.E. Information Technology",
  school: "Apollo Institute of Engineering & Technology, Ahmedabad",
  period: "2015 – 2019",
  detail: "CGPA 8.64 / 10 · Final-year project: an athlete-intelligence system comparing user posture against professional athletes.",
};

export const certifications = [
  "Machine Learning Specialization, Stanford / Coursera (Andrew Ng), 2020",
  "Deep Learning Specialization, deeplearning.ai (Andrew Ng), 2021",
];

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "Django", "Django REST", "FastAPI", "Flask", "React", "Next.js", "TypeScript", "WebSockets", "Microservices"],
  },
  {
    label: "AI / LLM",
    items: ["LangChain", "LangGraph", "RAG", "Semantic Search", "Chatbot Automation", "LLM APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "SQLAlchemy", "ORM Optimization"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, S3, API Gateway)", "Docker", "CI/CD", "Nginx", "CloudWatch"],
  },
  {
    label: "Also",
    items: ["WebRTC (audio/video)", "Elasticsearch", "Selenium", "Git", "Computer Vision"],
  },
];
