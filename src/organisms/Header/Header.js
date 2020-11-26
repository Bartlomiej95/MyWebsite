import styled from 'styled-components';
import menuIcon from '../../assets/menuIcon.svg';
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
    z-index: 100;

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