import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Background3D from './components/Background3D';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Background3D />
      <Header />
      <main className="relative z-10">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        
        <section id="services"><Services /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
