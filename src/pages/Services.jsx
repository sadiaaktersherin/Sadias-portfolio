import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const services = [
  { title: '🔧 Website Development' },
  { title: '🎨 UI/UX Design' },
  { title: '📱 Responsive Design' },
  { title: '⚙️ Website Maintenance' },
];

export default function Services() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <motion.section
        data-aos="fade-up"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-700">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-lg hover:scale-[1.03] transition-all"
              variants={cardVariants}
            >
              {service.title}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
