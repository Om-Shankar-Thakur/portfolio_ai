"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Award } from "lucide-react";

const achievements = [
  "1st Position in Tech Fest",
  "2nd Runner-up in Amitech 2023",
  "Naukri Campus Young Turks",
  "SIH Internal Hackathon Participant"
];

export default function Contact() {
  return (
    <section className="relative z-20 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-blue-500 w-8 h-8" /> Achievements
          </h2>
          <ul className="space-y-4">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-blue-500 mt-1">▹</span>
                <span className="text-lg text-zinc-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-zinc-400 mb-8 text-lg">
            I&apos;m currently looking for new opportunities to build AI-powered solutions. My inbox is always open.
          </p>

          <div className="space-y-6">
            <a href="mailto:om.work466@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="text-lg">om.work466@gmail.com</span>
            </a>
            
            <a href="tel:7903301466" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-lg">7903301466</span>
            </a>

            <a href="https://github.com/Om-Shankar-Thakur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Github size={20} />
              </div>
              <span className="text-lg">github.com/Om-Shankar-Thakur</span>
            </a>
          </div>
        </motion.div>

      </div>
      <div className="text-center mt-24 text-zinc-500 text-sm">
        <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Om Shankar Thakur. All rights reserved.</p>
      </div>
    </section>
  );
}
