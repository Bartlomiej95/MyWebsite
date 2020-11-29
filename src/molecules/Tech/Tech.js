import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Paragraph } from '../../components/Paragraph/Paragraph';


const Wrapper = styled.div`
    position: relative;
    width: 220px;
    height: 110px;
    margin: 30px auto;
    border-radius: 10px;
    border: 1px solid #006D77;

    ${({ mouseOver }) => mouseOver 
    && css`
        background-color: #006D77;
    `}

    img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
    }

`;

const DescriptionParagraph = styled(Paragraph)`
    color: white;
    padding: 5px 10px;
    font-size: 14px;
`;


const Tech = ({ id, path, alt, description}) => {
    
    const [mouseOver, setMouseOver] = useState(false);


    return(
        <>
            {
                    mouseOver ? (
                    <Wrapper mouseOver={mouseOver} onMouseOut={() => setMouseOver(!mouseOver)}>
                        <DescriptionParagraph>{description}</DescriptionParagraph>
                    </Wrapper>
                    
                    ) : (
                    <Wrapper mouseOver={mouseOver} onMouseOver={() => setMouseOver(!mouseOver)}>
                        <img src={path} alt={alt} />   
                    </Wrapper> )
            }
        </>
    )
}

export default Tech;