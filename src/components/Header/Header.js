import React from 'react';
import styled, { withTheme } from 'styled-components';



const Header = ({children, theme}) => {
    const HeaderComponent = styled.div`
        background-color: ${theme.theme.color.header};
        width: 100%;
    `;
    return (
        <HeaderComponent>
            {children}
        </HeaderComponent>
    );
};

export default withTheme(Header);