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
} from '@chakra-ui/core';
const Article = props => {
    const { node } = props;
    const { colorMode } = useColorMode();
    const colorText = { light: 'teal.600', dark: 'gray.100' };
    const colorTextSmall = { light: 'gray.600', dark: 'gray.300' };
    const colorDescription = { light: 'gray.600', dark: 'gray.300' };
    
    const title = node.frontmatter.title || node.fields.slug;

    return (
        <Box
            maxW="sm"
            key={node.fields.slug}
            p={2}
        >
            <header>
                <Heading as="h3" color={colorText[colorMode]}>
                    <Link
                        color={colorText[colorMode]}
                        as={LinkGatsby}
                        to={node.fields.slug}
                    >
                        {title}
                    </Link>
                </Heading>
                <Text as="small" color={colorTextSmall[colorMode]}>
                    {node.frontmatter.date}
                </Text>
            </header>
            <Text color={colorDescription[colorMode]}
                dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                }}
            />
        </Box>
    );
};

Article.propTypes = {};

export default Article;
