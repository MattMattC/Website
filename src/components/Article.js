import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkGatsby } from 'gatsby';
import {
    Box,
    Text,
    SimpleGrid,
    Heading,
    useColorMode,
    Link,
    Icon,
    Divider,
    Flex,
    IconButton,
} from '@chakra-ui/core';
import BadgeByCat from './BadgeByCat';
const Article = props => {
    const { node } = props;

    const { colorMode } = useColorMode();
    const colorText = { light: 'teal.600', dark: 'gray.100' };
    const colorTextSmall = { light: 'gray.600', dark: 'gray.300' };
    const colorDescription = { light: 'gray.600', dark: 'gray.300' };

    const title = node.frontmatter.title || node.fields.slug;
    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    const date = new Intl.DateTimeFormat('fr-FR', options).format(
        new Date(node.frontmatter.date)
    );
    return (
        <Box key={node.fields.slug} p={2} shadow="lg">
            <header>
                <Heading as="h3" fontSize="2xl" color={colorText[colorMode]}>
                    <Link
                        color={colorText[colorMode]}
                        as={LinkGatsby}
                        to={'/blog' + node.fields.slug}
                    >
                        {title}
                    </Link>
                </Heading>
                <Flex alignItems="center">
                    <Icon name="calendar" size="16px" mr="2" />
                    <Text as="small" color={colorTextSmall[colorMode]}>
                        {date}
                    </Text>

                    <Divider orientation="vertical" />
                    {node.frontmatter.categories
                        ? node.frontmatter.categories.map((cat, index) => (
                              <BadgeByCat key={index} cat={cat} />
                          ))
                        : null}
                </Flex>
            </header>
            <Text
                mt="2"
                fontSize="sm"
                color={colorDescription[colorMode]}
                dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                }}
            />
            <Flex justifyContent="right">
                <Text>
                    <Link
                        color={colorText[colorMode]}
                        as={LinkGatsby}
                        to={'/blog' + node.fields.slug}
                    >
                        <IconButton
                            aria-label="Search database"
                            icon="arrow-forward"
                        />
                    </Link>
                </Text>
            </Flex>
        </Box>
    );
};

Article.propTypes = {};

export default Article;
