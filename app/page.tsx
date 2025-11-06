"use client";

import { motion } from "framer-motion";
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Solutions from './components/Solutions';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // задержка между секциями
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Page() {
  return (
    <motion.main
      className="w-full bg-[#0a0c16] text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Header />
      <motion.div variants={sectionVariants}><Main /></motion.div>
      <motion.div variants={sectionVariants}><About /></motion.div>
      <motion.div variants={sectionVariants}><Solutions /></motion.div>
    </motion.main>
  );
}
