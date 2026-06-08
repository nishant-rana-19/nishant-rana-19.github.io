import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <>
      {experience.map((exp, idx) => (
        <div
          key={exp.id}
          id={idx === 0 ? "experience" : undefined}
          className="bento-card col-span-1 rounded-2xl p-6 md:col-span-2 md:p-8 lg:col-span-6"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-on-surface">{exp.title}</h3>
              <p className="mt-1 flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                {exp.company} • {exp.period}
                {exp.period.toLowerCase().includes("present") && (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
              </p>
            </div>
            {exp.location && (
              <span className="shrink-0 rounded-lg bg-secondary/10 px-3 py-1 font-mono text-xs font-bold text-secondary">
                {exp.location.toUpperCase()}
              </span>
            )}
          </div>
          <ul className="space-y-3 text-on-surface-variant">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="group/leaf flex items-start gap-2">
                <div className="flex items-center gap-1.5 rounded border border-outline/10 bg-surface-container-low px-2 py-0.5 transition-colors group-hover/leaf:border-primary/30 group-hover/leaf:bg-primary/5">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-primary transition-transform group-hover/leaf:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2a7 7 0 0 1-9 8.8Z" />
                    <path d="M11 20c-1.5-3-1.5-5-1-8" />
                  </svg>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-on-surface-variant transition-colors group-hover/leaf:text-primary">
                    LEAF
                  </span>
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
