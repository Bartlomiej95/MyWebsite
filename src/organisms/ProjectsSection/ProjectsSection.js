import react from 'react';
import styled from 'styled-components';
import BoxImage from '../../molecules/BoxImage/BoxImage';
import homepantryScreen from '../../assets/screens/homepantry.PNG';
import zdrowiena100Screen from '../../assets/screens/zdrowiena100.PNG';
import minesweeperScreen from '../../assets/screens/minesweeper.PNG';
import { SubHeading } from '../../components/Heading/Heading';
import { BannerButton } from '../../components/Button/Button';

const Wrapper = styled.section`
    height: 100vh;
    padding-top: 40px;
    overflow: hidden;
`;

const DivBoxImage = styled.div`
    position: relative;
    left: -79vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 50px;  
    width: 300vw;  
`;

const WrapperNavForProject = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 30px auto;
`;

const NavForProject = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid black;
    margin-left: 5px;
`;

const ProjectsButton = styled(BannerButton)`
    width: 140px;
    font-size: 10px;
`;

const ProjectSection = () => {
    return(
        <Wrapper>
            <SubHeading>Moje projekty</SubHeading>
            <DivBoxImage >      
                <BoxImage icon={homepantryScreen} />
                <BoxImage icon={zdrowiena100Screen} highlighted={true}/>
                <BoxImage icon={minesweeperScreen} />
            </DivBoxImage>
            <WrapperNavForProject>
                <NavForProject />
                <NavForProject />
                <NavForProject />
                <NavForProject />              
            </WrapperNavForProject>
            <ProjectsButton>Zobacz wszystkie projekty</ProjectsButton>

            
        </Wrapper>
    )
}


export default ProjectSection;