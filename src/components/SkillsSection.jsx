import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500 text-4xl mb-2" />,
    description: "Building interactive UIs with reusable components.",
    color: "bg-blue-100"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-4xl mb-2" />,
    description: "Crafting modern, responsive designs efficiently.",
    color: "bg-teal-100"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-4xl mb-2" />,
    description: "Bringing logic and dynamic behavior to the web.",
    color: "bg-yellow-100"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-4xl mb-2" />,
    description: "Creating backend services & APIs with ease.",
    color: "bg-green-100"
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-800 text-4xl mb-2" />,
    description: "Version control & collaboration on projects.",
    color: "bg-gray-100"
  }
];

export default function SkillsSection() {
  return (
    <section
      className="p-16 text-center bg-white rounded-2xl shadow-xl mx-6 my-10"
      data-aos="fade-left"
    >
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl ${skill.color} shadow-md hover:shadow-xl hover:scale-[1.05] transition-all duration-300`}
            variants={cardVariants}
            whileHover={{ rotate: [0, 1.5, -1.5, 0] }}
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-700">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
