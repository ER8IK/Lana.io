"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Main() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const words = ["Secure blockchains", "Zk proofs", "Quantum resistant"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // ✅ пустой массив зависимостей

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center md:justify-start px-6 md:px-12 py-24 bg-[#0a0c16]"
    >
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
                style={{
                  fontSize: isMobile ? "clamp(1.5rem, 5vw, 2.5rem)" : "clamp(2.5rem, 5vw, 3rem)"
                }}
                className={`font-bold text-blue-400 ${isMobile ? "whitespace-normal break-words" : "whitespace-nowrap"}`}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Pioneering the next generation of decentralized systems with{" "}
          <span className="text-blue-400">advanced cryptography</span> and{" "}
          <span className="text-cyan-400">quantum-resistant security</span>.
        </p>
      </motion.div>
    </section>
  );
}
