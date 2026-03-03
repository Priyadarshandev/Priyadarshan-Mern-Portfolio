import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { PROJECTS } from '../../constants/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-[#f9fafb] dark:bg-[#0f172a] relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14 md:mb-16 space-y-3">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px]"
                    >
                        Portfolio
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-[#111111] dark:text-[#f1f5f9]"
                    >
                        Selected <br />
                        <span className="text-gray-400 dark:text-gray-600 transition-colors">Case Studies.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col bg-white dark:bg-[#111827] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-600/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-lg"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow space-y-5 md:space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-[#111111] dark:text-white tracking-tight">{project.title}</h3>

                                <div className="space-y-3 md:space-y-4 flex-grow">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-500">Problem</p>
                                        <p className="text-[#555555] dark:text-[#94a3b8] text-sm leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-500">Solution</p>
                                        <p className="text-[#555555] dark:text-[#94a3b8] text-sm leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                                    {project.tech.map((t, index) => (
                                        <span key={index} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2.5 py-1 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4 md:pt-6 mt-auto border-t border-gray-100 dark:border-white/5">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                        Live Demo <HiOutlineExternalLink />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#111111] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                        GitHub <SiGithub />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
