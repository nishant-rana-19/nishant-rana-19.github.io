import Image from "next/image";
import labels from "@/data/labels.json";
import { social } from "@/data/portfolio";

const { hero } = labels;

export default function HeroRow() {
  return (
    <>
      {/* Hero card */}
      <div className="bento-card col-span-1 flex min-h-[340px] flex-col justify-center rounded-2xl p-8 md:col-span-4 md:p-12 lg:col-span-8">
        {/* Mobile: circular avatar */}
        <div className="mb-6 flex justify-center md:hidden">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image src="/images/profile_pic.jpg" alt="Profile" fill className="object-cover" />
          </div>
        </div>

        <span className="text-primary mb-3 font-mono text-xs tracking-[0.2em] uppercase">
          {hero.overline}
        </span>

        <h1 className="text-on-surface mb-3 text-center text-4xl leading-tight font-extrabold tracking-tight md:text-left md:text-5xl">
          {hero.title}
        </h1>

        <p className="text-on-surface-variant max-w-xl text-center md:text-left">
          {hero.description}
        </p>

        {/* CTA row */}
        <div className="border-outline/10 mt-6 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row md:items-center">
          <a
            href="/resume.pdf"
            download="Nishant_Rana_Resume.pdf"
            className="bg-primary text-on-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-mono text-sm font-semibold uppercase transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            {hero.resumeButton}
          </a>
          <div className="flex gap-3">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={hero.socialLabels.linkedin}
              className="bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-lg p-2 transition-all active:scale-95"
            >
              {/* LinkedIn */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={hero.socialLabels.github}
              className="bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-lg p-2 transition-all active:scale-95"
            >
              {/* GitHub */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href={hero.email}
              aria-label={hero.socialLabels.email}
              className="bg-primary/10 text-primary hover:bg-primary/20 rounded-lg p-2 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </a>
          </div>
        </div>
      </div>

      {/* Profile photo (desktop only) */}
      <div className="bento-card hidden flex-col items-center justify-center rounded-2xl p-8 md:col-span-2 md:flex lg:col-span-4">
        <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-56 lg:w-56">
          <Image
            src="/images/profile_pic.jpg"
            alt="Professional Portrait"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
