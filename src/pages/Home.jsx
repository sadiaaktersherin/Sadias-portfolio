import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Send } from 'lucide-react';

import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import profileImg from "../assets/profile.jpg";

function Home() {
  return (
    <main className="relative z-10 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 text-gray-800">

      {/* 👋 Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
        data-aos="fade-up"
      >
        {/* 👤 Profile Image */}
        <motion.img
          src={profileImg}
          alt="Sadia"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-400 shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-purple-600">Sadia</span>
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A passionate web developer crafting clean, beautiful, and user-friendly experiences.
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          className="flex gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition inline-flex items-center gap-2"
          >
            <FolderOpen className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-100 transition inline-flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Hire Me
          </a>
        </motion.div>

        {/* ⬇️ Scroll Down Arrow */}
        <motion.a
          href="#about"
          className="text-purple-600 hover:text-purple-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            delay: 1,
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </section>

      {/* 📝 About Me Section */}
      <section
        id="about"
        className="px-6 py-16 text-center bg-white/70 backdrop-blur-md shadow-md mx-6 rounded-2xl"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          I’m a creative developer who loves combining art and technology to build engaging, interactive experiences.
        </p>
      </section>

      {/* 🛠 Skills Section */}
      <section id="skills" className="px-6 py-16">
        <SkillsSection />
      </section>

      {/* 📂 Projects Section */}
      <section id="projects" className="px-6 py-16">
        <ProjectsSection />
      </section>
    </main>
  );
}

export default Home;
