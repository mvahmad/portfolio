"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import FeaturesSection from "./featuresSection";

export default function IntroSection() {
  return (
    <>
     <section className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center"
      >
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl
            bg-gradient-to-br from-blue-500 to-cyan-500
            shadow-2xl shadow-blue-500/30"
          >
            <Code className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-bold uppercase tracking-wide text-sky-400"
          style={{ fontSize: "clamp(2.25rem, 6vw + 1rem, 5rem)" }}
        >
          Web Developer
        </h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className=" font-semibold text-blue-600/90"
          style={{ fontSize: "clamp(1.5rem, 3vw + 0.75rem, 2.75rem)" }}
        >
          for coaches and consultants
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-gray-600"
          style={{ fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.125rem)" }}
        >
          Professional websites that convert visitors into premium clients.
          Specialized in building{" "}
          <span className="text-slate-800">high-converting</span>,{" "}
          <span className="text-slate-800">scalable</span>, and{" "}
          <span className="text-slate-800">beautiful</span> web solutions for
          your coaching business.
        </motion.p>
      </motion.div>
    </section>
      <FeaturesSection />
    </>
   
  );
}
