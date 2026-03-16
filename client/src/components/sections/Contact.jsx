import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null
    });

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        try {
            const response = await fetch('https://priyadarshan-mern-portfolio.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ loading: false, success: data.message, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, success: null })), 5000);
            } else {
                setStatus({ loading: false, success: null, error: data.error });
            }
        } catch (error) {
            setStatus({ loading: false, success: null, error: 'Failed to connect to the server.' });
        }
    };

    return (
        <section id="contact" className="py-16 md:py-20 bg-[#ffffff] dark:bg-[#0f172a] text-[#111111] dark:text-[#f1f5f9] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center space-y-4 mb-12">
                    <motion.p {...fadeUp} className="text-xs tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500 font-bold">Contact</motion.p>
                    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-white">
                        Let's Talk.
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-base md:text-lg text-[#555555] dark:text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
                        Open to opportunities and collaborations. Reach out today for specialized MERN development.
                    </motion.p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <motion.form
                        {...fadeUp}
                        transition={{ delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="p-8 md:p-10 space-y-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm transition-colors duration-300"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/15 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm md:text-base text-[#111111] dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/15 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm md:text-base text-[#111111] dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Subject</label>
                            <input
                                required
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Proposal"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/15 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm md:text-base text-[#111111] dark:text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                minLength={10}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/15 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm md:text-base text-[#111111] dark:text-white min-h-[120px] resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 ${status.loading
                                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
                                }`}
                        >
                            {status.loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>

                        <AnimatePresence>
                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-center text-sm font-medium"
                                >
                                    {status.success}
                                </motion.div>
                            )}
                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-center text-sm font-medium"
                                >
                                    {status.error}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>

                    <div className="flex flex-col items-center gap-10 mt-16">
                        <div className="flex gap-8 items-center">
                            <a
                                href="https://github.com/Priyadarshandev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/priyadarshansingh24/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                            >
                                <SiLinkedin />
                            </a>
                        </div>

                        <a
                            href="mailto:priyadarshanwork24@gmail.com"
                            className="text-lg md:text-xl font-medium text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline border-b border-gray-100 dark:border-white/5 hover:border-blue-600 dark:hover:border-blue-400 pb-1"
                        >
                            PriyadarshanWork24@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="border-t border-gray-100 dark:border-white/10" />
            </div>
        </section>
    );
};

export default Contact;
