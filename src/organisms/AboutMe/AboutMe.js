import react from 'react';
import styled from 'styled-components';
import foto from '../../assets/bartlomiejpanfil.jpg';
import bcgIconThree from '../../assets/bcgIconThree.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.section`
    position: relative;
    height: 300px;
    min-height: 300px;

    @media(min-width: 1280px){
        padding: 0 100px;
        height: 500px;
        min-height: 500px;
    }
`;

const IconBcg = styled.img`
    display: block;
    position: absolute;
    top: 12%;
    left: 15%;
    z-index: -1;

    @media(min-width: 1280px){
        display: none;
    }
`;

const WrapperDiv = styled.div`
    position: relative;
    margin-top: 40px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #FFDDD2;
    height: 100%;

    @media(min-width: 1280px) {
        padding: 0 90px;
    }

    a{
        display: block;
        font-size: 16px;
        color: #006D77;
        margin-left: 10px;
        text-decoration: none;

        :hover{
            text-decoration: underline;
        }

    }

    @media(min-width: 1280px){
        a {
            font-size: 26px;
            padding-left: 0px;
            padding-top: 30px;

        }
    }
`;

const LeftSideDiv = styled.div`
    width: 45vw;
    padding-top: 20px;

    @media(min-width: 1280px){
        padding-top: 80px;
        
    }
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

    @media(min-width: 1280px) {
        font-size: 20px;
        margin-top: 40px;
    }
`;

const AboutMe = () => {
    return(
        <Wrapper id="about">
            <SubHeading>O mnie</SubHeading>
            <WrapperDiv>
                <LeftSideDiv>
                    <SubHeading>Cześć !</SubHeading>
                    <ParagraphAboutMe>Mam na imię Bartek i moją pasją jest programowanie. Aktualnie pracuje w spedycji morskiej, 
                        jednak swoją przyszłość wiążę właśnie z branżą IT, a dokładniej front-end developmentem.</ParagraphAboutMe>
                    <a href="https://www.linkedin.com/in/bart%C5%82omiej-panfil-8a6a8b196/" >Poznaj mnie </a>
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