// src/pages/Services.jsx
import React from 'react';

function Services() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <section data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-center">Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white shadow-md p-6 rounded-lg text-center">🔧 Website Development</li>
          <li className="bg-white shadow-md p-6 rounded-lg text-center">🎨 UI/UX Design</li>
          <li className="bg-white shadow-md p-6 rounded-lg text-center">📱 Responsive Design</li>
          <li className="bg-white shadow-md p-6 rounded-lg text-center">⚙️ Website Maintenance</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
