import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const Button = styled.div`
    background-color:white;
    display:inline-block;
    padding:10px;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
`;

const ThemeToggle = (props) => {
    const themeToggle = useTheme();

    return (
        <div>
            <Button onClick={() => themeToggle.toggle()}>
                <span>
                    {props.theme.mode === 'light' ? '🌇' : '🌃'}
                </span>
            </Button>
        </div>
    )
};

export default withTheme(ThemeToggle);