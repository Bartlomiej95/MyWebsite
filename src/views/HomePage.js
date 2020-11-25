import React from 'react';
import Banner from '../organisms/Banner/Banner';
import Header from '../organisms/Header/Header';
import ProjectsSection from '../organisms/ProjectsSection/ProjectsSection';
import TechSection from '../organisms/TechSection/TechSection';


const HomePage = () => {
    return(
        <div>
            <Header />
            <Banner />
            <ProjectsSection />
            <TechSection/>
        </div>
    )
}

export default HomePage;