import { theme } from '@chakra-ui/core';
const fontFamilly = 'Open Sans';
export const LightTheme = {
    ...theme,
    fonts: {
        heading: fontFamilly,
        body: fontFamilly,
    },
    colors: {
        ...theme.colors,
    },
};
