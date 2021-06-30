import React from 'react';
import { Box, useColorMode, Text, Link, Flex } from '@chakra-ui/core';
import { Emoji } from './Emoji';

const Footer = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };
    const colorText = { light: 'gray.200', dark: 'gray.100' };

    return (
        <Box bg={bgColor[colorMode]} color={colorText[colorMode]}>
            <Box m="0 auto" p={2} as="main" width={['100%', '60%', '80M']}>
                <Flex justifyContent="space-between" flexWrap="wrap">
                    <Text>
                        Made with{' '}
                        <Link href="https://www.gatsbyjs.org/">Gatsby</Link> &{' '}
                        <Link href="https://chakra-ui.com/">ChakraUi</Link>
                    </Text>
                    <Text>
                        <Emoji val="🌍" />
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
