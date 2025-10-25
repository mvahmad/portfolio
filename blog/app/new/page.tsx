"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

const feedbacks = [
  {
    id: 1,
    name: "Mohammad Sami Askari",
    date: "August 1, 2025",
    text: "The site feels modern and well-optimized.",
  },
  {
    id: 2,
    name: "bil gits",
    date: "July 21, 2025",
    text: "Some buttons don’t have hover effects, which could make interactions clearer.",
  },
  {
    id: 3,
    name: "Amir Hossein Masihi",
    date: "July 10, 2025",
    text: "The mobile responsiveness works well — nice use of CSS modules/Tailwind.",
  },
];

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const feedbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased leading-relaxed">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-sky-600">Ahmad Movahedi</h1>
          <ul className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <li> 
              <a
                href="#about"
                className={`hover:text-sky-600 ${activeSection === "about" ? "text-sky-600 font-semibold" : ""}`}
                aria-current={activeSection === "about" ? "page" : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:text-sky-600 ${activeSection === "projects" ? "text-sky-600 font-semibold" : ""}`}
                aria-current={activeSection === "projects" ? "page" : undefined}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#feedbacks"
                className={`hover:text-sky-600 ${activeSection === "feedbacks" ? "text-sky-600 font-semibold" : ""}`}
                aria-current={activeSection === "feedbacks" ? "page" : undefined}
              >
                Feedbacks
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-sky-600">
                Resume
              </a>
            </li>
          </ul>

          <div className="md:hidden">
            {/* small-screen simple jump links */}
            <select
              onChange={(e) => {
                const id = e.target.value;
                if (!id) return;
                const el = document.getElementById(id);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Jump to section"
              className="text-sm border px-3 py-2 rounded-md"
            >
              <option value="">Navigate</option>
              <option value="about">About</option>
              <option value="projects">Projects</option>
              <option value="feedbacks">Feedbacks</option>
              <option value="resume">Resume</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl font-bold text-sky-600 mb-4">About</h2>
              <p className="text-base text-slate-700 leading-7">
                I’m Ahmad Movahedi, a web developer with over 2 years of experience in online brand promotion and digital presence optimization. My
                background in branding gives me a strong understanding of how design, strategy, and technology work together to create meaningful user
                experiences. I specialize in building modern, responsive, and high-performance web applications using HTML, CSS, JavaScript, and Next.js.
              </p>
              <p className="mt-4 text-base text-slate-700 leading-7">
                I enjoy translating ideas into clean, efficient, and visually engaging web interfaces that help businesses strengthen their online
                identity. I’m passionate about writing maintainable code, optimizing performance, and continuously improving my technical skills within the
                React ecosystem.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-sky-100 hover:shadow-lg hover:border-sky-200 transition"
                >
                  View Projects
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white hover:opacity-90 transition"
                >
                  View Resume
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h3 className="font-semibold">Ahmad Movahedi</h3>
                  <p className="text-xs text-slate-500">Frontend Developer — Next.js / React</p>
                </div>
              </div>

              <ul className="mt-4 text-sm text-slate-600 space-y-2">
                <li>📍 Remote • Iran</li>
                <li>💼 Open to collaboration</li>
                <li>✉️ <a href="#resume" className="underline">Contact / Resume</a></li>
              </ul>
            </motion.aside>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-2xl font-bold text-sky-600 mb-6">My Projects</h2>
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

        <section id="feedbacks" className="py-12">
          <h2 className="text-2xl font-bold text-sky-600 mb-6">Feedbacks</h2>
          <p className="text-slate-600 mb-6">Real feedback from collaborators and users. Swipe on mobile or use arrows.</p>

          <div className="relative">
            <FeedbackCarousel items={feedbacks} />
          </div>
        </section>

        <section id="resume" className="py-12">
          <h2 className="text-2xl font-bold text-sky-600 mb-6">My Resume</h2>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white max-w-xl">
              <h3 className="font-semibold">Connect</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>
                  <a href="#" className="inline-flex items-center gap-2 underline">GitHub</a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 underline">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 underline">Download Resume</a>
                </li>
              </ul>
            </div>

            <div className="flex-1 text-slate-600">
              <h4 className="font-medium">Summary</h4>
              <p className="mt-2">Frontend developer focused on building accessible, high-performance web apps. Skilled in React, Next.js, and modern CSS.
              </p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <span className="text-xs border px-2 py-1 rounded-full">Next.js</span>
                <span className="text-xs border px-2 py-1 rounded-full">React</span>
                <span className="text-xs border px-2 py-1 rounded-full">Tailwind</span>
                <span className="text-xs border px-2 py-1 rounded-full">Performance</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-sm text-slate-500">
          <div className="max-w-6xl mx-auto text-center">© {new Date().getFullYear()} Ahmad Movahedi — Built with Next.js & Tailwind</div>
        </footer>
      </main>
    </div>
  );
}

function FeedbackCarousel({ items }: { items: typeof feedbacks }) {
  const [index, setIndex] = useState(0);
  const length = items.length;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), 6000);
    return () => clearInterval(id);
  }, [length]);

  return (
    <div className="relative">
      <div className="flex items-center gap-4 overflow-hidden">
        {items.map((it, i) => (
          <motion.blockquote
            key={it.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: i === index ? 1 : 0.3, scale: i === index ? 1 : 0.98 }}
            transition={{ duration: 0.45 }}
            className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm ${
              i === index ? "z-10" : ""
            }`}
            style={{ display: i === index ? "block" : "none" }}
          >
            <div className="text-sm text-slate-500">{it.date}</div>
            <p className="mt-2 text-lg font-semibold text-slate-800">{it.name}</p>
            <p className="mt-3 text-slate-600">“{it.text}”</p>
          </motion.blockquote>
        ))}
      </div>

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
        <button
          aria-label="Previous feedback"
          className="p-2 rounded-full border bg-white shadow-sm"
          onClick={() => setIndex((i) => (i - 1 + length) % length)}
        >
          ‹
        </button>
        <button
          aria-label="Next feedback"
          className="p-2 rounded-full border bg-white shadow-sm"
          onClick={() => setIndex((i) => (i + 1) % length)}
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to feedback ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-8 h-1 rounded-full ${i === index ? "bg-sky-600" : "bg-slate-200"}`}
          />
        ))}
      </div>
    </div>
  );
}
