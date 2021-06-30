import React from 'react';
import { Box, useColorMode } from '@chakra-ui/core';

const Main = ({ children }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'gray.50', dark: 'gray.800' };

    return (
        <Box bg={bgColor[colorMode]}>
            <Box
                m="0 auto"
                p={4}
                as="main"
                width={['100%', '100%', '90%', '50%']}
            >
                {children}
            </Box>
        </Box>
    );
};

Main.propTypes = {};

export default Main;
