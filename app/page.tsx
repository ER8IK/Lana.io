import { motion } from "framer-motion";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Research from "./components/Research";
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
      {/* Скрытый SEO контент - добавляется в начало */}
      <div className="sr-only">
        <h1>CircuitLabs - Quantum Resistant Blockchain Solutions</h1>
        <p>Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.</p>
        <h2>Quantum Cryptography Research & Development</h2>
        <p>We specialize in post-quantum encryption, zero-knowledge proof systems, and quantum-resistant blockchain protocols for next-generation Web3 security.</p>
        <h3>Our Blockchain Security Services</h3>
        <ul>
          <li>Quantum-Resistant Blockchain Development</li>
          <li>Zero-Knowledge Proof Systems Implementation</li>
          <li>Post-Quantum Cryptography Solutions</li>
          <li>Blockchain Security Audits and Penetration Testing</li>
          <li>Web3 Infrastructure and Decentralized Systems</li>
          <li>Cryptographic Protocol Design and Analysis</li>
        </ul>
      </div>
      
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

        <motion.section 
          variants={sectionVariants}
          className="snap-start"
        >
          <Footer />
        </motion.section>
      </motion.main>
    </div>
  );
}