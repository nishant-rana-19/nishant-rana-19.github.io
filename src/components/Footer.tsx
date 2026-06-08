import { social } from "@/data/portfolio";
import labels from "@/data/labels.json";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-outline/10 bg-surface-container-low">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row md:gap-0">
        <div className="font-mono text-sm font-bold text-primary">{labels.footer.logo}</div>
        <p className="text-center font-mono text-xs text-tertiary">{labels.footer.copyright}</p>
        <div className="flex gap-6">
          <a
            href={social.linkedin}
            className="font-mono text-xs uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            {labels.footer.links.linkedin}
          </a>
          <a
            href={social.github}
            className="font-mono text-xs uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            {labels.footer.links.github}
          </a>
          <a
            href={social.resume}
            download="Nishant_Rana_Resume.pdf"
            className="font-mono text-xs uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            {labels.footer.links.resume}
          </a>
        </div>
      </div>
    </footer>
  );
}
