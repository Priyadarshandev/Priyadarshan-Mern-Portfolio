import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineLightBulb, HiOutlineCode, HiOutlinePaperAirplane } from 'react-icons/hi';

/**
 * Premium Process Section
 * Features: Animated timeline, Step highlight on scroll, Connecting line animation, Step hover glow
 */

const PROCESS_STEPS = [
    {
        id: '01',
        title: 'Discover',
        desc: "We'll discuss your business goals and technical needs to define a clear roadmap.",
        icon: <HiOutlineSearch />,
        color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
        id: '02',
        title: 'Architect',
        desc: "I'll design the system's infrastructure to ensure security and future scalability.",
        icon: <HiOutlineLightBulb />,
        color: 'from-indigo-500/20 to-purple-500/20'
    },
    {
        id: '03',
        title: 'Develop',
        desc: 'Writing clean, production-ready code with regular updates on progress.',
        icon: <HiOutlineCode />,
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        id: '04',
        title: 'Launch',
        desc: 'Final testing, deployment to production, and handover of a fully functional product.',
        icon: <HiOutlinePaperAirplane />,
        color: 'from-pink-500/20 to-rose-500/20'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 md:py-40 bg-[#0a0a0c] relative overflow-hidden">
            {/* Decorative Dots Background */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 text-indigo-500 text-[10px] font-black uppercase tracking-[0.5em]"
                    >
                        The Workflow
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-tight"
                    >
                        Built With <br />
                        <span className="italic font-light text-white/30">Strategic Design.</span>
                    </motion.h2>
                </div>

                {/* Timeline Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="hidden lg:block absolute top-[60px] left-[10%] h-[1px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 z-0"
                    />

                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="relative group p-10 bg-[#111116]/40 rounded-[40px] border border-white/5 backdrop-blur-3xl hover:bg-[#1a1a23] hover:border-indigo-500/30 transition-all duration-700 hover:-translate-y-4"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-6 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm z-20 shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform duration-500">
                                {step.id}
                            </div>

                            {/* Icon Circle */}
                            <div className={`relative w-20 h-20 rounded-[30px] bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center text-3xl mb-10 mx-auto lg:mx-0 group-hover:rotate-[15deg] transition-all duration-700`}>
                                <div className="text-white drop-shadow-2xl">{step.icon}</div>
                            </div>

                            {/* Content */}
                            <div className="text-center lg:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-[1.8] group-hover:text-gray-400 transition-colors duration-500">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 rounded-[40px] transition-colors duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
