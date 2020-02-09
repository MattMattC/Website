import { LinkGatsby } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import { Box, useColorMode, Flex, Link } from '@chakra-ui/core';
import styled from 'styled-components';

const FirstPart = styled.span`
    font-family: "Georgia, 'Times New Roman', Times, serif'";
`;

const Header = ({ siteTitle }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };

    return (
        <Box flex="1" p={2} bg={bgColor[colorMode]}>
            <Flex align="center" justify="space-between">
                <Link
                    fontSize={['sm', '2xl']}
                    as={LinkGatsby}
                    to="/"
                    style={{
                        color: `white`,
                    }}
                >
                    <FirstPart>Matthieu Coulon</FirstPart>
                </Link>
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
