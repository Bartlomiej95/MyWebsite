import styled from 'styled-components';

export const MenuHeading = styled.h2`
    font-size: ${({ theme }) => theme.MenuHeading.fontSize};
    font-weight: ${({ theme }) => theme.MenuHeading.fontWeight};
`;

export const MainHeading = styled.h1`
    font-size: ${({ theme }) => theme.MainHeading.mobileFontSize};
    /* padding-top: 120px; */
    margin-bottom: ${({ theme }) => theme.MainHeading.mobileMarginBottom};
    font-weight: ${({ theme }) => theme.MainHeading.fontWeight};

    @media(min-width: 1280px) {
        font-size: ${({ theme }) => theme.MainHeading.desktopFontSize};
        font-weight: ${({ theme }) => theme.MainHeading.mobileFontSize};
        letter-spacing: ${({ theme }) => theme.MainHeading.desktopLetterSpacing};;
        padding-top: ${({ theme }) => theme.MainHeading.desktopPaddingTop};
    }
`;

export const SubTitle = styled.h2`
    font-size: ${({ theme }) => theme.SubTitle.mobileFontSize};
    text-align: left;
    margin-bottom: ${({ theme }) => theme.SubTitle.mobileMarginBottom};
    font-weight: 600;
`;

export const SubHeading = styled.h2`
    font-size: ${({ theme }) => theme.SubHeading.mobileFontSize};
    text-align: center;
`;