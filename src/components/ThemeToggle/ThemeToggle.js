import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/core';

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const colorButton = { light: 'gray', dark: 'gray' };

    return (
        <IconButton
            variantColor={colorButton[colorMode]}
            onClick={toggleColorMode}
            size="xs"
            icon={colorMode === 'light' ? 'moon' : 'sun'}
        />
    );
};

export default ThemeToggle;
