"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Main() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Blockchain", "Web3", "Crypto", "DeFi"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center md:justify-start px-6 md:px-12 py-24 bg-[#0a0c16]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col max-w-lg w-full md:ml-[15%]"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight font-orbitron">
          <span className="block">Build the future</span>
          <span className="flex items-baseline gap-2">
            <span>of</span>
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-400"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Pioneering the next generation of decentralized systems with{" "}
          <span className="text-blue-400">cutting-edge cryptography</span> and{" "}
          <span className="text-cyan-400">quantum-resistant security</span>.
        </p>
      </motion.div>
    </section>
  );
}