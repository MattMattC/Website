import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContentArticle from '../components/ContentArticle';
const BlogPostTemplate = props => {
    const post = props.data.markdownRemark;
    const { previous, next } = props.pageContext;

    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <ContentArticle previous={previous} next={next} post={post} />
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                time_to_read
                categories
            }
        }
    }
`;
