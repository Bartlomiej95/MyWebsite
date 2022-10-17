import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import BoxImage from '../../molecules/BoxImage/BoxImage';
import { screens as screensProject} from '../../data/data.js';
import { SubHeading } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';

const Wrapper = styled.section`
    height: ${({ theme }) => theme.ProjectSection.Wrapper.mobileHeight};
    padding-top: ${({ theme }) => theme.ProjectSection.Wrapper.mobilePaddingTop};
    overflow: hidden;
    max-width: ${({ theme }) => theme.ProjectSection.Wrapper.mobileMaxWidth};
    min-height: ${({ theme }) => theme.ProjectSection.Wrapper.mobileMinHeight};
    margin: 0 auto;
    background-color: transparent;

    a {
        text-decoration: none;
    }

    @media(min-width: 1280px){
        padding: 0 ${({ theme }) => theme.ProjectSection.Wrapper.desktopLeftPadding};
        overflow: hidden;
        width: 1180px;
    }
`;

const ProjectsButton = styled(BannerButton)`
    width: ${({ theme }) => theme.ProjectsButton.mobileWidth };
    font-size: ${({ theme }) => theme.ProjectsButton.mobileFontSize };
    transition: background-color ease-in-out .3s;
    margin: 50px auto 0 auto;

    @media(min-width: 1280px){
        width: ${({ theme }) => theme.ProjectsButton.desktopWidth };
        font-size: ${({ theme }) => theme.ProjectsButton.desktopFontSize };
    }
`;

const WrapperSlider = styled.div`
    width: 100%;
    margin: 20px auto;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ProjectSection = () => {

    //zmienna, która wskazuje id screenu projektu, który ma byc wyróżniony
    const [activeScreen, setActiveScreen] = useState(1);
    const [sliderSettings, setSliderSettings] = useState({...settings});


    const screens = screensProject.map(screen => screen);

    return(
        <Wrapper id="projects">
            <SubHeading>Moje projekty</SubHeading>
            <WrapperSlider>
                <Slider {...sliderSettings}>
                    {
                        screens.map((item) => (
                            <BoxImage
                                key={item.path}
                                id={item.id}
                                icon={item.icon}
                                live={item.live}
                                code={item.code}
                                highlighted={ item.id === activeScreen ? true : false }
                            />
                        ))
                    }
                </Slider>
            </WrapperSlider>

            <a href="https://github.com/Bartlomiej95">
                <ProjectsButton>Zobacz wszystkie projekty</ProjectsButton>
            </a>
        </Wrapper>
    )
}


export default ProjectSection;