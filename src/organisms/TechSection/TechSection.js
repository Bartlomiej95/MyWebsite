import React from 'react';
import styled from 'styled-components';
import { technology } from '../../data/data.js';
import bcgIcon from '../../assets/bcgIconBig.svg';
import Tech from '../../molecules/Tech/Tech';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph.js';


const Wrapper = styled.section`
    position: relative;
    max-width: ${({ theme }) => theme.TechSection.Wrapper.mobileMaxWidth};
    min-height: ${({ theme }) => theme.TechSection.Wrapper.mobileMinWidth};
    overflow: hidden;

    @media(min-width: 1280px) {
        padding: 0 ${({ theme }) => theme.TechSection.Wrapper.desktopPaddingLevels};
    }
`;

const WrapperTech = styled.div`
    width: ${({ theme }) => theme.TechSection.WrapperTech.mobileWidth};

    @media(min-width: 1280px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: ${({ theme }) => theme.TechSection.WrapperTech.dekstopWidth};
        margin: 0 auto;
        padding-top: ${({ theme }) => theme.TechSection.WrapperTech.desktopPaddingTop};

    }

`;

const BcgIcon = styled.img`
    display: block;
    position: absolute;
    top: -5vh;
    left: 60vw;
    transform: scale(0.2);

    @media(min-width: 1280px) {
        transform: scale(1);
        top: 60%;
        left: 60%;
    }
`;

const TechParagraph = styled(Paragraph)`
    width: 80%;
    margin: 30px auto 50px auto;

`;

const TechSection = () => {

    const tech = technology.map(tech => tech);

    return(
        <Wrapper id="tech">
            <SubHeading>Technologie</SubHeading>
            <TechParagraph>Naukę rozpocząłem od technologii frontendowych: HTML, CSS, JavaScript oraz React. W jednym z moich projektów wykorzystałem również Gatsbyego oraz GraphQL. 
                Dodatkowo znam także program Adobe Xd. W przyszłości chciałbym poszerzyć swoje kompetencje również o technologie backendowe.
            </TechParagraph>
            <WrapperTech>
                {
                    tech.map(tech => (
                        <Tech
                            key={tech.id} 
                            id={tech.id}
                            icon={tech.icon} 
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