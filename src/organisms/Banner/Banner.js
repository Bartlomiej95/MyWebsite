import React from 'react';
import styled from 'styled-components';
import bcgIconSmall from '../../assets/bcgIconSmall.svg';
import bcgIconBig from '../../assets/bcgIconBig.svg';
import scrollIcon from '../../assets/scroll.svg';
import { MainHeading, SubTitle } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';

const BannerWrapper = styled.section`
    position: relative;
    height: calc(100vh - 77px);
`;

const SmallBcgIcon = styled.img`
    display: block;
    position: absolute;
    top: 10%;
    right: 10%;
    z-index: -1;
`;

const BigBcgIcon = styled.img`
    display: block;
    position: absolute;
    bottom: 0vh;
    right: 5vw;
    transform: translateY(30%);
    z-index: -1;
`;

const ScrollIcon = styled.img`
    display: block;
    position: absolute;
    bottom: 5%;
    left: 20%;
`;

const Banner = () => {
    return(
        <BannerWrapper>
            <MainHeading>Bartłomiej Panfil</MainHeading>
            <SubTitle>Junior Front-End Developer</SubTitle>

            <BannerButton>Zobacz moje projekty</BannerButton>
            <SmallBcgIcon src={bcgIconSmall} alt="backgroun icon" />
            <BigBcgIcon src={bcgIconBig} alt="backgroun icon" />
            <ScrollIcon src={scrollIcon} alt="przycisk scrollowania"/>
        </BannerWrapper>
    )
}


export default Banner;
