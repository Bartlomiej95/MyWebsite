import styled from 'styled-components';
import githubIcon from '../../assets/github.svg';

const Wrapper = styled.section`
    width: 100vw;
    height: 45px;
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
    width: 70vw;

    li {
        font-size: 13px;
        text-decoration: none;
        color: white;
        list-style: none;
        margin-right: 12px;
    }
    
`;

const RightSide = styled.div`
    display: flex;
    align-items: center;
    
`;


const Footer = () => {
    return(
        <Wrapper>
            <LeftSide>
                
                    <li>Projekty</li>
                    <li>Technologie</li>
                    <li>O mnie</li>
                    <li>Kontakt</li>
                
            </LeftSide>
            <RightSide>
                <img src={githubIcon} alt="ikona portalu github" />
            </RightSide>
        </Wrapper>
    )
}

export default Footer;