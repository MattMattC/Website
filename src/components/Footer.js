import React from 'react';
import { Box, useColorMode, Text, Link, Flex } from '@chakra-ui/core';

const Footer = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };
    const colorText = { light: 'gray.200', dark: 'gray.100' };

    return (
        <Box bg={bgColor[colorMode]} color={colorText[colorMode]}>
            <Box m="0 auto" p={2} as="main" width={['100%', '60%', '80M']}>
                <Flex justifyContent="space-between" flexWrap="wrap">
                    <Text fontSize="xs">
                        Made with{' '}
                        <Link href="https://www.gatsbyjs.org/">Gatsby</Link> &{' '}
                        <Link href="https://chakra-ui.com/">ChakraUi</Link>
                    </Text>
                    <Text fontSize="xs">Copyright © 2020</Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
