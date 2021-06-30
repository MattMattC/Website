import { Box } from '@chakra-ui/core';
import React from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

const CodeBis = ({ children }) => {
    Lowlight.registerLanguage('js', js);
    return (
        <div>
            <Box>Coucou</Box>
            <Lowlight language="js" value={{ __html: children }} />
        </div>
    );
};

export default CodeBis;
