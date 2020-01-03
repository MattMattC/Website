import React from 'react';
import { MyThemeProvider } from '../../contexts/ThemeContext';
import styled, { withTheme, createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const NormalizeStyle = createGlobalStyle`
    ${normalize()};
    html, body {
        font-family: "Georgia";
        font-size: 21px;
        height: 100%;
        width: 100%;
    }  
    #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
    }
    html > * {
        box-sizing: border-box;
    }
`;

const GlobalStyle = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.theme.color.backgroundColor};
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`;

const Layout = ({ children }) => {
    return (
        <MyThemeProvider>
            <NormalizeStyle />
            <GlobalStyle>{children}</GlobalStyle>
        </MyThemeProvider>
    );
};

export default withTheme(Layout);
