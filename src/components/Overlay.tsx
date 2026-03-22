"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="w-full relative z-10 pointer-events-none">
      {/* Section 1 */}
      <div className="h-[100vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg"
        >
          Om Shankar Thakur
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-xl md:text-2xl text-zinc-200 font-medium tracking-wide drop-shadow-md"
        >
          AI Engineer | Generative AI | Automation
        </motion.p>
      </div>

      {/* Section 2 */}
      <div className="h-[100vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl md:text-6xl font-semibold max-w-4xl leading-tight drop-shadow-xl"
        >
          Building AI-powered systems that solve real-world problems
        </motion.h2>
      </div>

      {/* Section 3 */}
      <div className="h-[100vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl md:text-6xl font-semibold max-w-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-sm pb-2"
        >
          Specializing in NLP, RAG Systems, and Intelligent Automation
        </motion.h2>
      </div>
    </div>
  );
}
