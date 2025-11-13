"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error">("idle");

  const handleEmailRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullname.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Message from CircuitLabs.io: ${fullname}`);
    const body = encodeURIComponent(
      `Hello CircuitLabs team,

My name is ${fullname}, and I would like to reach out to you.

Message:
${message}

Best regards,
${fullname}`
    );

    const mailtoLink = `mailto:lana@circuitlabs.io?subject=${subject}&body=${body}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lana@circuitlabs.io&su=${subject}&body=${body}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // На мобильных устройствах открываем стандартное почтовое приложение
      window.location.href = mailtoLink;
    } else {
      // На десктопе открываем Gmail в новой вкладке
      window.open(gmailLink, "_blank");
    }

    setFullName("");
    setMessage("");
    setStatus("idle");
  };

  return (
    <footer id="contact" className="w-full bg-[#0a0c16] border-t border-white/10 py-10 px-6 md:px-12 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        {/* 🔹 Призыв к действию */}
        <div className="text-center md:text-left">
          <h3 className="font-orbitron text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            Have a project in mind?{" "}
            <a
              href="mailto:lana@circuitlabs.io"
              className="text-blue-400 hover:underline"
            >
              Send us an email
            </a>
            .
          </p>
        </div>

        {/* 🔹 Форма для отправки */}
        <form onSubmit={handleEmailRedirect} className="flex flex-col gap-3 w-full max-w-md">
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="bg-[#101223] border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-[#101223] border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 resize-none h-28 w-full"
          />

          <div className="flex flex-col md:flex-row justify-center gap-3 mt-3 items-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-500 hover:via-indigo-400 hover:to-blue-300 active:from-blue-700 active:via-indigo-600 active:to-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
            >
              Send Message
            </button>

            {status === "error" && (
              <span className="text-red-400 text-sm mt-2 md:mt-0">
                Please fill in all fields.
              </span>
            )}
          </div>
        </form>
      </motion.div>

      {/* 🔹 Footer copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} CircuitLabs. All rights reserved.
      </motion.div>
    </footer>
  );
}
