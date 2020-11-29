import React from 'react';
import styled from 'styled-components';
import data from '../../data/data.json';
import bcgIcon from '../../assets/bcgIconBig.svg';
import Tech from '../../molecules/Tech/Tech';
import { SubHeading } from '../../components/Heading/Heading';


const Wrapper = styled.section`
    position: relative;
    height: 100vh;
`;

const WrapperTech = styled.div`
    width: 100vw;
`;

const BcgIcon = styled.img`
    display: block;
    position: absolute;
    top: -5vh;
    left: 55vw;
    transform: scale(0.2);
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