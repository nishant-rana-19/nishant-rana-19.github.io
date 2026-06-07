export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-outline/10 bg-surface/80 backdrop-blur-md">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1200px] items-center justify-between px-6 py-2 md:flex">
        <div className="font-mono text-xl font-bold tracking-tighter text-primary">ALEX.DEV</div>
        <div className="flex items-center gap-12">
          <a
            href="#experience"
            className="font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-1.5 font-mono text-[13px] uppercase text-on-primary transition-all hover:opacity-90 active:scale-95"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-16 items-center justify-between px-6 md:hidden">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">menu</span>
          <span className="text-xl font-bold text-primary">ALEX.DEV</span>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
      </div>
    </nav>
  );
}
