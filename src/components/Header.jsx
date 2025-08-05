import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50 w-full flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold text-purple-600 hover:text-purple-800"
        onClick={() => setMenuOpen(false)}
      >
        Sadia
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-gray-700">
        <Link to="/#home" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/#about" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/#projects" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/#services" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/#blog" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/#contact" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        {user ? (
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="text-purple-600 hover:text-purple-800" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="text-purple-600 hover:text-purple-800" onClick={() => setMenuOpen(false)}>Signup</Link>
          </>
        )}
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden z-50 focus:outline-none"
      >
        <motion.span
          className="block w-8 h-1 bg-purple-700 rounded origin-center"
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-8 h-1 bg-purple-700 rounded"
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-8 h-1 bg-purple-700 rounded origin-center"
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-40 overflow-hidden"
          >
            <ul className="flex flex-col space-y-3 p-4 text-gray-700">
              <li><Link to="/#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link to="/#blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              {user ? (
                <li><button onClick={() => { handleLogout(); setMenuOpen(false); }}>Logout</button></li>
              ) : (
                <>
                  <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                  <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
                </>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
