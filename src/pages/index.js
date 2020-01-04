import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link as LinkGatsby } from 'gatsby';
import { SimpleGrid } from '@chakra-ui/core';
import Article from '../components/Article';

const IndexPage = props => {
    const articles = props.data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <SimpleGrid columns={3} spacing={10} minChildWidth="200px">
                {articles.map(({ node }, index) => {
                    return <Article node={node} />;
                })}
            </SimpleGrid>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
export default IndexPage;
