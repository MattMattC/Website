import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Divider } from '@chakra-ui/core';
import Article from '../components/Article';

const IndexPage = props => {
    const articles = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Home" />
            {articles.map(({ node }, index) => {
                return (
                    <React.Fragment key={index}>
                        <Article key={index} node={node} />
                        {index !== articles.length - 1 ? <Divider borderColor="teal.500"/> : null}
                    </React.Fragment>
                );
            })}
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
                        categories
                        time_to_read
                        imageHead {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default IndexPage;
