// src/pages/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <section data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Portfolio Website</h3>
            <p>A personal portfolio showcasing my projects and skills.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">E-commerce Store</h3>
            <p>An online shop built with React and Stripe integration.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Blog Platform</h3>
            <p>A CMS-based blogging website with user authentication.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
