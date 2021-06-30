import React from 'react';
import {
    useColorMode,
    Button,
    Box,
    ButtonGroup,
    Heading,
    Text,
    Divider,
    Link,
} from '@chakra-ui/core';
import { Link as LinkGatsby } from 'gatsby';
import BadgeByCat from '../components/BadgeByCat';
import ArticleContentFormatted from './ArticleContentFormatted';
import { Emoji } from './Emoji';
import { SubInfo } from './Article/SubInfo';
import { Badges } from './Badges';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ContentArticle = props => {
    const { post, previous, next } = props;
    const { colorMode } = useColorMode();

    const colorText = { light: 'teal.800', dark: 'gray.100' };
    const smallText = { light: 'gray.500', dark: 'gray.100' };
    const colorBorder = { light: 'teal.600', dark: 'gray.100' };
    const bgColor = { light: 'gray.100', dark: 'gray.700' };

    return (
        <Box p="3" rounded="md" bg={bgColor[colorMode]}>
            <header>
                <Text color={smallText[colorMode]} as="p" fontSize="md">
                    <Link as={LinkGatsby} to="/">
                        <Emoji val="⬅️" /> Retour
                    </Link>
                </Text>
                <Heading size="2xl" color={colorText[colorMode]}>
                    {post.frontmatter.title}
                </Heading>
                <Badges badges={post.frontmatter.categories} />

                <SubInfo post={post} fontSize="sm" color={colorText} />
            </header>
            <Divider borderColor={colorBorder[colorMode]} />
            <MDXRenderer>{post.body}</MDXRenderer>
            {/* <ArticleContentFormatted content={post.htmlAst} /> */}
            <Divider borderColor={colorBorder[colorMode]} />
            <nav>
                <ButtonGroup spacing={4}>
                    {previous && (
                        <Link
                            as={LinkGatsby}
                            to={'blog' + previous.fields.slug}
                            rel="prev"
                        >
                            <Button variantColor="teal" variant="solid">
                                ← {previous.frontmatter.title}
                            </Button>
                        </Link>
                    )}
                    {next && (
                        <Link
                            as={LinkGatsby}
                            to={'blog' + next.fields.slug}
                            rel="next"
                        >
                            <Button variantColor="teal" variant="solid">
                                {next.frontmatter.title} →
                            </Button>
                        </Link>
                    )}
                </ButtonGroup>
            </nav>
        </Box>
    );
};

export default ContentArticle;
