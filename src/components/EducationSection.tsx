import { education } from "@/data/portfolio";
import labels from "@/data/labels.json";

export default function EducationSection() {
  return (
    <div
      id="education"
      className="bento-card col-span-1 grid rounded-2xl bg-surface-container-low p-8 md:col-span-4 md:grid-cols-2 md:p-12 lg:col-span-12"
    >
      <div>
        <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {labels.education.overline}
        </span>
        <h2 className="text-3xl font-bold text-on-surface">{labels.education.heading}</h2>
        <p className="mt-2 text-on-surface-variant">{labels.education.description}</p>
      </div>
      <div className="mt-8 space-y-6 md:mt-0">
        {education.map((item) => (
          <div key={item.id} className="flex items-start justify-between">
            <div>
              <h4 className="font-mono text-sm font-bold uppercase text-on-surface">
                {item.degree}
              </h4>
              <p className="mt-1 font-mono text-xs text-on-surface-variant">
                {item.school} • {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
