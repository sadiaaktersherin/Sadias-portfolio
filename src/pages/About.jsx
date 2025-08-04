// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto space-y-16">
      {/* About Me */}
      <section data-aos="fade-up" className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          I'm a web developer with a passion for building clean, functional websites.
        </p>
      </section>

      {/* Experience */}
      <section data-aos="fade-right">
        <h2 className="text-3xl font-semibold mb-3">Experience</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Web Developer</strong> at ABC Corp (2021–Present)</li>
          <li><strong>Intern</strong> at XYZ Ltd (2020–2021)</li>
        </ul>
      </section>

      {/* Education */}
      <section data-aos="fade-left">
        <h2 className="text-3xl font-semibold mb-3">Education</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>B.Sc. in Computer Science, ABC University</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
