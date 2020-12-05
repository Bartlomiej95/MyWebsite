import styled from 'styled-components';
import { Link } from 'react-scroll';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

const Wrapper = styled.section`
    /* width: 100vw; */
    height: 100px;
    background-color: #006D77;

    display: flex;
    flex-direction: row;
    justify-content: space-around;


`;

const LeftSide = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 60vw;

    li {
        font-size: 13px;
        text-decoration: none;
        color: white;
        list-style: none;
        margin-right: 12px;

        @media(min-width: 1280px){
            font-size: 20px;
            margin-right: 40px;
        }
    }
    
`;

const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    width: 15vw;    
`;

const WrapperUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    color: white;
    
    
`;

const NavLink = styled(Link)`
    display: block;
    font-size: 14px;
    cursor: pointer;

    :hover {
        color: #83C5BE;
    }

    @media(min-width: 1280px){
        font-size: 25px;
    }
`;


const Footer = () => {
    return(
        <Wrapper>
            <LeftSide>
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
                                
                            
                
            </LeftSide>
            <RightSide>
                <a href="https://github.com/Bartlomiej95"><img src={linkedinIcon} alt="ikona portalu linkedin" /></a>
                <a href="https://www.linkedin.com/in/bart%C5%82omiej-panfil-8a6a8b196/"><img src={githubIcon} alt="ikona portalu github" /></a>
            </RightSide>
        </Wrapper>
    )
}

export default Footer;