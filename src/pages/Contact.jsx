import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs.send(
      'service_c62y2tb',
      'template_gry4jhl',
      formData,
      'MzhEexO94dMvf55R6'
    )
    .then(() => {
      setStatus('✅ Message sent successfully!');
      setFormData({ from_name: '', from_email: '', message: '' });
    })
    .catch(() => {
      setStatus('❌ Failed to send message, please try again.');
    });
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <section data-aos="fade-up" className="text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
            value={formData.from_name}
            onChange={handleChange}
          />
          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
            value={formData.from_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4">{status}</p>}
        </form>
      </section>
    </div>
  );
}

export default Contact;
