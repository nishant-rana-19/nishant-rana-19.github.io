import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <>
      {/* Section header (shares row with CTA card on desktop) */}
      <div
        id="experience"
        className="bento-card col-span-1 flex min-h-[200px] flex-col justify-end rounded-2xl bg-surface-container-low p-8 md:col-span-4 md:p-12 lg:col-span-8"
      >
        <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          History
        </span>
        <h2 className="text-3xl font-bold text-on-surface">Professional Experience</h2>
        <p className="mt-2 max-w-lg text-on-surface-variant">
          A decade of leading teams and shipping high-impact products across Fintech and SaaS.
        </p>
      </div>

      {/* Experience cards */}
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="bento-card col-span-1 rounded-2xl p-6 md:col-span-2 md:p-8 lg:col-span-6"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-on-surface">{exp.title}</h3>
              <p className="mt-1 font-mono text-xs font-semibold text-primary">
                {exp.company} • {exp.period}
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
              <li key={i} className="leaf-bullet flex items-start">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
