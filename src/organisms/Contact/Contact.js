import styled from 'styled-components';
import { useForm } from "react-hook-form";
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

const nameErrors = {
    required: true,
    minLength: 2,
    maxLength: 15,
}

const titleErrors = {
    required: true,
    minLength: 2,
    maxLength: 50,
} 

const emailError = {
    pattern: /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
}

const nameErrorsFn = type => {
    switch(type){
        case'required':
            return <span>Imię jest wymagane</span>
        case 'minLength':
            return <span>Imię musi zawierać co najmniej 2 znaki</span>
        case 'maxLength':
            return <span>Imię musi zawierać co najwyżej 15 znaków</span>
        default:
            return null;
    }
} 

const titleErrorsFn = type => {
    switch(type){
        case'required':
            return <span>Tytuł jest wymagany</span>
        case 'minLength':
            return <span>Tytuł musi zawierać co najmniej 2 znaki</span>
        case 'maxLength':
            return <span>Tytuł musi zawierać co najwyżej 50 znaków</span>
        default:
            return null;
    }
} 


const Contact = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);
    console.log(errors);
    return(
        <Wrapper id="contact">
            <SubHeading>Kontakt</SubHeading>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label> 
                        <input type="text" placeholder="Imię" name="name" ref={register(nameErrors)} />
                        {nameErrorsFn(errors.name?.type)}
                    </label>
                    <label>
                        <input type="text" placeholder="Email" name="email" ref={register(emailError)}/>
                        {errors.email && <span>Podaj poprawny adres email</span>}
                    </label>
                    <label>
                        <input type="text" placeholder="Temat" name="title" ref={register(titleErrors)}/>
                        {titleErrorsFn(errors.title?.type)}
                    </label>
                    <label>
                        <textarea type="textarea" placeholder="Treść..." name="content"ref={register()} />
                    </label>
                    <FormButton>Wyślij</FormButton>
                </Form>
            </FormWrapper>

        </Wrapper>
    )
}

export default Contact;