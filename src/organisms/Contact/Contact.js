import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { SubHeading } from '../../components/Heading/Heading';
import { FormButton } from '../../components/Button/Button';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.section`
    height: ${({ theme }) => theme.Contact.Wrapper.mobileHeight};
    margin-top: ${({ theme }) => theme.Contact.Wrapper.mobileMarginTop};
    margin-bottom: ${({ theme }) => theme.Contact.Wrapper.mobileMarginBottom};
    min-height: ${({ theme }) => theme.Contact.Wrapper.mobileMinHeight};

    @media(min-width: 1280px){
        padding: 0 ${({ theme }) => theme.Contact.Wrapper.desktopPaddingLevels};
        height: ${({ theme }) => theme.Contact.Wrapper.desktopHeight};
    }
`;

const FormWrapper = styled.div`
    width: 100%;

`;
const Form = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px auto 0 auto;
    width: 90%;

    input {
        display: block;
        border: 1px solid #83C5BE;
        width: 40%;
        padding: 3px 0 3px 5px;
        
        :-ms-input-placeholder{
            color: #83C5BE;
        }

        :focus{
            outline: none;
        }

    }

    textarea{
        width: 90%;
        height: 100px;
        max-height: 100px;
        border: 1px solid #83C5BE;
        padding: 5px 0 0 5px;
        margin-top: 10px;

        :focus{
            outline: none;
        }
    }

    @media(min-width: 1280px){
        
        width: 90%;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;

        input {
            font-size: 20px;
            padding: 10px 0 10px 10px;
            margin-bottom: 10px;
        }

        textarea{
            font-size: 20px;
            height: 350px;
            max-height: 350px;
            width: 100%;
        }
    }

`;
    
const ParagraphContact = styled(Paragraph)`
    display: block;
    margin: 30px auto 50px auto;
    width: 90%;
        
`;
    
const DivFormButton = styled.div`
    width: 50%;
    margin: 20px auto 0 auto;
`;

const titleErrors = {
    required: true,
    minLength: 2,
    maxLength: 50,
} 

const emailError = {
    pattern: /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
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

    const onSubmit = (data,e) => {
        console.log(data);
        e.target.reset();
    }
    console.log(errors);
    return(
        <Wrapper id="contact">
            <SubHeading>Napisz do mnie !</SubHeading>
            <ParagraphContact> Chcesz dowiedzieć się o mnie czegoś więcej ? A może jesteś zainteresowany współpracą lub chcesz zaprosić mnie na rozmowę kwalifikacyjną ?
                Zapraszam do kontaktu !
            </ParagraphContact>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Temat wiadomości" name="title" ref={register(titleErrors)}/>
                        {titleErrorsFn(errors.title?.type)}

                        <input type="text" placeholder="Adres email" name="email" ref={register(emailError)}/>
                        {errors.email && <span>Podaj poprawny adres email</span>}

                        <textarea type="textarea" placeholder="Treść wiadomości" name="content"ref={register()} />

                    <DivFormButton>
                        <FormButton>Wyślij</FormButton>
                    </DivFormButton>
                </Form>
            </FormWrapper>

        </Wrapper>
    )
}

export default Contact;