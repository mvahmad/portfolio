"use client"
import { motion } from "framer-motion"
import clsx from 'clsx';
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
const projects = [
  {
    id: 1,
    title: "Elite Sport",
    tags: ["Next.js", "Tailwind"],
    desc: "A fast, accessible marketing site with focus on performance.",
    liveLink:"https://elite-sport-beta.vercel.app",
    sourceLink:"https://github.com/mvahmad/shopping-cart",
    imgSrc:"/elite-sport.png",
    imgAlt:"elite-sport"
  },
  {
    id: 2,
    title: "Elite Sport Admin",
    tags: ["React", "API"],
    desc: "Interactive dashboard with charts and custom components for elite-sport back-end.",
    liveLink:"https://elite-sport-beta.vercel.app/admin",
    sourceLink:"https://github.com/mvahmad/shopping-cart",
    imgSrc:"/dashboard.png",
    imgAlt:"elite-sport-dashboard"
  },
];

export default function Projects({id}: {id: string}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a non-themed placeholder on server render
    return (
      <section id={id} className="py-12" />
    );
  }

  return (
    <section id={id} className="py-12">
          <h2 className={clsx("text-xl font-bold  mb-6" , theme === "dark" ? "text-sky-300" : "text-sky-600" )}>My Projects</h2>
          <p className={clsx("mb-6" , theme === "dark" ? "text-slate-300" : "text-slate-700" )}>Here are some of the projects I've worked on, showcasing my skills in web development and design.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className={clsx("rounded-2xl border border-slate-100 p-6 shadow-sm" ,
                  theme === "dark"?
                " bg-slate-800 border-slate-700 hover:border-slate-600 " :
                " bg-white border-slate-200 hover:border-slate-300 ")}
              >
                <div className="h-40 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
                  {/* <span className="text-sm">Project screenshot</span> */}
                  <img
                  src={p.imgSrc}
                  alt={p.imgAlt}
                  className="h-40 bg-sky-600 object-cover"
                    />
                </div>
                <h3 className={clsx("font-semibold text-lg" , theme === "dark" ? "text-slate-300" :"text-slate-700")}>{p.title}</h3>
                <p className={clsx("text-sm mt-2",theme === "dark" ? "text-slate-300" :"text-slate-600")}>{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className={clsx("text-xs border px-2 py-1 rounded-full",
                      theme === "dark" ? "text-slate-300 border-slate-600" : "text-slate-700 border-slate-300"
                    )}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a className={clsx("text-sm underline",theme === "dark" ? "text-slate-300" :"text-slate-700")} target="_blank" href={p.liveLink}>Live</a>
                  <a  className={clsx("text-sm underline",theme === "dark" ? "text-slate-300" :"text-slate-700")} target="_blank" href={p.sourceLink}>Source</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
  )
}
