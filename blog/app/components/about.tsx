"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
       <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2 px-4 sm:px-6"
        >
        <h2 className="text-xl font-bold text-sky-600 mb-4">About</h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
          I’m Ahmad Movahedi, a web developer with over 2 years of experience in online brand promotion and digital presence optimization. My background in branding gives me a strong understanding of how design, strategy, and technology work together to create meaningful user experiences. I specialize in building modern, responsive, and high-performance web applications using HTML, CSS, JavaScript, and Next.js.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
          I enjoy translating ideas into clean, efficient, and visually engaging web interfaces that help businesses strengthen their online identity. I’m passionate about writing maintainable code, optimizing performance, and continuously improving my technical skills within the React ecosystem.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-sky-100 hover:shadow-lg hover:border-sky-200 transition"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white hover:opacity-90 transition"
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
            <Image
              src="/Ahmad Avatar.jpg"
              width={64}
              height={64}
              alt="Ahmad Movahedi"
              className="w-14 h-14 rounded-full bg-sky-600 object-cover"
            />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Ahmad Movahedi</h3>
              <p className="text-xs sm:text-sm text-slate-500">Frontend Developer — Next.js / React</p>
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
  );
}