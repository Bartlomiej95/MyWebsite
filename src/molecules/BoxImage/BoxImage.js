import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ProjectBoxButton } from '../../components/Button/Button';

const WrapperImage = styled.div`
    position: relative;
    min-width: 273px;
    width: 80vw;
    height: 300px;
    background-color: #E29578;
    border-radius: 2px;
    margin: 0 12px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.16);
    transition: filter .2s ease-in-out;
    overflow: hidden;

    @media(min-width: 500px) and (max-width: 1279px){
        width: 400px;
    }

    @media(min-width:1280px) {
        width: 500px;
        
    }
    
    @media(max-width: 1279px) {
        ${({highlighted}) => highlighted 
        && css` 
            height: 320px;
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
            transform: translateY(-10px);
                
        `};

        ${({highlighted, boxMouseOver}) => highlighted && boxMouseOver
        && css` 
            filter: brightness(60%);
        `};  
        }
    }

    ${({ boxMouseOver }) => boxMouseOver
        && css` 
            filter: brightness(60%);
        `};  
`;

const Image = styled.img`
    display: block;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
`;

const WrapperButtons = styled.div`
    position: absolute;
    width: 100%;
    top: 75%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-around;

    a{
        text-decoration: none;
    }
`;


const BoxImage = ({ icon, highlighted, id, live, code}) => {
    
    const [boxMouseOver, setBoxMouseOver] = useState(false) ;
    
    return(
        <WrapperImage 
            highlighted={highlighted} 
            id={id} 
            onMouseEnter={() => setBoxMouseOver(true)}
            onMouseLeave={() => setBoxMouseOver(false)}
            boxMouseOver={boxMouseOver}>
            <Image src={icon} />
            {
                boxMouseOver ? (
                    <WrapperButtons onMouseEnter={() => setBoxMouseOver(true)}>
                        <ProjectBoxButton> <a href={code} > KOD </a> </ProjectBoxButton>
                        <ProjectBoxButton > <a href={live} >LIVE</a> </ProjectBoxButton>
                    </WrapperButtons>
                ) : (
                    null
                )
            }
        </WrapperImage>
    )
}

export default BoxImage;