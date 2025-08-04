import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.jpg";
import ecommerceImg from "../assets/E-commerce.jpg";
import blogImg from "../assets/Blog.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek, animated portfolio using React & Tailwind.",
    img: portfolioImg,
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://sadias-portfolio.netlify.app/",
  },
  {
    title: "E-commerce App",
    description: "A fully functional e-commerce platform with cart & checkout.",
    img: ecommerceImg,
    tech: ["React", "Firebase", "Stripe"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A modern blog site with Markdown support.",
    img: blogImg,
    tech: ["React", "Markdown", "Netlify"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="p-16 text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl mx-6 my-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-[1.03] transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* 🖼 Project Image */}
            <div className="relative">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/30 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm font-semibold transition"
                >
                  Visit Site
                </a>
              )}
            </div>

            {/* 📝 Project Details */}
            <div className="p-4 text-left">
              <h3 className="text-xl font-bold text-purple-700">{project.title}</h3>
              <p className="text-gray-700 mt-2 mb-3">{project.description}</p>

              {/* 🧠 Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
