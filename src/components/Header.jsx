import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Links to sections use "/#section" format so React Router can handle
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between px-6 sticky top-0 z-50">
      <Link
        to="/"
        className="text-3xl font-extrabold text-purple-600 hover:text-purple-800 mb-2 md:mb-0"
        onClick={() => setMenuOpen(false)}
      >
        Sadia
      </Link>

      <nav className="flex flex-col md:flex-row md:items-center justify-center md:space-x-6 text-gray-700 mb-2 md:mb-0">
        <Link to="/#home" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/#about" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/#projects" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/#services" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/#blog" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        
        <Link to="/#contact" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>

      <div className="flex space-x-4">
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
            <Link to="/login" className="text-purple-600 hover:text-purple-800" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="text-purple-600 hover:text-purple-800" onClick={() => setMenuOpen(false)}>
              Signup
            </Link>
          </>
        )}
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden ml-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-40">
          <ul className="flex flex-col space-y-3 p-4 text-gray-700">
            <li>
              <Link to="/#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            
            <li>
              <Link to="/#services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/#blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            {user ? (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
