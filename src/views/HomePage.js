import React from 'react';
import Banner from '../organisms/Banner/Banner';
import Header from '../organisms/Header/Header';
import ProjectsSection from '../organisms/ProjectsSection/ProjectsSection';
import TechSection from '../organisms/TechSection/TechSection';
import AboutMe from '../organisms/AboutMe/AboutMe';
import Contact from '../organisms/Contact/Contact';
import Footer from '../organisms/Footer/Footer';


const HomePage = () => {
    return(
        <div>
            <Header />
            <Banner />
            <ProjectsSection />
            <TechSection/>
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;