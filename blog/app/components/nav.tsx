"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "./themeSwitch";
import { useTheme } from "next-themes";

const navItems = [
  { id: "about", name: "about" },
  { id: "projects", name: "projects" },
  { id: "feedbacks", name: "feedbacks" },
  { id: "resume", name: "resume" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    // Avoid theme mismatch on SSR
    return <header className="sticky top-0 z-40 h-16 opacity-0" />;
  }

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300",
        theme === "dark"
          ? "bg-slate-900/60 border-slate-800"
          : "bg-white/60 border-slate-100"
      )}
    >
      <div className="lg:sticky lg:top-20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex sm:flex-row flex-col items-center sm:justify-between justify-center">
          <Link
            href="/"
            className={clsx(
              "text-2xl font-extrabold transition-colors duration-300",
              theme === "dark" ? "text-sky-400" : "text-sky-600"
            )}
          >
            Ahmad Movahedi
          </Link>

          <div
            className={clsx(
              "flex flex-row items-center gap-6 text-sm transition-colors duration-300",
              theme === "dark" ? "text-slate-100" : "text-slate-700"
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={clsx(
                  "hover:text-sky-600 transition-colors duration-200 font-semibold",
                  activeSection === item.id &&
                    (theme === "dark"
                      ? "text-sky-400"
                      : "text-sky-600")
                )}
              >
                {item.name}
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
