export const experience = [
  {
    id: 1,
    title: "Principal Frontend Engineer",
    company: "FinTech Solutions",
    period: "2021—Present",
    location: "Remote" as string | null,
    bullets: [
      "Architected a micro-frontend migration reducing deployment times by 65%.",
      "Led a team of 12 engineers in building a multi-tenant design system.",
      "Optimized core web vitals resulting in a 22% increase in retention.",
    ],
  },
  {
    id: 2,
    title: "Senior UI Architect",
    company: "Global SaaS Corp",
    period: "2018—2020",
    location: null as string | null,
    bullets: [
      "Developed high-performance visualization engines for real-time data.",
      "Established frontend testing standards using Playwright and Vitest.",
    ],
  },
];

export const skills = {
  frontend: ["React 18", "Next.js", "TypeScript", "Tailwind"],
  platform: ["Docker", "AWS", "CI/CD", "Terraform"],
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
    degree: "M.S. Computer Science",
    school: "Stanford University",
    period: "2012 — 2014",
    icon: "workspace_premium",
  },
  {
    id: 2,
    degree: "B.S. Software Engineering",
    school: "UC Berkeley",
    period: "2008 — 2012",
    icon: "school",
  },
];

export const social = {
  linkedin: "#",
  github: "#",
  resume: "#",
};
