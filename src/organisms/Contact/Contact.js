import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';

const Wrapper = styled.section`
    height: 50vh;
    margin-top: 100px;
`;

const Contact = () => {
    return(
        <Wrapper id="contact">
            <SubHeading>Kontakt</SubHeading>
        </Wrapper>
    )
}

export default Contact;