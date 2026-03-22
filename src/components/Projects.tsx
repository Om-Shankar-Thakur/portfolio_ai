"use client";

import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";

const projects = [


  {
    title: "AI Mock Interview System",
    description: "AI voice-based interview system using Vapi + Gemini for question generation with real-time feedback and transcript analysis.",
    tags: ["Next.js", "Firebase", "Tailwind", "Vapi", "Gemini"],
    github: "https://github.com/Om-Shankar-Thakur/AI_MOCK_INTERVIEW"
  },
  {
    title: "Edu.AI – RAG-based Course Recommendation",
    description: "Full RAG pipeline using Sentence Transformers and Qdrant to generate personalized learning paths using Groq LLM (Llama 3.3).",
    tags: ["Streamlit", "Docker", "Qdrant", "Sentence Transformers", "Llama 3.3"],
    github: "https://github.com/Om-Shankar-Thakur/Edu.AI"
  },
  {
    title: "VocalVerbum - Speech Translator",
    github: "https://github.com/Om-Shankar-Thakur/VocalVerbum-Multilingual-Speech-Translator",
    description: "Real-time multilingual speech translation using Whisper and Hugging Face TTS",
    tech: ["Whisper", "HuggingFace", "FastAPI"]
  },
  {
    title: "Self-Healing Selenium Framework",
    github: "https://github.com/Om-Shankar-Thakur/self-healing-selenium-framework",
    description: "AI-powered Selenium automation framework with intelligent locator healing using embeddings",
    tech: ["Selenium", "Java", "FastAPI", "SentenceTransformers"]
  },
  {
    title: "Adaptive AI Course Recommender",
    github: "https://github.com/Om-Shankar-Thakur/adaptive-ai-course-recommender",
    description: "AI system that adapts course recommendations based on user behavior and learning patterns",
    tech: ["ML", "Python", "Recommendation Systems"]
  },
  {
    title: "Enterprise AI Learning Assistant",
    github: "https://github.com/Om-Shankar-Thakur/enterprise-ai-learning-assistant",
    description: "AI assistant for enterprise knowledge retrieval using RAG pipelines",
    tech: ["LangChain", "LLM", "RAG"]
  },
  {
    title: "Auxano Email Automation",
    github: "https://github.com/Om-Shankar-Thakur/auxano-email-pitch-automation",
    description: "Automated email generation system using AI for outreach and personalization",
    tech: ["AI", "Automation", "Python"]
  },
  {
    title: "Drowsiness Detection System",
    github: "https://github.com/Om-Shankar-Thakur/drowsiness_detection_with_realTime_Geolocation",
    description: "Real-time driver drowsiness detection with alert system and geolocation sharing",
    tech: ["OpenCV", "TensorFlow", "Python"]
  },
  {
    title: "AI for Sustainable Agriculture",
    description: "Multi-module AI system for crop yield prediction, disease detection, and flood/drought prediction directly applicable to real-world issues.",
    tags: ["TensorFlow", "OpenCV", "Python", "ML Models"],
    github: "https://github.com/Om-Shankar-Thakur/Agriculture.AI"
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-background py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <Code2 className="text-blue-500 w-10 h-10" /> Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-zinc-300 text-lg mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full">
                    {tag}
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
