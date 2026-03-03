import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../../hooks/useTheme';

import { NAV_LINKS } from '../../constants/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const scrollPosition = window.scrollY + 120;
            const current = [...NAV_LINKS].reverse().find(link => {
                const section = document.querySelector(link.href);
                return section && section.offsetTop <= scrollPosition;
            });

            if (current) setActiveSection(current.name);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href, name) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveSection(name);

        const target = document.querySelector(href);
        if (target) {
            const offset = 70;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
                ? 'py-4 bg-[#ffffff]/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5'
                : 'py-8 bg-transparent text-[#111111] dark:text-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home', 'Home')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-black tracking-tighter uppercase italic group text-[#111111] dark:text-white"
                >
                    PRIYADARSHAN<span className="text-blue-600 dark:text-blue-500 transition-colors">.DEV</span>
                </motion.a>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href, link.name)}
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === link.name
                                ? 'text-blue-600 dark:text-indigo-500'
                                : 'text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white transition-all hover:scale-110 active:scale-95"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                    </button>

                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
                        className="px-6 py-2 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-[#111111] dark:text-white"
                    >
                        Hire Me
                    </a>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white"
                    >
                        {theme === 'dark' ? <HiSun className="text-2xl" /> : <HiMoon className="text-2xl" />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-3xl text-[#111111] dark:text-white"
                    >
                        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#ffffff] dark:bg-[#0f172a] z-[120] p-12 flex flex-col justify-center items-center gap-10 md:hidden transition-colors duration-300"
                    >
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 text-4xl text-[#111111] dark:text-white">
                            <HiX />
                        </button>

                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href, link.name)}
                                className={`text-4xl font-black tracking-tighter ${activeSection === link.name ? 'text-blue-600 dark:text-blue-400' : 'text-[#111111] dark:text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="mailto:priyadarshanwork24@gmail.com"
                            className="mt-8 text-xl font-bold text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white transition-all underline underline-offset-8 decoration-gray-200 dark:decoration-white/10 hover:decoration-[#111111] dark:hover:decoration-white"
                        >
                            PriyadarshanWork24@gmail.com
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
