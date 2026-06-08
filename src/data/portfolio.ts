export const experience = [
  {
    id: 1,
    title: "Software Engineer 2",
    company: "Deloitte USI",
    period: "Nov 2021—Present",
    location: "Gurugram, India" as string | null,
    bullets: [
      "Implemented end‑to‑end observability with cross-team collaboration using Dynatrace and OpenTelemetry across Backend‑for‑Frontend (BFF) and Frontend layers improving reliability, debugging speed, reducing time to resolution (TTR) and production support for a large-scale e-commerce platform.",
      "GraphQL APIs & optimized client side data-fetching patterns. Evaluated and introduced modern front-end tooling such as Vite to improve build and CI/CD pipeline performance.",
      "Led a frontend team of 4 engineers owning sprint planning & delivery, reviewing cross‑team PRs, and ensuring on‑time delivery of features while maintaining ADA WCAG 2.2 compliance.",
      "Developed an internal Retrieval-Augmented Generation (RAG) Chatbot using LangChain and ChatGPT, integrating secure knowledge of healthcare procedures, policies for medical practitioners and reducing support response time by 60%.",
      "Developed atomic UI components and core features (login, i18n, user preferences) for an e‑commerce platform with strong Jest and React Testing Library coverage, using SSR, Next.js, TypeScript, and Tailwind CSS to improve performance and maintainability.",
      "Designed and built a reusable frontend design system and component library to drive consistency across a healthcare platform with 3 sub‑applications, reducing UI duplication and easing onboarding for new developers.",
      "Created a living style guide as a developer playground for testing and documenting components using HTML, CSS, JavaScript, LESS, and Microsoft Dynamics, improving documentation adoption and reuse.",
      "Implemented accessible UI for a healthcare application aligned with ADA and WCAG 2.2 guidelines, including NVDA and screen reader support to enhance usability for users with disabilities.",
      "Worked on development of healthcare application features using Lightning Web Components and Salesforce, integrating UI and platform capabilities to support clinical workflows.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Proactive Data Systems",
    period: "June 2019 - Nov 2021",
    location: "Delhi, India" as string | null,
    bullets: [
      "Delivered 6+ full‑stack projects end‑to‑end, overseeing the complete lifecycle from ideation, requirements gathering, and UI prototyping to frontend development and production release. Implemented agile software development methodologies, improving team delivery velocity and cross‑functional collaboration by 25%.",
      "Designed and built internal automation tools that digitized manual business processes, reducing paperwork and operational time by 40%.",
      "Led development of a sales order management dashboard enabling real‑time visibility into order status and document access, empowering managers to approve, reject, and provide feedback seamlessly.",
      "Engineered a vendor‑agnostic network monitoring solution integrating Cisco, Broadcom, and Netgear ecosystems under a unified interface, cutting tool‑sprawl by 50%.",
      "Developed and launched a customer experience analytics dashboard for brick‑and‑mortar businesses, enhancing customer insight and engagement tracking.",
      "Optimized internal application build pipeline and reduced frontend bundle sizes by up to 30%, improving load times and usability on legacy systems.",
    ],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript/JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Webpack",
    "Vite",
    "Nx",
    "Microfrontends",
  ],
  backend: [
    "Node.js",
    "ExpressJS",
    "PostgreSQL",
    "GraphQL",
    "Java",
    "SpringBoot",
    "Spring JPA/Hibernate",
  ],
  platform: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "CI/CD", "Terraform"],
  observability: ["Dynatrace", "OpenTelemetry"],
  testing: ["Jest", "Vitest", "React Testing Library"],
  tools: ["Claude Code", "Copilot", "Git", "GitHub", "Jira", "Figma", "Postman"],
};

export const projects = [
  {
    id: 1,
    title: "Financier Architecture",
    description:
      "A scalable micro-frontend architecture built for high-frequency trading platforms. Features real-time state synchronization.",
    category: "Fintech",
    categoryBg: "bg-primary/80",
    image: "/images/project-financier.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Lumina Design System",
    description:
      "An enterprise-level design system for React, focused on accessibility and themeable architecture. Reduced UI dev time by 40%.",
    category: "Systems",
    categoryBg: "bg-secondary/80",
    image: "/images/project-lumina.jpg",
    href: "#",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech - Electronics & Communications Engineering",
    school: "Indraprastha Institute of Information Technology, Delhi (IIIT-D)",
    period: "2015 — 2019",
    icon: "workspace_premium",
  },
];

export const social = {
  linkedin: "https://www.linkedin.com/in/nishantrana19",
  github: "https://github.com/nishant-rana-19",
  resume: "/resume.pdf",
};
