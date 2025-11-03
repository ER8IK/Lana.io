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
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          We are a passionate team of developers and researchers dedicated to exploring
          the frontiers of <span className="text-blue-400">blockchain</span>,{" "}
          <span className="text-cyan-400">zero-knowledge proofs</span>, and{" "}
          <span className="text-blue-400">quantum security</span>. Our mission is to 
          build scalable and privacy-focused decentralized systems that redefine 
          the boundaries of modern technology.
        </motion.p>
      </div>
    </section>
  );
}