"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Page() {
  return (
    <div className="h-screen overflow-auto snap-y snap-proximity scroll-smooth">
      <Header />
      
      <motion.main
        className="w-full bg-[#0a0c16] text-gray-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.section 
          variants={sectionVariants}
          className="snap-start"
        >
          <Main />
        </motion.section>

        <motion.section 
          variants={sectionVariants}
          className="snap-start"
        >
          <About />
        </motion.section>

        <motion.section 
          variants={sectionVariants}
          className="snap-start"
        >
          <Solutions />
        </motion.section>

        <motion.section 
          variants={sectionVariants}
          className="snap-start"
        >
          <Research />
        </motion.section>

        
      </motion.main>
    </div>
  );
}