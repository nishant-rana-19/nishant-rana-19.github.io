import { skills } from "@/data/portfolio";
import labels from "@/data/labels.json";

type SkillKey = keyof typeof skills;

const skillGroups = labels.skills.groups.map((g) => ({
  ...g,
  items: skills[g.dataKey as SkillKey],
}));

export default function SkillsSection() {
  return (
    <>
      {/* Section header — full width */}
      <div
        id="skills"
        className="bento-card bg-secondary-container/10 col-span-1 flex flex-col justify-center rounded-2xl p-6 md:col-span-4 md:p-8 lg:col-span-12"
      >
        <span className="text-secondary mb-3 font-mono text-xs tracking-[0.2em] uppercase">
          {labels.skills.overline}
        </span>
        <h2 className="text-on-surface text-xl font-semibold">{labels.skills.heading}</h2>
        <p className="text-on-surface-variant mt-2 text-sm">{labels.skills.description}</p>
      </div>

      {/* Skill cards — 3 across on desktop (2 rows of 3) */}
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="bento-card col-span-1 rounded-2xl p-6 md:col-span-2 lg:col-span-4"
        >
          <div className="text-primary mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined">{group.icon}</span>
            <h4 className="font-mono text-sm font-semibold tracking-wider uppercase">
              {group.title}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="bg-secondary/10 text-secondary rounded-lg px-3 py-1 font-mono text-xs"
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
