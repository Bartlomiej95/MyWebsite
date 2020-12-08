import React from 'react';
import styled from 'styled-components';
import bcgIconSmall from '../../assets/bcgIconSmall.svg';
import bcgIconBig from '../../assets/bcgIconBig.svg';
import scrollIcon from '../../assets/scroll.svg';
import { MainHeading, SubTitle } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const BannerWrapper = styled.section`
    position: relative;
    height: calc(100vh - 77px);

    @media(min-width: 1280px){
        padding: 0 142px;
    }
`;

const ContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: left;
`;

const SmallBcgIcon = styled.img`
    display: block;
    position: absolute;
    top: 16%;
    right: 10%;
    z-index: -1;

    @media(min-width: 1280px){
        top: 10%;
        right: 15%;
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

const ScrollIcon = styled.img`
    display: block;
    position: absolute;
    bottom: 5%;
    left: 50%;

    @media(min-width: 1280px){
        display: none;
    }
`;

const Banner = () => {
    return(
        <BannerWrapper id="banner">
            <ContentWrapper>

                <MainHeading>Bartłomiej Panfil</MainHeading>
                <SubTitle>Junior Front-End Developer</SubTitle>
                <Paragraph>Wykonuje ciężkie prace </Paragraph>

                <BannerButton>Zobacz moje projekty</BannerButton>
            </ContentWrapper>
            <SmallBcgIcon src={bcgIconSmall} alt="backgroun icon" />
            <BigBcgIcon src={bcgIconBig} alt="backgroun icon" />
            <ScrollIcon src={scrollIcon} alt="przycisk scrollowania"/>
        </BannerWrapper>
    )
}


export default Banner;

