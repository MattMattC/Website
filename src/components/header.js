import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import { Box, useColorMode, Flex, Text } from '@chakra-ui/core';

const Header = ({ siteTitle }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };

    return (
        <Box flex="1" p={2} bg={bgColor[colorMode]}>
            <Flex align="center" justify="space-between">
                <Text textAlign="center">
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </Text>
                <ThemeToggle></ThemeToggle>
            </Flex>
        </Box>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
