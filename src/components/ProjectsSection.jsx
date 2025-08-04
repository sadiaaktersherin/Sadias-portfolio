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
  },
  {
    title: "E-commerce App",
    description: "A fully functional e-commerce platform with cart & checkout.",
    img: ecommerceImg
  },
  {
    title: "Blog Platform",
    description: "A modern blog site with Markdown support.",
    img: blogImg
  }
];

export default function ProjectsSection() {
  return (
    <section className="p-16 text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl mx-6 my-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
