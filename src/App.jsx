import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Premium Components
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

/**
 * Main App Container
 * Minimal, Professional React Portfolio
 */

const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.4,
  });

  return (
    <div className="relative bg-[#ffffff] text-[#111111] dark:bg-[#0f172a] dark:text-[#f1f5f9] font-sans antialiased scroll-smooth overflow-x-hidden transition-colors duration-300">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left
        bg-blue-600 dark:bg-blue-500 transition-colors duration-300"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;