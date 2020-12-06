import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { FormButton } from '../../components/Button/Button';

const Wrapper = styled.section`
    height: 60vh;
    margin-top: 100px;
    margin-bottom: 50px;

    @media(min-width: 1280px){
        padding: 0 100px;
        height: 100vh;
    }
`;

const FormWrapper = styled.div`
    width: 100%;

`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: left;
    margin: 30px auto 0 auto;
    padding-left: 15%;
    background-color: #EDF6F9;
    width: 90%;
    border-radius: 10px;
    box-shadow: 2px 2px 0 rgb(183, 188, 188, 0.8);

    label{
        margin-top: 20px;
    }

    input {
        display: block;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 0 rgb(183, 188, 188, 0.6);
        padding-left: 10px;
        color: black;

        :focus{
            outline: none;
        }

    }

    textarea{
        width: 60%;
        height: 100px;
        border: none;
        border-radius: 20px;
        box-shadow: 2px 2px 0 rgb(183, 188, 188, 0.6);
        padding: 10px 0 0 10px;

        :focus{
            outline: none;
        }
    }

    @media(min-width: 1280px){
        
        width: 100%;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-left: 20%;

        input {
            font-size: 20px;
            padding: 10px 0 10px 10px;
            border-radius: 20px;
            margin-bottom: 10px;
        }

        textarea{
            font-size: 20px;
            height: 200px;
        }
    }

`;

const Contact = () => {
    return(
        <Wrapper id="contact">
            <SubHeading>Kontakt</SubHeading>
            <FormWrapper>
                <Form >
                    <label> 
                        <input type="text" placeholder="Imię" name="name"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Email" name="email"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Temat" name="title"/>
                    </label>
                    <label>
                        <textarea type="textarea" placeholder="Treść..." name="content"/>
                    </label>
                    <FormButton>Wyślij</FormButton>
                </Form>
            </FormWrapper>

        </Wrapper>
    )
}

export default Contact;