import React from 'react';
import { motion } from 'framer-motion';
import { TECH_DATA } from '../../constants/techStack.jsx';

const TechStack = () => {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <section id="skills" className="py-16 md:py-20 bg-[#ffffff] dark:bg-[#0f172a] text-[#111111] dark:text-[#f1f5f9] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div {...fadeUp} className="mb-14 md:mb-16 space-y-3">
                    <p className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]">Infrastructure</p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase">Tech Stack.</h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
                    {TECH_DATA.map((group, gIndex) => (
                        <motion.div
                            key={gIndex}
                            {...fadeUp}
                            transition={{ delay: gIndex * 0.1, duration: 0.8 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600/40 dark:text-indigo-400/60 flex items-center gap-4">
                                {group.category}
                                <div className="flex-grow h-[1px] bg-gray-200 dark:bg-white/5" />
                            </h3>

                            <div className="space-y-4 md:space-y-6">
                                {group.items.map((tech, tIndex) => (
                                    <div key={tIndex} className="flex items-center gap-4 group">
                                        <div className="text-2xl transition-all duration-300 group-hover:scale-110" style={{ color: tech.color }}>
                                            {tech.icon}
                                        </div>
                                        <span className="text-sm md:text-base font-bold tracking-tight text-[#111111] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
