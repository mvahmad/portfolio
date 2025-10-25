"use client";
import Link from 'next/link'
import { useEffect, useState } from "react";
const navItems = {
  "#skils": { name: "skils" },
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
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex scroll-smooth sm:justify-between justify-center items-center sm:flex-row flex-col  relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href={"/"} className='text-3xl text-sky-600 font-bold'>Ahmad Movahedi</Link>
          <div className="flex flex-row space-x-0 sm:pr-10 pr-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all ${activeSection == path ? "font-bold text-blue-600" : ""} text-sky-400 hover:text-sky-700 flex align-middle relative py-1 px-2 m-1`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
