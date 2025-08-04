import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Background3D from "./components/Background3D";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Background3D />
      <Header />
      <ScrollToHash />
      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="blog">
                  <Blog />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
