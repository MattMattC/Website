import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '@chakra-ui/core';
const Button = styled.div`
    background-color: white;
    display: inline-block;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
`;

const ThemeToggle = props => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Button onClick={toggleColorMode}>
                <span>{colorMode === 'light' ? '🌇' : '🌃'}</span>
            </Button>
        </div>
    );
};

export default ThemeToggle;
