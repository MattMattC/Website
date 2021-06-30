import React from 'react';
import { Box } from '@chakra-ui/core';

/**
 * Just to display • 🇫🇷
 */
export const GrosPoint = ({ ...props }) => {
    return (
        <Box as="span" {...props}>
            •
        </Box>
    );
};
