import styled, { css } from 'styled-components';

const WrapperImage = styled.div`
    min-width: 273px;
    width: 80vw;
    max-width: 513px;
    height: 300px;
    background-color: #E29578;
    border-radius: 2px;
    margin: 0 12px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.16);

    ${({highlighted}) => highlighted 
    && css` 
        height: 320px;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
        transform: translateY(-10px);
    `};
`;

const Image = styled.img`
    display: block;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
`;

const BoxImage = ({ icon, highlighted, id }) => {

    return(
        <WrapperImage highlighted={highlighted} id={id}>
            <Image src={icon} />
        </WrapperImage>
    )
}

export default BoxImage;