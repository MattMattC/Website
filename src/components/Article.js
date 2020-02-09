import React from 'react';
import { Link as LinkGatsby } from 'gatsby';
import {
    Box,
    Text,
    Heading,
    useColorMode,
    Link,
    Icon,
    Flex,
} from '@chakra-ui/core';
import BadgeByCat from './BadgeByCat';

const Article = props => {
    const { node } = props;
    const { colorMode } = useColorMode();
    const colorText = { light: 'teal.800', dark: 'gray.100' };
    const colorTextSmall = { light: 'gray.500', dark: 'gray.300' };
    const colorDescription = { light: 'gray.600', dark: 'gray.300' };
    const title = node.frontmatter.title || node.fields.slug;
    var options = { year: 'numeric', month: 'short', day: 'numeric' };

    const date = new Intl.DateTimeFormat('fr-FR', options).format(
        new Date(node.frontmatter.date)
    );

    return (
        <Box key={node.fields.slug} pt={2}>
            <header>
                <Flex justifyContent="space-between">
                    <Flex alignItems="center">
                        <Icon
                            name="calendar"
                            size="14px"
                            mr="2"
                            color={colorTextSmall[colorMode]}
                        />
                        <Text
                            as="small"
                            fontSize="xs"
                            color={colorTextSmall[colorMode]}
                        >
                            {date}
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon
                            name="time"
                            size="14px"
                            mr="2"
                            color={colorTextSmall[colorMode]}
                        />
                        <Text
                            as="small"
                            fontSize="xs"
                            color={colorTextSmall[colorMode]}
                        >
                            {node.frontmatter.time_to_read} min
                        </Text>
                    </Flex>
                </Flex>
                <Heading as="h3" fontSize="2xl" color={colorText[colorMode]}>
                    <Link as={LinkGatsby} to={'/blog' + node.fields.slug}>
                        {title}
                    </Link>
                </Heading>
            </header>
            <Flex>
                {node.frontmatter.categories
                    ? node.frontmatter.categories.map((cat, index) => (
                          <BadgeByCat key={index} cat={cat} />
                      ))
                    : null}
            </Flex>
            <Text
                mt="2"
                fontSize="sm"
                color={colorDescription[colorMode]}
                dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                }}
            />

            <Flex justifyContent="right">
                <Text fontSize="xs">
                    <Link
                        color={colorText[colorMode]}
                        as={LinkGatsby}
                        to={'/blog' + node.fields.slug}
                    >
                        Lire l'article
                    </Link>
                </Text>
            </Flex>
        </Box>
    );
};

Article.propTypes = {};

export default Article;
