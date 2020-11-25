import React from 'react';
import Banner from '../organisms/Banner/Banner';
import Header from '../organisms/Header/Header';
import ProjectsSection from '../organisms/ProjectsSection/ProjectsSection';


const HomePage = () => {
    return(
        <div>
            <Header />
            <Banner />
            <ProjectsSection />
        </div>
    )
}

export default HomePage;