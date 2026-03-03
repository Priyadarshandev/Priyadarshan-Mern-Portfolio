import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

/**
 * Single-page Home component
 * Page-level component containing all sections
 */
const Home = () => {
    return (
        <>
            <Hero />

            <section id="about">
                <About />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="skills">
                <TechStack />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
};

export default Home;
