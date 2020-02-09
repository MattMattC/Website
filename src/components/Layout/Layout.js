import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { LightTheme } from '../../theme';

const NormalizeStyle = createGlobalStyle`
    ${normalize()};
    html, body {
        font-size: 21px;
        height: 100%;
        width: 100%;
        font-family: 'Open Sans'
    }  
    #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
    }
    html > * {
        box-sizing: border-box;
    }
`;

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={LightTheme}>
            <NormalizeStyle />
            <CSSReset />
            <ColorModeProvider>{children}</ColorModeProvider>
        </ThemeProvider>
    );
};

export default Layout;
