import { Flex, Icon, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { GrosPoint } from '../GrosPoint';

export const SubInfo = ({ post, color, fontSize }) => {
    const { colorMode } = useColorMode();

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Intl.DateTimeFormat('fr-FR', options).format(
        new Date(post.frontmatter.date)
    );

    return (
        <Flex align="center" mb="4">
            <Text mr="2" color={color[colorMode]} as="p" fontSize={fontSize}>
                {date}
            </Text>
            <GrosPoint color={color[colorMode]} mr="2" fontSize={fontSize} />
            {post.frontmatter.time_to_read ? (
                <Text color={color[colorMode]} as="p" fontSize={fontSize}>
                    <Icon name="time" />
                    {' ' + post.frontmatter.time_to_read + ' m'}
                </Text>
            ) : null}
        </Flex>
    );
};
