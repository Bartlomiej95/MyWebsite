import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BoxImage from '../../molecules/BoxImage/BoxImage';
import { screens as screensProject} from '../../data/data.js';
import leftBtn from '../../assets/leftbtn.svg';
import rightBtn from '../../assets/rightbtn.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';

const Wrapper = styled.section`
    height: ${({ theme }) => theme.ProjectSection.Wrapper.mobileHeight};
    padding-top: ${({ theme }) => theme.ProjectSection.Wrapper.mobilePaddingTop};
    overflow: hidden;
    max-width: ${({ theme }) => theme.ProjectSection.Wrapper.mobileMaxWidth};
    min-height: ${({ theme }) => theme.ProjectSection.Wrapper.mobileMinHeight};

    @media(min-width: 1280px){
        padding: 0 ${({ theme }) => theme.ProjectSection.Wrapper.desktopLeftPadding};
        overflow: hidden;
    }
`;

const DivBtn = styled.div`
    @media(min-width: 1280px){
        width: 100%;
        height: 100px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }
    
`;

const LeftBtn = styled.div`
     @media(min-width: 1280px){
        width: 50px;
        height: 50px;
        margin-right: 20px;
        background-image: url(${leftBtn});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        
        :hover{
            cursor: pointer;
        }
     }
`
const RightBtn = styled.div`
    @media(min-width: 1280px) {
        height: 50px;
        width: 50px;
        background-image: url(${rightBtn});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat; 

        :hover{
            cursor: pointer;
        }
    }
`

const DivBoxImage = styled.div`
    position: relative;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 50px;  
    width: 300vw;  
    transform: translateX(calc(-80vw * ${props => props.activeScreen -1 }));
    transition: transform .3s ease-in-out;

    

    @media(min-width: 500px) and (max-width: 650px){
        transform: translateX(calc(-400px * ${props => props.activeScreen - 1}));
        padding-left: 50px;
    };

    @media(min-width: 651px) and (max-width: 1279px){
        transform: translateX(calc(-400px * ${props => props.activeScreen - 1}));
        padding-left: 100px;
    };

    @media(min-width: 1280px) {
        /* transform: translateX(calc(-40vw * ${props => props.activeScreen -1 })); */
        transform: translateX(${ props => props.actualTransformValue + 'px'});
    }
`;

const WrapperNavForProject = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: ${({ theme }) => theme.ProjectSection.NavForProject.wrapperMobileMarginTop} auto;
`;

const NavForProject = styled.div`
    width: ${({ theme }) => theme.ProjectSection.NavForProject.mobileWidth };
    height: ${({ theme }) => theme.ProjectSection.NavForProject.mobileHeight };
    border-radius: ${({ theme }) => theme.ProjectSection.NavForProject.mobileBorderRadius };
    border: 2px solid black;
    margin-left: ${({ theme }) => theme.ProjectSection.NavForProject.mobileMarginLeft };

    ${({ highlighted }) => highlighted 
    && css`
        background-color: black;
    `}

    :hover{
        cursor: pointer;
    }

    @media(min-width: 1280px){
        display: none;
    }
`;

const ProjectsButton = styled(BannerButton)`
    width: ${({ theme }) => theme.ProjectsButton.mobileWidth };
    font-size: ${({ theme }) => theme.ProjectsButton.mobileFontSize };
    transition: background-color ease-in-out .3s;
    margin: 0 auto;

    @media(min-width: 1280px){
        width: ${({ theme }) => theme.ProjectsButton.desktopWidth };
        font-size: ${({ theme }) => theme.ProjectsButton.desktopFontSize };
    }
`;

const ProjectSection = () => {

    
    
    //zmienna, która wskazuje id screenu projektu, który ma byc wyróżniony
    const [activeScreen, setActiveScreen] = useState(1);
    const [movingBoxImages, setMovingBoxImages] = useState(0);

    const handleMoveBoxImages = (direction, numberScreens) => {
        const number = Number(numberScreens);

        if( direction === 'left'){
            setMovingBoxImages(movingBoxImages => movingBoxImages + 50);
        } else if( direction === 'right') {
            setMovingBoxImages(movingBoxImages => movingBoxImages - 50);
        }
    }

    const screens = screensProject.map(screen => screen);

    return(
        <Wrapper id="projects">
            <SubHeading>Moje projekty</SubHeading>
            <DivBtn>
                <LeftBtn onClick={() => handleMoveBoxImages('left', screens)} onMouseDown={() => handleMoveBoxImages('left', screens)}></LeftBtn>
                <RightBtn onClick={() => handleMoveBoxImages('right', screens)} onMouseDown={() => handleMoveBoxImages('right', screens)}></RightBtn>
            </DivBtn>
            <DivBoxImage activeScreen={activeScreen} actualTransformValue={movingBoxImages} >   
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
            </DivBoxImage>
            <WrapperNavForProject>
                {
                    screens.map(item => (
                        <NavForProject 
                            key={item.id} 
                            id={item.id} 
                            highlighted={ item.id === activeScreen ? true: false }
                            onClick={() => setActiveScreen(item.id)}
                         />
                    ))
                }
            </WrapperNavForProject>
            <ProjectsButton>Zobacz wszystkie projekty</ProjectsButton>

            
        </Wrapper>
    )
}


export default ProjectSection;