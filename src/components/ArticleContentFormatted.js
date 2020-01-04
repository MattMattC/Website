import React from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/core';
import styled from 'styled-components';

const ArticleContentFormatted = props => {
    const { post } = props;
    const theme = useTheme();
    const colorGlobalContent = {
        light: theme.colors.gray[600],
        dark: theme.colors.gray[100],
    };
    const bgColorTableHead = {
        light: theme.colors.gray[300],
        dark: theme.colors.gray[600],
    };
    const colorTableHead = {
        light: theme.colors.gray[600],
        dark: theme.colors.gray[200],
    };
    const bgColorTableBody = {
        light: theme.colors.gray[600],
        dark: theme.colors.gray[100],
    };

    const { colorMode } = useColorMode();

    console.log(theme);
    const colorTitle = {
        light: theme.colors.teal[700],
        dark: theme.colors.gray[100],
    };

    const StyleFormatted = styled.div`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: ${colorTitle[colorMode]};
        }
        h1 {
            font-size: ${theme.fontSizes['4xl']};
        }
        h2 {
            font-size: ${theme.fontSizes['3xl']};
        }
        h3 {
            font-size: ${theme.fontSizes['2xl']};
        }
        h4,
        h5,
        h6 {
            font-size: ${theme.fontSizes['xl']};
        }
        ul,
        li,
        p {
            color: ${colorTitle[colorMode]};
        }
        pre {
            font-size: ${theme.fontSizes.sm};
            white-space: pre-wrap;
            background-color: ${theme.colors.gray[700]};
            border-radius: ${theme.radii.lg};
            padding: ${theme.sizes[1]};
            code {
                font-size: ${theme.fontSizes.sm};
                color: ${theme.colors.gray[100]};
                .keyword {
                    color: ${theme.colors.teal[500]};
                }
            }
        }
        code {
            font-size: ${theme.fontSizes.sm};
            color: white;
            border-radius: ${theme.radii.md};
            padding: ${theme.sizes[1]};
            background-color: ${theme.colors.gray[700]};
        }
        /**
         * Table part
         */
        thead {
            background-color: ${bgColorTableHead[colorMode]};
            color: ${colorTableHead[colorMode]};
            th {
                padding: ${theme.sizes[2]};
            }
        }
        tbody {
            td {
                padding: ${theme.sizes[2]};
            }
            background-color: ${theme.colors.gray[200]};
        }

        /**
         * Links
         */
        a {
            text-decoration: none;
            font-weight: ${theme.fontWeights.bold};
            color: ${theme.colors.orange[500]};
            &:hover {
                color: ${theme.colors.orange[700]};
            }
        }
    `;

    return (
        <div>
            <StyleFormatted>
                <Box
                    as="section"
                    // color={colorGlobalContent[colorMode]}
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </StyleFormatted>
        </div>
    );
};

export default ArticleContentFormatted;
