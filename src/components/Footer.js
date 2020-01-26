import React from 'react';
import { Box, useColorMode,  List, ListItem } from '@chakra-ui/core';

const Footer = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };
    const colorText = { light: 'gray.200', dark: 'gray.100' };

    return (
        <Box bg={bgColor[colorMode]} color={colorText[colorMode]}>
            <Box m="0 auto" p={2} as="main" width={['100%', '60%', '80M']}>
                <List as="ol" styleType="none">
                    <ListItem>Made with Gastby and ♥</ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Footer;
