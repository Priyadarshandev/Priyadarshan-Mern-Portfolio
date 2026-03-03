import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 md:py-10 bg-[#ffffff] dark:bg-[#0f172a] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left transition-colors duration-300">
                <div className="space-y-1">
                    <h2 className="text-base md:text-lg font-bold tracking-tight text-[#111111] dark:text-white uppercase italic">
                        PRIYADARSHAN<span className="text-blue-600 dark:text-blue-500">.DEV</span>
                    </h2>
                    <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 transition-colors">
                        MERN Stack Developer
                    </p>
                </div>

                <div className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs tracking-wide">
                    © {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
