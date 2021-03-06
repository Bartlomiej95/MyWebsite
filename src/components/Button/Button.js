import styled from 'styled-components';

export const BannerButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.BannerButton.mobileWidth};
    height: ${({ theme }) => theme.BannerButton.mobileHeight};
    margin-top: ${({ theme }) => theme.BannerButton.marginTop};;
    background-color: ${({ theme }) => theme.BannerButton.bcgColor};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.BannerButton.mobileBorderRadius};
    cursor: pointer;
    transition: background-color ease-in-out .3s;
    

    :hover{
        background-color: ${({ theme }) => theme.BannerButton.bcgHoover};
        
    }

    @media(min-width: 1280px){
        width: ${({ theme }) => theme.BannerButton.desktopWidth};
        height: ${({ theme }) => theme.BannerButton.desktopHeight};
        border-radius: ${({ theme }) => theme.BannerButton.desktopBorderRadius};
    }
`;

export const ProjectBoxButton = styled.button`
    display: block;
    width: ${({ theme }) => theme.ProjectBoxButton.width};
    height: ${({ theme }) => theme.ProjectBoxButton.height};
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
    width: ${({ theme }) => theme.FormButton.mobileWidth};
    height: ${({ theme }) => theme.FormButton.mobileHeight};
    border: none;
    border-radius: ${({ theme }) => theme.FormButton.borderRadius};
    margin: 20px auto 0 auto;
    background-color: ${({ theme }) => theme.BannerButton.bcgColor};
    cursor: pointer;
    color: white;
    transition: background-color ease-in-out .3s;
    
    :hover{
        background-color: ${({ theme }) => theme.BannerButton.bcgHoover};
    }

    @media(min-width: 1280px){
        width: ${({ theme }) => theme.FormButton.desktopWidth};
        height: ${({ theme }) => theme.FormButton.desktopHeight};
        margin: 0 auto;
        font-size: ${({ theme }) => theme.FormButton.desktopFontSize};
    }
`;