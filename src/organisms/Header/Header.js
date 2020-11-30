import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menuIcon.svg';
import FlyoutMenu from '../../molecules/FlyoutMenu/FlyoutMenu';
import { MenuHeading } from '../../components/Heading/Heading';

const HeaderWrapper = styled.header`
    position: sticky;
    top: 0;
    height: ${({ theme }) => theme.Header.mobileHeight};
    border-bottom: ${({ theme }) => theme.Header.borderBottom} solid #EDF6F9;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 5;
    cursor: pointer;

    @media(min-width: 1280px) {
        display: none;
    }

    img {
        margin-right: 5px;
    }
`;

const HeaderWrapperDesktop = styled.header`

    @media(min-width: 1280px){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        height: ${({ theme }) => theme.Header.desktopHeight};
        border-bottom: ${({ theme }) => theme.Header.borderBottom} solid #EDF6F9;
    }
    
`;

const LeftSide = styled.div`
     @media(min-width: 1280px) {
        height: 100%;
        line-height: ${({ theme }) => theme.Header.desktopHeight};
        width: 20vw;
        margin: 0 auto;
    }
`;

const Navigation = styled.nav`
    @media(min-width: 1280px) {
        display: block;
        width: 55vw;
        height: 100%;
        padding-right: 30px;
    }
`;

const WrapperUl = styled.ul`
    @media(min-width: 1280px) {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height:100%;
    }
`;

const NavLink = styled(Link)`
    display: block;
    font-size: 25px;
    cursor: pointer;
`;

const Header = () => {

    const [visibilityFlyoutMenu, setVisibilityFlyoutMenu] = useState(false);
    const [heightView, setHeightView] = useState(window.innerHeight);

    const handleClick = (e) => {
        setHeightView(window.innerHeight);
        setVisibilityFlyoutMenu(!visibilityFlyoutMenu)
    }

    let x = window.innerHeight;
    console.log(x);

    return(
        <>
            {
                !visibilityFlyoutMenu && (
                    <>
                        <HeaderWrapper onClick={(e) => handleClick(e)}>
                            <img src={menuIcon} alt="ikona menu"/>
                            <MenuHeading>Menu</MenuHeading>
                        </HeaderWrapper>
                        <HeaderWrapperDesktop>
                            <LeftSide>
                                <h2>Bartłomiej Panfil</h2>
                            </LeftSide>
                            <Navigation>
                                <WrapperUl>
                                <NavLink 
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    isDynamic={true}
                                >
                                    Projekty
                                </NavLink>
                                <NavLink 
                                    activeClass="active"
                                    to="tech"
                                    spy={true}
                                    smooth={true}
                                    duration={750}
                                    isDynamic={true}
                                >
                                    Technologie
                                </NavLink>
                                <NavLink 
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    isDynamic={true}
                                >
                                    O mnie
                                </NavLink>
                                <NavLink 
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={1250}
                                    isDynamic={true}
                                >
                                    Kontakt
                                </NavLink>
                                </WrapperUl>
                            </Navigation>
                        </HeaderWrapperDesktop>
                    </>
                )
            }
            
        <FlyoutMenu heightView={heightView} exitFlyoutMenu={() => setVisibilityFlyoutMenu(false)} visible={visibilityFlyoutMenu}/>
        </>
    )
}

export default Header;