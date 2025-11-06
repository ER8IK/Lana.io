"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Solutions() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="solutions"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-24 bg-[#0a0c16]"
    >
      <div className="max-w-5xl w-full text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-orbitron mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Innovative, quantum-secure, and blockchain-native projects that redefine
          digital ownership.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
         <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer bg-[#101223] border border-cyan-500/30 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
        >
          <h3 className="text-2xl font-orbitron text-cyan-400 mb-2">
            QID: Quantum Identity
          </h3>
          <p className="text-gray-300">
            An early stage anchoring layer that allows to link your classic and quantum secure keys today.
          </p>
        </motion.div>
        {/* Bitcoin Vaults */}
        <motion.div
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer bg-[#101223] border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
        >
          <h3 className="text-2xl font-orbitron text-blue-400 mb-2">
            Bitcoin Quantum-Secure Vaults
          </h3>
          <p className="text-gray-300">
            Receiver-enforced vaults that work on Bitcoin today. No new blockchains, no
            protocol changes.
          </p>
        </motion.div>

        {/* Placeholder for future project */}
       
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0a0c16] max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-lg border border-blue-500/30"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 transition"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl md:text-3xl font-orbitron mb-4 text-blue-400">
                Bitcoin Quantum-Secure Vaults
              </h3>

              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                Receiver-enforced vaults that work on Bitcoin today. No new opcodes. No
                new blockchains.
              </p>

              <ul className="text-gray-300 space-y-3 list-disc pl-5">
                <li>
                  <b className="text-cyan-400">Quantum computing is advancing fast</b>.
                  Algorithms like Shor threaten RSA/ECDSA/Schnorr; timelines are uncertain, funds are at risk.
                </li>
                <li>
                  <b className="text-cyan-400">Decentralized ≠ flip a switch</b>.
                  Centralized platforms can upgrade to PQC overnight; blockchains require millions of independent actions.
                </li>
                <li>
                  <b className="text-cyan-400">Ossified by design</b>.
                  Mature chains resist new protocol features; waiting for new opcodes isn’t a plan.
                </li>
                <li>
                  <b className="text-cyan-400">Users resist moving to new L1s</b>.
                  People won’t move funds to brand-new chains just for PQ; meet them on Bitcoin.
                </li>
                <li>
                  <b className="text-cyan-400">PoS is only as secure as its validators’ keys</b>.
                  Validator keys & slashing rules complicate PQ migration.
                </li>
                <li>
                  <b className="text-cyan-400">PoW remains robust</b>.
                  Grover gives ~√ speed-up on hashing; SHA-256d security margin remains high.
                </li>
                <li>
                  <b className="text-cyan-400">Pubkeys leak at spend</b>.
                  Many Bitcoin outputs reveal EC pubkeys on spend; mempool time = attack window.
                </li>
                <li>
                  <b className="text-cyan-400">Scripts can guard value</b>.
                  Pay-to-script-hash (P2WSH) lets you receive to predicates.
                </li>
                <li>
                  <b className="text-cyan-400">BitVM-style enforcement</b>.
                  We verify complex statements off-chain; if someone lies, a tiny on-chain fault proves it.
                </li>
                <li>
                  <b className="text-cyan-400">Prove you own a PQ key</b>.
                  A spender can prove knowledge of a quantum-safe signature to unlock funds.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
