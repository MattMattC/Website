import React from 'react';
import { Box, useTheme, useColorMode, Text } from '@chakra-ui/core';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import Code from './MarkdownFormatter/CodeBis';

const ArticleContentFormatted = ({ content }) => {
    const theme = useTheme();
    const bgColorTableHead = {
        light: theme.colors.gray[300],
        dark: theme.colors.gray[600],
    };
    const colorTableHead = {
        light: theme.colors.gray[600],
        dark: theme.colors.gray[200],
    };

    const { colorMode } = useColorMode();

    const colorTitle = {
        light: theme.colors.gray[700],
        dark: theme.colors.gray[100],
    };

    const colorText = {
        light: theme.colors.gray[600],
        dark: theme.colors.gray[100],
    };

    const StyleFormatted = styled.div`
        font-family: 'Georgia';
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
        .gatsby-highlight {
            margin: ${theme.space[4]} 0;
        }
        blockquote {
            margin: ${theme.space[4]} 0;
            border-left: ${theme.borders['4px']} ${theme.colors.gray[200]};
            padding: 0 ${theme.space[2]};
            background-color: ${bgColorTableHead[colorMode]};
        }
        p {
            margin: ${theme.space[4]} 0;
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
        hr {
            border-color: ${bgColorTableHead[colorMode]};
        }
    `;

    // Title Part
    const H1 = ({ children }) => (
        <Text
            mt="2"
            mb="2"
            as="h1"
            fontSize="4xl"
            color={colorTitle[colorMode]}
        >
            {children}
        </Text>
    );
    const H2 = ({ children }) => (
        <Text
            mt="2"
            mb="2"
            as="h2"
            fontSize="3xl"
            color={colorTitle[colorMode]}
        >
            {children}
        </Text>
    );
    const H3 = ({ children }) => (
        <Text
            mt="2"
            mb="2"
            as="h3"
            fontSize="2xl"
            color={colorTitle[colorMode]}
        >
            {children}
        </Text>
    );
    const H4 = ({ children }) => (
        <Text mt="2" mb="2" as="h4" fontSize="xl" color={colorTitle[colorMode]}>
            {children}
        </Text>
    );

    const DefaultText = ({ children, ...rest }) => (
        <Text
            fontSize={['sm', 'md', 'md', 'lg']}
            color={colorText[colorMode]}
            {...rest}
        >
            {children}
        </Text>
    );
    const Paragraph = ({ children }) => <DefaultText>{children}</DefaultText>;
    const I = ({ children }) => <DefaultText as="i">{children}</DefaultText>;
    const U = ({ children }) => <DefaultText as="u">{children}</DefaultText>;
    const Abbr = ({ children }) => (
        <DefaultText as="abbr">{children}</DefaultText>
    );
    const Cite = ({ children }) => (
        <DefaultText as="cite">{children}</DefaultText>
    );
    const Del = ({ children }) => (
        <DefaultText as="del">{children}</DefaultText>
    );
    const Em = ({ children }) => <DefaultText as="em">{children}</DefaultText>;
    const Ins = ({ children }) => (
        <DefaultText as="ins">{children}</DefaultText>
    );
    const Kbd = ({ children }) => (
        <DefaultText as="kbd">{children}</DefaultText>
    );
    const Mark = ({ children }) => (
        <DefaultText as="mark">{children}</DefaultText>
    );
    const S = ({ children }) => <DefaultText as="s">{children}</DefaultText>;
    const Samp = ({ children }) => (
        <DefaultText as="samp">{children}</DefaultText>
    );
    const Sub = ({ children }) => (
        <DefaultText as="sub">{children}</DefaultText>
    );
    const Sup = ({ children }) => (
        <DefaultText as="sup">{children}</DefaultText>
    );

    const Pre = ({ children }) => <>{children}</>;

    console.log(content);
    const renderAst = new RehypeReact({
        createElement: React.createElement,
        components: {
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H4,
            h6: H4,
            p: Paragraph,
            i: I,
            u: U,
            abbr: Abbr,
            cite: Cite,
            del: Del,
            em: Em,
            ins: Ins,
            kbd: Kbd,
            mark: Mark,
            s: S,
            samp: Samp,
            sub: Sub,
            sup: Sup,
            code: Code,
            // pre: Pre,
        },
    }).Compiler;

    // TODO : gérer la partie "code"
    return <Box fontSize={['md', 'md', 'lg', 'xl']}>{renderAst(content)}</Box>;
};

export default ArticleContentFormatted;
