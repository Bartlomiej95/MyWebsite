import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { fadeInDown, fadeInUp } from 'react-animations';
import exitIcon from '../../assets/exit.svg';
import { MenuHeading } from '../../components/Heading/Heading';

const FlyoutMenuAnimation = keyframes`${fadeInDown}`;
const ExitMenuAnimation = keyframes`${fadeInUp}`;

const Wrapper = styled.div`
    position: relative;
    top: -100vh;
    width: 100vw;
    height: 100vh;
    display: none;
    animation: .3s ${FlyoutMenuAnimation};
   

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

`;

const WrapperUl = styled.ul`
    display: block;
    margin: 0 auto;
    padding: 50px;
`;

const NavLink = styled(Link)`
    display: block;
    font-size: 20px;
    list-style: none;
    padding-bottom: 15px;
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
    background-color: white;
    cursor: pointer;


`;

const FlyoutMenu = ({ visible, exitFlyoutMenu, heightView }) => {

    //visibile - odbieramy zmienna boolen - czy menu wysyuwane ma byc widoczne
    //exitFlyoutMenu - odbieramy funkcję - zamyka wysuwane menu -> zmienia warotsc visible na false
    //heightView - odbieramy zmienna number - określa nam wysokość 

    return(
        <Wrapper showMenu={visible}>
            <Navigation>
                <WordMenu>Menu</WordMenu>
                <WrapperUl>
                    <NavLink 
                        activeClass="active"
                        to="projects"
                        spy={true}
                        offset={-heightView}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                        onClick={() => exitFlyoutMenu()}
                    >
                        Projekty
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="tech"
                        spy={true}
                        offset={-heightView}
                        smooth={true}
                        duration={750}
                        isDynamic={true}
                        onClick={() => exitFlyoutMenu()}
                    >
                        Technologie
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="about"
                        spy={true}
                        offset={-heightView}
                        smooth={true}
                        duration={1000}
                        isDynamic={true}
                        onClick={() => exitFlyoutMenu()}
                    >
                        O mnie
                    </NavLink>
                    <NavLink 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        offset={-heightView}
                        smooth={true}
                        duration={1250}
                        isDynamic={true}
                        onClick={() => exitFlyoutMenu()}
                    >
                        Kontakt
                    </NavLink>
                </WrapperUl>
            </Navigation>
            <ExitMenu onClick={() => exitFlyoutMenu()}>
                <img src={exitIcon} alt="przycisk exit" />
                <h2>Menu</h2>
            </ExitMenu>
        </Wrapper>
    )
}

export default FlyoutMenu;