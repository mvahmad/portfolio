'use client'
import { motion } from "framer-motion"
export const metadata = {
  title: 'Ahmad Movahedi Projects',
  description: 'Read my Projects List.',
}

const projects = [
  {
    id: 1,
    title: "Project One",
    tags: ["Next.js", "Tailwind"],
    desc: "A fast, accessible marketing site with focus on performance.",
  },
  {
    id: 2,
    title: "Project Two",
    tags: ["React", "API"],
    desc: "Interactive dashboard with charts and custom components.",
  },
  {
    id: 3,
    title: "Project Three",
    tags: ["UI/UX", "Design"],
    desc: "Design system and component library for internal tooling.",
  },
];

export default function Projects({id}: {id: string}) {
  return (
    <section id={id} className="py-12">
          <h2 className="text-xl font-bold text-sky-600 mb-6">My Projects</h2>
          <p className="text-slate-600 mb-6">Here are some of the projects I've worked on, showcasing my skills in web development and design.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-100 p-6 bg-white shadow-sm"
              >
                <div className="h-40 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
                  <span className="text-sm">Project screenshot</span>
                </div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs border px-2 py-1 rounded-full text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a className="text-sm underline" href="#">Live</a>
                  <a className="text-sm underline" href="#">Source</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
  )
}
