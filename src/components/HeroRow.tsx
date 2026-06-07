import Image from "next/image";

export default function HeroRow() {
  return (
    <>
      {/* Hero card */}
      <div className="bento-card col-span-1 flex min-h-[340px] flex-col justify-center rounded-2xl p-8 md:col-span-4 md:p-12 lg:col-span-8">
        {/* Mobile: circular avatar */}
        <div className="mb-6 flex justify-center md:hidden">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
          </div>
        </div>

        {/* Desktop: overline */}
        <span className="mb-3 hidden font-mono text-xs uppercase tracking-[0.2em] text-primary md:block">
          Architecture &amp; Design
        </span>

        <h1 className="mb-3 text-center text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-left md:text-5xl">
          Senior Frontend Architect
        </h1>

        <p className="max-w-xl text-center text-on-surface-variant md:text-left">
          I bridge the gap between complex engineering requirements and elegant user interfaces.
          With over a decade of experience building scalable systems, I specialize in React
          ecosystems, micro-frontends, and performance-first architecture.
        </p>

        {/* Mobile: CTA buttons */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase text-on-primary shadow-md transition-transform active:scale-95"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="rounded-lg border border-secondary px-6 py-3 font-mono text-sm font-semibold uppercase text-secondary transition-transform hover:bg-secondary/5 active:scale-95"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Profile photo (desktop only) */}
      <div className="bento-card group relative hidden overflow-hidden rounded-2xl md:col-span-2 md:block lg:col-span-4">
        <Image
          src="/images/profile.jpg"
          alt="Professional Portrait"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* CTA card (desktop only) */}
      <div className="bento-card hidden flex-col justify-between rounded-2xl bg-primary-container/10 p-6 md:col-span-2 md:flex lg:col-span-4">
        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-mono text-sm font-semibold uppercase text-on-primary transition-all hover:bg-primary/90">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Resume
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary py-3 font-mono text-sm font-semibold uppercase text-secondary transition-all hover:bg-secondary/10">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            View Projects
          </button>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-outline/10 px-1 pt-2">
          <a
            href="#"
            className="font-mono text-xs uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-mono text-xs uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
