import React from 'react';
import {
    useColorMode,
    Button,
    Box,
    ButtonGroup,
    Heading,
    Text,
    Divider,
    Badge,
    Flex,
    Icon,
} from '@chakra-ui/core';
import { Link } from 'gatsby';
import BadgeByCat from '../components/BadgeByCat';
import ArticleContentFormatted from './ArticleContentFormatted';

const ContentArticle = props => {
    const { post, previous, next } = props;
    const { colorMode } = useColorMode();
    const colorText = { light: 'teal.600', dark: 'gray.100' };
    const smallText = { light: 'gray.500', dark: 'gray.100' };
    const colorBorder = { light: 'teal.600', dark: 'gray.100' };
    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    const date = new Intl.DateTimeFormat('fr-FR', options).format(
        new Date(post.frontmatter.date)
    );

    return (
        <Box>
            <header>
                <Text color={smallText[colorMode]} as="p" fontSize="xs">
                    <Link to="/"> Retour au blog</Link>
                </Text>
                <Heading color={colorText[colorMode]}>
                    {post.frontmatter.title}
                </Heading>
                {post.frontmatter.categories.length > 0
                    ? post.frontmatter.categories.map((cat, index) => (
                          <BadgeByCat key={index} cat={cat} />
                      ))
                    : null}
                <Flex justify="space-between" >
                    <Text color={colorText[colorMode]} as="p" fontSize="xs">
                        {date}
                    </Text>
                    {post.frontmatter.time_to_read ? (
                            <Text
                                color={colorText[colorMode]}
                                as="p"
                                fontSize="xs"
                            >
                                <Icon name="time" />
                                {' '  + post.frontmatter.time_to_read + ' m'}
                            </Text>
                    ) : null}
                </Flex>
            </header>
            <Divider borderColor={colorBorder[colorMode]} />
            <ArticleContentFormatted post={post} />
            <Divider borderColor={colorBorder[colorMode]} />
            <nav>
                <ButtonGroup spacing={4}>
                    {previous && (
                        <Button variantColor="teal" variant="solid">
                            <Link to={'blog' + previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        </Button>
                    )}
                    {next && (
                        <Button variantColor="teal" variant="solid">
                            <Link to={'blog' + next.fields.slug} rel="next">
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
