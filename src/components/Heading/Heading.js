import styled from 'styled-components';

export const MenuHeading = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;

export const MainHeading = styled.h1`
    font-size: ${({ theme }) => theme.MainHeading.mobileFontSize};
    padding-top: 120px;
    margin-bottom: 30px;
    font-weight: 600;

    @media(min-width: 1280px) {
        font-size: ${({ theme }) => theme.MainHeading.desktopFontSize};
        font-weight: 600;
        letter-spacing: 6px;
        padding-top: 120px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 21px;
    text-align: left;
    margin-bottom: 30px;
    font-weight: 600;
`;

export const SubHeading = styled.h2`
    font-size: ${({ theme }) => theme.SubHeading.mobileFontSize};
    text-align: center;
`;