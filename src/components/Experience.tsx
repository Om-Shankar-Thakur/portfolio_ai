"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    duration: "Jan 2026 - Present",
    points: [
      "Working in Quality Engineering domain focusing on Selenium automation and Java",
      "Building AI-powered self-healing automation frameworks using Selenium + FastAPI",
      "Developing scalable test automation solutions with TestNG, Maven, and CI/CD integration",
      "Integrating AI models for intelligent locator healing and test optimization"
    ]
  },
  {
    role: "AI/ML Intern",
    company: "NathCorp Inc.",
    achievements: [
      "Built Medical AI Voice Assistant",
      "Integrated SpeechBrain for STT + TTS",
      "Improved automation efficiency by 25%",
      "Reduced manual errors by 15%",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Surusha Technology Pvt Ltd",
    achievements: [
      "Developed LMS with authentication (Google Sign-In)",
      "Improved user engagement by 40%",
      "Built Qt C++ software for chemical data processing and visualization",
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <Briefcase className="text-blue-500 w-8 h-8" /> Experience
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-zinc-700/50"
            >
              <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <h4 className="text-xl text-blue-400/90 mb-6">{exp.company}</h4>

              <ul className="space-y-3">
                {exp.achievements?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-blue-500/80 mt-1 text-sm">▹</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
