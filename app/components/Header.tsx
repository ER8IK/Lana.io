'use client';

import React, { FC, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./LogoSphere"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#main", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#solutions", label: "Solutions" },
    { href: "#team", label: "Research" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Логотип */}
        <div className="font-orbitron text-xl sm:text-3xl font-bold flex items-center space-x-2">
  <Logo size={40} /> {/* тут можно менять размер и цвет */}
  <Link href="/" className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    CircuitLabs
  </Link>
</div>


        {/* Десктопная навигация */}
        <nav className="space-x-6 hidden md:flex font-orbitron text-lg md:text-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка гамбургера */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6 font-orbitron">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-lg hover:scale-105 transition-transform"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;