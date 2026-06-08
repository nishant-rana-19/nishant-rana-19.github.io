"use client";

import { useState } from "react";
import labels from "@/data/labels.json";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-outline/10 bg-surface/80 backdrop-blur-md">
        {/* Desktop */}
        <div className="mx-auto hidden max-w-[1200px] items-center justify-between px-6 py-2 md:flex">
          <div className="font-mono text-xl font-bold tracking-tighter text-primary">
            {labels.nav.logo}
          </div>
          <div className="flex items-center gap-12">
            {labels.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-1.5 font-mono text-[13px] uppercase text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              {labels.nav.cta}
            </a>
          </div>
        </div>

        {/* Mobile bar */}
        <div className="flex h-16 items-center justify-between px-6 md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-primary">menu</span>
            <span className="font-mono text-xl font-bold text-primary">{labels.nav.logo}</span>
          </button>
          <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
        style={{ background: "rgba(0,0,0,0.4)" }}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[70] flex w-full flex-col bg-surface transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-outline/10 px-6">
          <span className="font-mono text-xl font-bold tracking-tighter text-primary">
            {labels.nav.logo}
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1 text-on-surface-variant transition-colors hover:text-primary active:scale-90"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
          {labels.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-outline/10 py-5 font-mono text-2xl font-semibold uppercase tracking-wider text-on-surface transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-2xl bg-primary py-4 text-center font-mono text-lg font-semibold uppercase tracking-wider text-on-primary transition-all active:scale-95"
          >
            {labels.nav.cta}
          </a>
        </nav>
      </div>
    </>
  );
}
