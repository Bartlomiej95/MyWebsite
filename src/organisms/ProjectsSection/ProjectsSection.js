import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BoxImage from '../../molecules/BoxImage/BoxImage';
import { screens as screensProject} from '../../data/data.js';
import leftBtn from '../../assets/leftbtn.svg';
import rightBtn from '../../assets/rightbtn.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';

const Wrapper = styled.section`
    height: 100vh;
    padding-top: 40px;
    overflow: hidden;
    max-width: 100%;
    min-height: 100vh;

    @media(min-width: 1280px){
        padding: 0 100px;
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

    @media(min-width: 500px) and (max-width: 1279px){
        transform: translateX(calc(-400px * ${props => props.activeScreen - 1}));
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
    margin: 30px auto;
`;

const NavForProject = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid black;
    margin-left: 5px;

    ${({ highlighted }) => highlighted 
    && css`
        background-color: black;
    `}

    :hover{
        cursor: pointer;
    }
`;

const ProjectsButton = styled(BannerButton)`
    width: 140px;
    font-size: 10px;
    transition: background-color ease-in-out .3s;
    margin: 0 auto;

    @media(min-width: 1280px){
        width: 200px;
        font-size: 14px;
    }
`;

const ProjectSection = () => {

    
    
    //zmienna, która wskazuje id screenu projektu, który ma byc wyróżniony
    const [activeScreen, setActiveScreen] = useState(Math.ceil(screensProject.length/2));
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