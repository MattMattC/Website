import { Box } from '@chakra-ui/core';
import React from 'react';
import BadgeByCat from './BadgeByCat';

export const Badges = ({ badges }) => (
    <Box mb="2">
        {badges.length > 0
            ? badges.map((cat, index) => <BadgeByCat key={index} cat={cat} />)
            : null}
    </Box>
);
