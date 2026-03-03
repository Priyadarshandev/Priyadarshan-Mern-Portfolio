import React from 'react';
import { motion } from 'framer-motion';
// import { HiOutlineCode, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineCloudUpload } from 'react-icons/hi';
import { 
  HiOutlineCode, 
  HiOutlineGlobeAlt, 
  HiOutlineShieldCheck, 
  HiOutlineLightningBolt, 
  HiOutlineChartBar, 
  HiOutlineCloudUpload,
  HiOutlineLockClosed
} from 'react-icons/hi';

/**
 * Premium Services/Capabilities Section
 * Features: Glassmorphism cards, Gradient borders, Icon floating animations, Staggered scroll reveal
 */

const SERVICES_DATA = [
    {
        title: 'Custom SaaS Development',
        desc: 'Building scalable, subscription-based web applications with robust database management and secure user logic.',
        icon: <HiOutlineGlobeAlt />,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: 'Backend Architecture',
        desc: 'Designing secure, high-uptime server environments and RESTful APIs optimized for speed and data integrity.',
        icon: <HiOutlineShieldCheck />,
        color: 'from-indigo-500 to-purple-500'
    },
    {
        title: 'Enterprise Security',
        desc: 'Implementing advanced end-to-end security protocols, JWT authentication, and secure data handling.',
        icon: <HiOutlineLockClosed />,
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Strategic Deployment',
        desc: 'Setting up production environments on Vercel or AWS, ensuring smooth deployments and maximum performance.',
        icon: <HiOutlineCloudUpload />,
        color: 'from-pink-500 to-rose-500'
    }
];

const WhatIDo = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "circOut" }
        }
    };

    const iconAnimation = {
        y: [0, -6, 0],
        rotate: [0, 5, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section id="services" className="py-24 md:py-40 bg-[#050507] relative overflow-hidden">
            {/* Decorative Gradient Overlay */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-radial-gradient-dark pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-indigo-500 text-xs font-black uppercase tracking-[0.4em]"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none"
                    >
                        Engineering With <br />
                        <span className="text-white/40">Excellence.</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {SERVICES_DATA.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -12 }}
                            className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 h-full overflow-hidden"
                        >
                            <div className="relative h-full bg-[#111116]/80 rounded-[23px] p-10 backdrop-blur-3xl border border-white/5 transition-all duration-500 group-hover:bg-[#1a1a23] group-hover:border-indigo-500/30 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(99,102,241,0.1)]">

                                {/* Visual Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500`} />

                                {/* Floating Icon Wrapper */}
                                <motion.div
                                    animate={iconAnimation}
                                    className={`text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-8`}
                                >
                                    <div className="w-full h-full bg-[#111116] rounded-[15px] flex items-center justify-center text-white shadow-2xl">
                                        {service.icon}
                                    </div>
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-400 transition-colors">
                                    {service.desc}
                                </p>

                                {/* Subtle Action Link */}
                                <div className="mt-8 flex items-center gap-2 text-indigo-500/0 group-hover:text-indigo-500 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-sm font-bold uppercase tracking-widest">
                                    Learn More <HiOutlineLightningBolt className="text-lg" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhatIDo;
