import styled from 'styled-components';

export const BannerButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.BannerButton.mobileWidth};
    height: ${({ theme }) => theme.BannerButton.mobileHeight};; 
    margin: 0 auto;
    background-color: ${({ theme }) => theme.BannerButton.bcgColor};
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    

    :hover{
        background-color: ${({ theme }) => theme.BannerButton.bcgHoover};
    }
`;