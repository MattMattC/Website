import React from "react";
import { MyThemeProvider } from '../../contexts/ThemeContext';
import styled, { withTheme } from 'styled-components';

const Layout = ({children}) => {
    // import normalize and create GeneralStyle
    const BackGround = styled.div`
        background-color: ${({theme}) => theme.theme.color.backgroundColor};
    `;
    return (
        <MyThemeProvider >
            <BackGround>
                {children}
            </BackGround>
        </MyThemeProvider>
    )
};

export default withTheme(Layout);