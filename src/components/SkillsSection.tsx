import { skills } from "@/data/portfolio";

const skillGroups = [
  { title: "Frontend", icon: "layers", items: skills.frontend },
  { title: "Platform", icon: "settings_suggest", items: skills.platform },
];

export default function SkillsSection() {
  return (
    <>
      {/* Section header */}
      <div
        id="skills"
        className="bento-card col-span-1 flex flex-col justify-center rounded-2xl bg-secondary-container/10 p-6 md:col-span-4 md:p-8 lg:col-span-4"
      >
        <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
          Stack
        </span>
        <h2 className="text-xl font-semibold text-on-surface">Technical Ecosystem</h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Expertise across the modern stack focused on performance and scale.
        </p>
      </div>

      {/* Skill cards */}
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="bento-card col-span-1 rounded-2xl p-6 md:col-span-2 lg:col-span-4"
        >
          <div className="mb-5 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">{group.icon}</span>
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider">
              {group.title}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
