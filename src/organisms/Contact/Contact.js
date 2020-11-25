import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';

const Wrapper = styled.section`
    height: 50vh;
    width: 100vw;
    margin-top: 60px;
`;

const Contact = () => {
    return(
        <Wrapper>
            <SubHeading>Kontakt</SubHeading>
        </Wrapper>
    )
}

export default Contact;