import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/core';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const colorButton = { light: 'gray', dark: 'yellow' };

    return (
        <IconButton
            variantColor={colorButton[colorMode]}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
        />
    );
};

export default ThemeToggle;
