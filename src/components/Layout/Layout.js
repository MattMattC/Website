import React from "react";
import { MyThemeProvider } from '../../contexts/ThemeContext';
import styled, { withTheme } from 'styled-components';

const Layout = (props) => {
    const BackGround = styled.div`
        background-color: ${props => {
            console.log();
            return props.theme.theme.color.backgroundColor}};
    `;
    return (
        <MyThemeProvider >
            <BackGround>
                {props.children}
            </BackGround>

        </MyThemeProvider>
    )
};

export default withTheme(Layout);