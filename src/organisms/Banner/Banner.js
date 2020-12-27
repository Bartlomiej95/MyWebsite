import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import bcgIconSmall from '../../assets/bcgIconSmall.svg';
import bcgIconBig from '../../assets/bcgIconBig.svg';
import { MainHeading, SubTitle } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';
import { NavBannerParagraph, Paragraph } from '../../components/Paragraph/Paragraph';

const BannerWrapper = styled.section`
    position: relative;
    height: calc(100vh - 77px);
    min-height: calc(100vh - 77px);
    overflow: hidden;

    @media(min-width: 1280px){
        padding: 0 142px;
    }
`;

const ContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: left;
`;

const DivBannerParagraph = styled.div`
    display: inline-block;
    margin-top: ${({ theme }) => theme.DivBannerParagraph.marginTop};
    margin-bottom:  ${({ theme }) => theme.DivBannerParagraph.marginBottom};
    border-bottom: 2px solid #009299;
`;

const SmallBcgIcon = styled.img`
    display: block;
    position: absolute;
    top: 15%;
    right: 10%;
    z-index: -1;

    @media(min-width: 1280px){
        top: 12%;
        right: 40%;
        transform: scale(1.5);
    }
`;

const BigBcgIcon = styled.img`
    display: block;
    position: absolute;
    bottom: 10%;
    right: -22%;
    transform: translateY(30%);
    z-index: -1;

    @media(min-width: 1280px){
        bottom: 10%;
        right: 20%;
    }
`;

const animateScroll = keyframes`
  0% {
      transform: translateY(0px);
  }

  100%{
      transform: translateY(calc(41px - 15px));
  }
`;

const ScrollDiv = styled.div`
    position: absolute;
    width: ${({ theme }) => theme.ScrollDiv.width};
    height: ${({ theme }) => theme.ScrollDiv.height};
    bottom: 5%;
    left: 50%;
    border: 1px solid #006D77;
    border-radius: ${({ theme }) => theme.ScrollDiv.borderRadius};

    @media(min-width: 1280px){
        display: none;
    }
`;

const Scroll = styled.div`
    background-color: #006d77;
    width: ${({ theme }) => theme.Scroll.width};
    height: ${({ theme }) => theme.Scroll.height};
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.Scroll.borderRadius};
    transform: translateY(0px);
    animation: ${animateScroll} 3s infinite linear; 
`;

const Banner = () => {

    const [wheelStatus, setWheelStatus] = useState(false);

    return(
        <BannerWrapper id="banner" onWheel={()=> setWheelStatus(true)} onTouchEnd={() => setWheelStatus(true)}>
            <ContentWrapper>
                <DivBannerParagraph>
                    <NavBannerParagraph>Strona Główna</NavBannerParagraph>
                </DivBannerParagraph>
                <MainHeading>Bartłomiej Panfil</MainHeading>
                <SubTitle>Junior Front-End Developer</SubTitle>
                <Paragraph>Cześć, mam na imię Bartek i pasjonuje się programowaniem, z czym wiążę swoją przyszłość. Zapraszam do przejrzenia mojej strony, na której właśnie się znajdujesz. 
                    Zaprezentuje Ci na niej swoje projekty oraz dowiesz się jakie technologie potrafię i jakich się uczę.
                </Paragraph>

                <Link 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    isDynamic={true}
                >
                    <BannerButton>
                        Zobacz moje projekty
                    </BannerButton>
                </Link>
            </ContentWrapper>
            <SmallBcgIcon src={bcgIconSmall} alt="backgroun icon" />
            <BigBcgIcon src={bcgIconBig} alt="backgroun icon" />
            {
                !wheelStatus && (
                    <ScrollDiv>
                        <Scroll />
                    </ScrollDiv>
                )
            }
            

        </BannerWrapper>
    )
}


export default Banner;

