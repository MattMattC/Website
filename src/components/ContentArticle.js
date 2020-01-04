import React from 'react';
import {
    useColorMode,
    Button,
    Box,
    ButtonGroup,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/core';
import { Link } from 'gatsby';
import ArticleContentFormatted from './ArticleContentFormatted';

const ContentArticle = props => {
    const { post, previous, next } = props;
    const { colorMode } = useColorMode();
    const colorText = { light: 'teal.600', dark: 'gray.100' };
    
    return (
        <Box>
            <header>
                <Heading color={colorText[colorMode]}>
                    {post.frontmatter.title}
                </Heading>
                <Text color={colorText[colorMode]} as="p">
                    {post.frontmatter.date}
                </Text>
            </header>
            <Divider />
            <ArticleContentFormatted post={post} />
            <hr />
            <nav>
                <ButtonGroup spacing={4}>
                    {previous && (
                        <Button variantColor="teal" variant="solid">
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        </Button>
                    )}
                    {next && (
                        <Button variantColor="teal" variant="solid">
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        </Button>
                    )}
                </ButtonGroup>
            </nav>
        </Box>
    );
};

export default ContentArticle;
