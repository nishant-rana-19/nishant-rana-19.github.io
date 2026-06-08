import Image from "next/image";
import { projects } from "@/data/portfolio";
import labels from "@/data/labels.json";

export default function ProjectsSection() {
  return (
    <>
      {projects.map((project, idx) => (
        <div
          key={project.id}
          id={idx === 0 ? "projects" : undefined}
          className="bento-card group col-span-1 overflow-hidden rounded-2xl md:col-span-4 lg:col-span-6"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span
                className={`${project.categoryBg} rounded px-3 py-1 font-mono text-xs uppercase tracking-widest text-white backdrop-blur`}
              >
                {project.category}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="mb-1 text-xl font-semibold text-on-surface">{project.title}</h3>
            <p className="mb-5 line-clamp-2 text-sm text-on-surface-variant">
              {project.description}
            </p>
            <a
              href={project.href}
              className="flex items-center gap-1 font-mono text-xs font-bold uppercase text-primary"
            >
              {labels.projects.detailsLink}
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
