import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section
      id="home"
      className="relative py-24 md:py-32 flex items-center justify-center bg-[#ffffff] dark:bg-[#0f172a] text-[#111111] dark:text-[#f1f5f9] overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 dark:opacity-20">
        <div className="w-[800px] h-[800px] bg-blue-600/10 dark:bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <motion.p
              {...fadeUp}
              className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              MERN Stack Developer
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight md:leading-[1.1]"
            >
              Priyadarshan Kumar
            </motion.h1>
          </div>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#555555] dark:text-[#94a3b8] font-medium max-w-2xl mx-auto leading-relaxed"
          >
            I build engineering-first web applications with focus on scalability,
            security, and high-performance user experiences.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#111111] dark:bg-white text-white dark:text-black rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md active:scale-95"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 border border-gray-200 dark:border-white/10 rounded-lg font-bold text-xs uppercase tracking-wider text-[#111111] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center gap-2 active:scale-95"
            >
              Contact Me <HiOutlineArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;