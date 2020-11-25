import react from 'react';
import styled from 'styled-components';
import foto from '../../assets/bartlomiejpanfil.jpg';
import bcgIconThree from '../../assets/bcgIconThree.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.section`
    position:relative;
    height: 60vh;
`;

const IconBcg = styled.img`
    display: block;
    position: absolute;
    top: 12%;
    left: 15%;
    z-index: -1;
`;

const WrapperDiv = styled.div`
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #FFDDD2;
`;

const LeftSideDiv = styled.div`
    width: 45vw;
    padding-top: 20px;
`;

const RightSideDiv = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 45vw;

    img {
        display: block;
        max-width: 100%;
        max-height: 85%;
        align-self: center;
        
    }
`;

const ParagraphAboutMe = styled(Paragraph)`
    margin: 30px 10px 30px 10px;
`;

const AboutMe = () => {
    return(
        <Wrapper>
            <SubHeading>O mnie</SubHeading>
            <WrapperDiv>
                <LeftSideDiv>
                    <SubHeading>Cześć !</SubHeading>
                    <ParagraphAboutMe>Mam na imię Bartek i moją pasją jest programowanie. Aktualnie pracuje w spedycji morskiej, 
                        jednak swoją przyszłość wiążę właśnie z branżą IT, a dokładniej front-end developmentem.</ParagraphAboutMe>
                </LeftSideDiv>
                <RightSideDiv>
                    <img src={foto} alt="zdjęcie autora"></img>
                </RightSideDiv>
            </WrapperDiv>
            <IconBcg src={bcgIconThree} alt="background icon" />
        </Wrapper>
    )
}

export default AboutMe;