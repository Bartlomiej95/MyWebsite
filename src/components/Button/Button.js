import styled from 'styled-components';

export const BannerButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.BannerButton.mobileWidth};
    height: ${({ theme }) => theme.BannerButton.mobileHeight};
    margin: 0 auto;
    background-color: ${({ theme }) => theme.BannerButton.bcgColor};
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color ease-in-out .3s;
    

    :hover{
        background-color: ${({ theme }) => theme.BannerButton.bcgHoover};
        
    }

    @media(min-width: 1280px){
        width: ${({ theme }) => theme.BannerButton.desktopWidth};
        height: ${({ theme }) => theme.BannerButton.desktopHeight};
        border-radius: 40px;
    }
`;

export const ProjectBoxButton = styled.button`
    display: block;
    width: 50px;
    height: 30px;
    margin: 0 auto;
    border: none;
    background-color: #FFDDD2;
    cursor: pointer;
    transition: background-color ease-in-out .3s;
    filter: brightness(100%) !important;
    z-index: 1000;

    :hover {
        background-color: #E29578;
    }
`;