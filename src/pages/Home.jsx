import React from 'react';
import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';



function Home() {
  return (
    <main className="relative z-10 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 text-gray-800">

      {/* 👋 Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20" data-aos="fade-up">
        <motion.h1 
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-purple-600">Sadia</span>
        </motion.h1>

        <motion.p 
          className="text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A passionate web developer crafting clean, beautiful, and user-friendly experiences.
        </motion.p>
      </section>

      {/* 📝 About Me Section */}
      <section id="about" className="px-6 py-16 text-center bg-white/70 backdrop-blur-md shadow-md mx-6 rounded-2xl" data-aos="fade-right">
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
