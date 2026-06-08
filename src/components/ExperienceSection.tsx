import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <>
      {/* Section header */}
      <div
        id="experience"
        className="col-span-1 flex items-center justify-between md:col-span-4 lg:col-span-12"
      >
        <h2 className="text-on-surface text-xl font-semibold">Experience &amp; Impact</h2>
        <span className="text-secondary/60 font-mono text-xs">2019 — PRESENT</span>
      </div>

      {/* Experience cards — full width, stacked */}
      {experience.map((exp) => (
        <div
          key={exp.id}
          className="bento-card col-span-1 rounded-2xl p-6 md:col-span-4 md:p-8 lg:col-span-12"
        >
          {/* Card header */}
          <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-on-surface text-lg font-semibold">{exp.title}</h3>
              <p className="text-primary mt-0.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase">
                {exp.company}
                {exp.period.toLowerCase().includes("present") && (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                    <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
                  </span>
                )}
              </p>
            </div>
            <span className="text-on-surface-variant/60 font-mono text-xs md:shrink-0">
              {exp.period}
            </span>
          </div>

          {/* Bullet points */}
          <div className="space-y-3">
            {exp.bullets.map((bullet, i) => (
              <div
                key={i}
                className="border-outline/10 bg-surface-container-low hover:border-primary/20 flex items-start gap-4 rounded-lg border p-4 transition-colors"
              >
                <div className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-sm" />
                <p className="text-on-surface-variant text-sm">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
