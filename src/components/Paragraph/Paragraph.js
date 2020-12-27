import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.mobileFontSize};

    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.Paragraph.desktopFontSize};
    }
`;

export const NavBannerParagraph = styled.p`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.NavBannerParagraph.fontSize};
    
`;
