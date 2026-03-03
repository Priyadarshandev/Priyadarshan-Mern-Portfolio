import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/img/about.jpg";

const About = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-[#ffffff] dark:bg-[#0f172a] text-[#111111] dark:text-[#f1f5f9] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">

        {/* Simple Image Container */}
        <motion.div {...fadeUp} className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100 dark:border-white/5 max-w-sm mx-auto lg:max-w-none">
          <img src={aboutImg} alt="Priyadarshan Kumar" className="w-full h-full object-cover" />
        </motion.div>

        <div className="space-y-10">
          <div className="space-y-4">
            <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              The Developer <br />
              <span className="text-blue-600 dark:text-blue-500"> Behind the Code.</span>
            </motion.h2>

            <motion.p {...fadeUp} className="text-base md:text-lg text-[#555555] dark:text-[#94a3b8] leading-relaxed max-w-2xl">
              I am a specialized MERN Stack Developer. My focus is on turning complex business requirements into high-performance, maintainable web products.
            </motion.p>

            <motion.p {...fadeUp} className="text-base md:text-lg text-[#555555] dark:text-[#94a3b8] leading-relaxed max-w-2xl">
              I differentiate my work through strong backend security, clean architecture patterns, and a commitment to delivery excellence.
            </motion.p>
          </div>

          <motion.div {...fadeUp} className="space-y-2.5">
            {[
              "Expertise in building scalable RESTful architectures with Node.js and Express.",
              "Proficient in crafting interactive, high-fidelity frontends using React and Tailwind.",
              "Focus on secure data handling, JWT authentication, and database optimization.",
              "Commitment to clean code principles and long-term project maintainability."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 text-[#555555] dark:text-[#94a3b8]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-2.5 flex-shrink-0" />
                <p className="font-medium text-[#111111] dark:text-[#f1f5f9] text-sm md:text-base">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;