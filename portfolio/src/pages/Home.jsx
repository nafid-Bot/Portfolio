import React from 'react';
import {ThemeToggle} from "../components/ThemeToggle";
import  StarBackground  from '../components/StarBackground';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillSection from "../components/SkillSection.jsx";
import ProjectSection from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection.jsx";
const Home = () => {
    return (
        <div className="min-h-screen">
            {/*theme toggle*/}
            <ThemeToggle />

            {/* background effects  */}

            <StarBackground/>
            {/* Navbar  */}
            <Navbar/>
            {/* Main content */}
            <HeroSection/>
            <AboutSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
            {/* Footer */}
        </div>
    );
};

export default Home;