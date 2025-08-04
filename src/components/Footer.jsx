import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-purple-200 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold hover:text-white cursor-default select-none">
          Sadia
        </div>

        {/* Scroll Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="GitHub">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.74.08-.74a2.5 2.5 0 011.82 1.23 2.54 2.54 0 003.47 1 2.54 2.54 0 01.76-1.6c-2.66-.3-5.46-1.33-5.46-5.93a4.63 4.63 0 011.23-3.21 4.3 4.3 0 01.12-3.17s1-.32 3.3 1.23a11.35 11.35 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.17 4.63 4.63 0 011.23 3.21c0 4.6-2.8 5.62-5.48 5.92a2.85 2.85 0 01.81 2.21v3.28c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Twitter">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.56a9.83 9.83 0 01-2.82.78 4.93 4.93 0 002.16-2.72 9.85 9.85 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.49 13.95 13.95 0 01-10.14-5.14 4.91 4.91 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.9 4.9 0 01-2.22.08 4.92 4.92 0 004.59 3.41 9.87 9.87 0 01-6.1 2.1c-.39 0-.78-.02-1.17-.07a13.93 13.93 0 007.56 2.22c9.06 0 14.03-7.5 14.03-14.02 0-.21 0-.42-.02-.63A10.03 10.03 0 0024 4.56z" />
            </svg>
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 11.01 5.001 2.5 2.5 0 01-.01-5zm.02 7H2v11h3v-11zm7 0h-3v11h3v-6a3 3 0 016 0v6h3v-7a6 6 0 00-6-6z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-purple-300 select-none">
        &copy; {new Date().getFullYear()} Sadia. All rights reserved.
      </div>
    </footer>
  );
}
