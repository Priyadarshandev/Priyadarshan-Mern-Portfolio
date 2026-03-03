import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <section id="experience" className="py-16 md:py-20 bg-[#f9fafb] dark:bg-[#0f172a] text-[#111111] dark:text-[#f1f5f9] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-10">
                    <motion.div {...fadeUp} className="space-y-3">
                        <p className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]">Path</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Professional Journey.</h2>
                    </motion.div>

                    <motion.div {...fadeUp} className="space-y-8">
                        <p className="text-lg md:text-xl text-[#555555] dark:text-[#94a3b8] leading-relaxed font-medium transition-colors duration-300">
                            My journey is built on deep self-learning and building real-world software.
                            I don't just write scripts; I architect complete systems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-8 border-t border-gray-200 dark:border-white/5">
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">Real-World Focus</h3>
                                <p className="text-[#555555] dark:text-[#94a3b8] leading-relaxed text-sm md:text-base">
                                    I transitioned from basic web development to building production-ready MERN stacks by solving
                                    actual business problems, focusing on reliable state management and complex data structures.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">API & Integration</h3>
                                <p className="text-[#555555] dark:text-[#94a3b8] leading-relaxed text-sm md:text-base">
                                    Extensive experience in designing secure RESTful APIs, implementing JWT-based authentication
                                    flows, and integrating persistent database layers for high-availability systems.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">Engineering Excellence</h3>
                                <p className="text-[#555555] dark:text-[#94a3b8] leading-relaxed text-sm md:text-base">
                                    I prioritize clean code, modular architecture, and documentation. My goal is to deliver
                                    software that other developers find easy to read and extend.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">Continuous Growth</h3>
                                <p className="text-[#555555] dark:text-[#94a3b8] leading-relaxed text-sm md:text-base">
                                    A relentless self-learner, I stay ahead of the curve by exploring emerging patterns in the
                                    JavaScript ecosystem, including containerization and edge deployments.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
