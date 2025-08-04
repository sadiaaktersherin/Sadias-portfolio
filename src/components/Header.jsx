import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between px-6 sticky top-0 z-50">
      <a href="#home" className="text-3xl font-extrabold text-purple-600 hover:text-purple-800">
        Sadia
      </a>

      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a className="hover:text-purple-600" href="#home">Home</a>
        <a className="hover:text-purple-600" href="#about">About</a>
        <a className="hover:text-purple-600" href="#projects">Projects</a>
        <a className="hover:text-purple-600" href="#blog">Blog</a>
        <a className="hover:text-purple-600" href="#services">Services</a>
        <a className="hover:text-purple-600" href="#contact">Contact</a>
      </nav>

      <div className="hidden md:block max-w-[160px] w-full relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full px-8 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Search portfolio"
        />
        <svg
          className="w-4 h-4 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-40">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700">
            <li><a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-purple-600">Home</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-purple-600">About</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-purple-600">Projects</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#blog" className="hover:text-purple-600">Blog</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#services" className="hover:text-purple-600">Services</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-purple-600">Contact</a></li>
            <li className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Search portfolio"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
