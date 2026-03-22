"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "TypeScript", "C++"]
  },

  {
    category: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "RAG (Retrieval-Augmented Generation)",
      "Sentence Transformers",
      "TensorFlow"
    ]
  },

  {
    category: "Generative AI",
    items: [
      "Prompt Engineering",
      "LLM Integration",
      "LangChain",
      "Hugging Face Transformers",
      "Groq API",
      "OpenAI API",
      "Whisper (Speech-to-Text)",
      "Text-to-Speech Systems"
    ]
  },

  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Qdrant", "Neo4j", "FAISS"]
  },

  {
    category: "Automation & Testing",
    items: ["Selenium WebDriver", "TestNG", "Maven", "Automation Framework Design"]
  },

  {
    category: "Tools & Frameworks",
    items: ["FastAPI", "Docker", "Git", "Next.js", "Tailwind CSS"]
  }
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-zinc-100"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-zinc-200 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
