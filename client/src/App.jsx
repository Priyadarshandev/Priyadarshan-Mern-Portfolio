import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

/**
 * Main App Entry Point
 * Separated layout and pages for professional structure
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
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default App;