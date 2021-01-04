import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.mobileFontSize};
    line-height: ${({ theme }) => theme.Paragraph.mobileLineHeight};

    @media(min-width: 1280px){
        font-size: ${({ theme }) => theme.Paragraph.desktopFontSize};
        width: ${({ theme }) => theme.Paragraph.desktopWidth};
        line-height: ${({ theme }) => theme.Paragraph.desktopLineHeight};
    }
`;

export const NavBannerParagraph = styled.p`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.NavBannerParagraph.fontSize};
    
`;

export const ParagraphAboutMe = styled.p`
    font-size: ${({ theme }) => theme.ParagraphAboutMe.mobileFontSize};
    line-height: ${({ theme }) => theme.ParagraphAboutMe.mobileLineHeight};

    @media(min-width: 1280px) {
        font-size: ${({ theme }) => theme.ParagraphAboutMe.desktopFontSize};
        margin-top: ${({ theme }) => theme.ParagraphAboutMe.desktopMarginTop};
        line-height: ${({ theme }) => theme.ParagraphAboutMe.desktopLineHeight};
    }
`;
