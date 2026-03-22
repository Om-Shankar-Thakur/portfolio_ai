"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              I am an AI Engineer passionate about leveraging artificial intelligence to architect and deploy practical automation frameworks. With a strong focus on Generative AI and ML, I specialize in translating complex real-world problems into scalable, intelligent solutions.
            </p>

            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-4">
                <span className="text-blue-400 text-xl font-bold mt-1">▹</span>
                <span><strong>B.Tech in Computer Science Engineering</strong> from Amity University Jharkhand </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400 text-xl font-bold mt-1">▹</span>
                <span><strong>Specialized Focus:</strong> AI/ML, NLP, and Generative AI to push technological boundaries</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400 text-xl font-bold mt-1">▹</span>
                <span><strong>Experience:</strong> Building robust voice assistants, data processing frameworks, and AI software</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-400 text-xl font-bold mt-1">▹</span>
                <span><strong>Vision:</strong> A profound passion for solving complex, real-world problems by delivering efficient, impactful AI tools</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
