import react, { useState } from 'react';
import styled, { css } from 'styled-components';
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

    img {
        margin-right: 5px;
    }
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
                    <HeaderWrapper onClick={(e) => handleClick(e)}>
                        <img src={menuIcon} alt="ikona menu"/>
                        <MenuHeading>Menu</MenuHeading>
                    </HeaderWrapper>
                )
            }
            
        <FlyoutMenu heightView={heightView} exitFlyoutMenu={() => setVisibilityFlyoutMenu(false)} visible={visibilityFlyoutMenu}/>
        </>
    )
}

export default Header;