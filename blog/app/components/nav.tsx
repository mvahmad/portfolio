"use client";
import Link from 'next/link'
import { useEffect, useState } from "react";
const navItems = {
  "#about": { name: "about" },
  "#resume": { name: "resume" },
  "#projects": { name: "projects" },
  "#feedbacks":{name:"feedbacks"}
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about-section");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = considered active
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);



  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-slate-100">
      <div className="lg:sticky lg:top-20">
        <nav
         className="max-w-6xl mx-auto px-6 py-4 flex sm:flex-row flex-col items-center sm:justify-between justify-center"
          id="nav"
        >
          <Link href={"/"}  className="text-2xl font-extrabold text-sky-600">Ahmad Movahedi</Link>
          <div className="flex flex-row md:flex items-center gap-6 text-sm text-slate-600">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                   className={`hover:text-sky-600 ${activeSection === path ? "text-sky-600 font-semibold" : ""}`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
      </header>

  )
}
