import React from 'react';
import styled from 'styled-components';
import Banner from '../organisms/Banner/Banner';
import Header from '../organisms/Header/Header';
import ProjectsSection from '../organisms/ProjectsSection/ProjectsSection';
import TechSection from '../organisms/TechSection/TechSection';
import AboutMe from '../organisms/AboutMe/AboutMe';
import Contact from '../organisms/Contact/Contact';
import Footer from '../organisms/Footer/Footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const HomePage = () => {
    return(
        <Wrapper>
            <Header />
            <Banner />
            <ProjectsSection />
            <TechSection/>
            <AboutMe />
            <Contact />
            <Footer />
        </Wrapper>
    )
}

export default HomePage;