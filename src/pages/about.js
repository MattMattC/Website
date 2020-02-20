import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Text, Image, Flex, Link } from '@chakra-ui/core';
import ArticleContentFormatted from '../components/ArticleContentFormatted';

const SecondPage = props => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "mc.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="About" />
            <ArticleContentFormatted>
                <Flex justifyContent="center">
                    <Image
                        rounded="full"
                        size="200px"
                        alt="Matthieu Coulon"
                        src={data.placeholderImage.childImageSharp.fluid.src}
                    />
                </Flex>
                <Text>
                    Développeur Front / Back) et Responsable UX chez &nbsp;
                    <Link href="https://paygreen.io/">PayGreen</Link>.
                    J'ai une préference pour le JS. J'ai créé ce site principalement pour le blog.
                </Text>
            </ArticleContentFormatted>
        </Layout>
    );
};

export default SecondPage;
