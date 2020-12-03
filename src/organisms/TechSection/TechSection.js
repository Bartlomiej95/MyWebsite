import React from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import bcgIcon from '../../assets/bcgIconBig.svg';
import Tech from '../../molecules/Tech/Tech';
import { SubHeading } from '../../components/Heading/Heading';


const Wrapper = styled.section`
    position: relative;
    height: 100vh;
    max-width: 100%;

    @media(min-width: 1280px) {
        padding: 0 100px;
    }
`;

const WrapperTech = styled.div`
    width: 100%;

    @media(min-width: 1280px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 80vw;
        margin: 0 auto;
        padding-top: 50px;

    }

`;

const BcgIcon = styled.img`
    display: block;
    position: absolute;
    top: -5vh;
    left: 55vw;
    transform: scale(0.2);

    @media(min-width: 1280px) {
        transform: scale(1);
        top: 60%;
        left: 60%;
    }
`;


const TechSection = () => {

    const tech = data.technology.map(tech => tech);

    return(
        <Wrapper id="tech">
            <SubHeading>Technologie</SubHeading>
            <WrapperTech>
                {
                    tech.map(tech => (
                        <Tech
                            key={tech.id} 
                            id={tech.id}
                            path={tech.path} 
                            alt={tech.alt} 
                            description={tech.description}
                        />
                        
                    ))
                }
            </WrapperTech>
            <BcgIcon src={bcgIcon} alt="background icon" />
            
        </Wrapper>
    )
}

export default TechSection;