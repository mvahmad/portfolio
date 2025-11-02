"use client";
import clsx from 'clsx';
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "./themeSwitch";
import { useTheme } from 'next-themes';

const navItems = {
  about: { name: "about" },
  // 
  projects: { name: "projects" },
  feedbacks: { name: "feedbacks" },
  resume: { name: "resume" },
};

export  function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const { theme } = useTheme();
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


  return (
    <header className={clsx("sticky top-0 z-40 backdrop-blur-md border-b  ",
      theme === 'dark'?  "bg-slate-900/60 border-black " : "bg-white/60 border-slate-100"
    )}>
      <div className="lg:sticky lg:top-20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex sm:flex-row flex-col items-center sm:justify-between justify-center">
          <Link href="/" className={clsx("text-2xl font-extrabold",
            theme === 'dark'?  " text-sky-400 " : " text-sky-600 "
          )}>
            Ahmad Movahedi
          </Link>
            <div className={clsx("flex flex-row items-center gap-6 text-sm",
              theme === 'dark'?  " text-slate-100 " : " text-slate-700 ",
            )}>
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={`#${path}`}
                className={clsx(`${
                  activeSection === path ? "text-sky-600 font-semibold" : ""
                }`,theme === 'dark' &&  activeSection === path ?  "text-sky-400 " : " hover:text-sky-600 ")}
              >
                {name}
              </Link>
            ))}
        <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
}
