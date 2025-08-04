// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <section data-aos="fade-up" className="text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Message" className="w-full p-3 border rounded" rows="5" required></textarea>
          <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
