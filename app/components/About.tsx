"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-24 bg-[#0a0c16]">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-orbitron mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          <span className="text-blue-400 font-semibold">Mission:</span> <span className="text-blue-400 font-semibold">Empower</span> users to take control of their <span className="text-cyan-400 font-semibold">quantum resistant</span> future. <span className="text-blue-400 font-semibold">Protect</span> your funds and your <span className="text-cyan-400 font-semibold">identify</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-4"
        >
          <span className="text-blue-400 font-semibold">How:</span> Build a <span className="text-blue-400 font-semibold">suite of tools</span> that seamlessly provide <span className="text-cyan-400 font-semibold">quantum level security</span> across <span className="text-blue-400 font-semibold">multiple blockchains</span>.
        </motion.p>
      </div>
    </section>
  );
}
