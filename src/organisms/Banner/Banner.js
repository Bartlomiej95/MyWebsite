import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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
    margin-top: 50px;
    margin-bottom: 10px;
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
    width: 17px;
    height: 41px;
    bottom: 5%;
    left: 50%;
    border: 1px solid #006D77;
    border-radius: 20px;

    @media(min-width: 1280px){
        display: none;
    }
`;

const Scroll = styled.div`
    background-color: #006d77;
    width: 95%;
    height: 15px;
    margin: 0 auto;
    border-radius: 50%;
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
                <Paragraph>Wykonuje ciężkie prace </Paragraph>

                <BannerButton>Zobacz moje projekty</BannerButton>
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

