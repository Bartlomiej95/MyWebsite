import styled from 'styled-components';
import menuIcon from '../../assets/menuIcon.svg';
import { MenuHeading } from '../../components/Heading/Heading';

const HeaderWrapper = styled.header`
    height: 75px;
    border-bottom: 2px solid #EDF6F9;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    img {
        margin-right: 5px;
    }
`;


const Header = () => {
    return(
        <HeaderWrapper>
            <img src={menuIcon} alt="ikona menu"/>
            <MenuHeading>Menu</MenuHeading>
        </HeaderWrapper>
    )
}

export default Header;