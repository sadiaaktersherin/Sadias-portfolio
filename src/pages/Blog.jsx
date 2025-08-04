import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Why React is Awesome",
    date: "July 25, 2025",
    description: "React makes it painless to create interactive UIs. Learn how to build your own components easily.",
    link: "#",
  },
  {
    title: "How to Build a Portfolio",
    date: "July 20, 2025",
    description: "Step-by-step guide to creating a personal portfolio using React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Understanding useEffect",
    date: "July 15, 2025",
    description: "A clear explanation of how the useEffect hook works and how to use it properly.",
    link: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Blog() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {blogPosts.map((post, idx) => (
          <motion.a
            key={idx}
            href={post.link}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform block text-left"
            variants={cardVariants}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
            <button className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition">
              Read More →
            </button>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
