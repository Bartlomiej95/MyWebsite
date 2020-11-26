import styled from 'styled-components';

export const MenuHeading = styled.h2`
    font-size: 30px;
    font-weight: 500;
`;

export const MainHeading = styled.h1`
    font-size: 45px;
    text-align: center;
    padding-top: 180px;
    margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
    font-size: 21px;
    text-align: center;
    margin-bottom: 60px;
`;

export const SubHeading = styled.h2`
    font-size: ${({ theme }) => theme.SubHeading.mobileFontSize};
    text-align: center;
`;