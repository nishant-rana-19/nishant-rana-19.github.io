"use client";

import { useState, useEffect } from "react";
import labels from "@/data/labels.json";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState(labels.bottomNav[0].id);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const tab of [...labels.bottomNav].reverse()) {
        const el = document.getElementById(tab.id);
        if (el && el.offsetTop <= scrollY) {
          setActiveTab(tab.id);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-2xl border-t border-outline-variant/30 bg-surface shadow-[0_-4px_20px_0_rgba(155,47,0,0.05)] md:hidden">
      {labels.bottomNav.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-all duration-200 active:scale-90 ${
              active
                ? "bg-primary-container/20 text-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
            <span className="mt-0.5 font-mono text-[11px] font-semibold">{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
