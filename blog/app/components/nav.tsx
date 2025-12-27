"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Code, Menu, X } from "lucide-react";

const navItems = [
  { id: "about", name: "about" },
  { id: "projects", name: "projects" },
  { id: "feedbacks", name: "feedbacks" },
  { id: "resume", name: "resume" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

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
    return <header className="h-16" />;
  }

  return (
    <header className="sticky top-2 z-40 mx-auto w-full ">
      <nav className="relative flex items-center justify-between rounded-2xl
        border border-black/10 bg-white/80 backdrop-blur-md text-black px-4 sm:px-6 lg:px-10 py-4">

        {/* Brand */}
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <Code className="h-5 w-5 text-white" />
          </div>
          Ahmad Movahedi
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={clsx(
                "font-semibold transition-colors hover:text-sky-600",
                activeSection === item.id &&
                  (theme === "dark"
                    ? "text-sky-400"
                    : "text-sky-600")
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div  className="absolute left-0 top-full mt-4 w-full
              rounded-2xl border border-black/10
              bg-white/95 p-6 shadow-xl backdrop-blur-md
              
              md:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsx(
                      "block font-semibold transition-colors hover:text-sky-600",
                      activeSection === item.id &&
                        (theme === "dark"
                          ? "text-sky-400"
                          : "text-sky-600")
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

