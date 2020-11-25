import react from 'react';
import styled from 'styled-components';
import htmlWord from '../../assets/tech/html.svg';
import cssWord from '../../assets/tech/css.svg';
import jsWord from '../../assets/tech/js.svg';
import reactWord from '../../assets/tech/react.svg';
import bcgIcon from '../../assets/bcgIconBig.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';


const Wrapper = styled.section`
    position: relative;
    height: 100vh;
`;

const WrapperTech = styled.div`
    width: 100vw;
`;

const Tech = styled.div`
    position: relative;
    width: 220px;
    height: 110px;
    margin: 30px auto;
    border-radius: 5px;
    border: 1px solid #006D77;
    
    img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
    }
`;

const BcgIcon = styled.img`
    display: block;
    position: absolute;
    top: -5vh;
    left: 55vw;
    transform: scale(0.2);
`;


const TechSection = () => {
    return(
        <Wrapper>
            <SubHeading>Technologie</SubHeading>
            
            <WrapperTech>
                <Tech>
                    <img src={htmlWord} alt="napis html" />
                </Tech>    
                <Tech>
                    <img src={cssWord} alt="napis css" />
                </Tech> 
                <Tech>
                    <img src={jsWord} alt="napis javascript" />
                </Tech>  
                <Tech>
                    <img src={reactWord} alt="napis react" />
                </Tech>               
            </WrapperTech>
            <BcgIcon src={bcgIcon} alt="background icon" />
            
        </Wrapper>
    )
}

export default TechSection;