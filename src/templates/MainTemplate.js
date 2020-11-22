import React from 'react';
import GlobalStyle from '../theme/globalStyle';
import { ThemeProvider } from 'styled-components';

const MainTemplate = ({ children }) => {

    return(
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </div>
    )
}

export default MainTemplate;