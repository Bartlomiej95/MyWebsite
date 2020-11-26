import styled, { css } from 'styled-components';
import exitIcon from '../../assets/exit.svg';
import { MenuHeading } from '../../components/Heading/Heading';

const Wrapper = styled.div`
    position: relative;
    top: -100vh;
    width: 100vw;
    height: 100vh;
    display: none;

    ${({ showMenu }) => showMenu 
    && css`
        top: 0;
        display: block;
        position: sticky;
        z-index: 10;
    `}
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    background-color: #EDF6F9;

    ul {
        display: block;
        margin: 0 auto;
        padding: 50px;

        li{
            font-size: 20px;
            list-style: none;
            padding-bottom: 15px;
        }
    }

`;

const WordMenu = styled(MenuHeading)`
    display: block;
    text-align: center;
    padding-top: 100px;
`;

const ExitMenu = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;


`;

const FlyoutMenu = ({ visible, handleClick }) => {
    return(
        <Wrapper showMenu={visible}>
            <Navigation>
                <WordMenu>Menu</WordMenu>
                <ul>
                    <li>Projekty</li>
                    <li>Technologie</li>
                    <li>O mnie</li>
                    <li>Kontakt</li>
                </ul>
            </Navigation>
            <ExitMenu onClick={() => handleClick()}>
                <img src={exitIcon} alt="przycisk exit" />
                <h2>Menu</h2>
            </ExitMenu>
        </Wrapper>
    )
}

export default FlyoutMenu;