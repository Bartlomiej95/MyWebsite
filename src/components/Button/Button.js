import styled from 'styled-components';

export const BannerButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.BannerButton.mobileWidth};
    height: ${({ theme }) => theme.BannerButton.mobileHeight};
    margin-top: 40px;
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

export const FormButton = styled.button`
    display: block;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
    background-color: ${({ theme }) => theme.BannerButton.bcgColor};
    cursor: pointer;
    color: white;
    transition: background-color ease-in-out .3s;
    
    :hover{
        background-color: ${({ theme }) => theme.BannerButton.bcgHoover};
    }
`;