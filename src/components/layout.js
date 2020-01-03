import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import LayoutE from '../components/Layout/Layout';
import Header from './header';
import styled from 'styled-components';
import Footer from './Footer';

const Main = styled.main`
    margin: 0 auto;
    @media (min-width: 800px) {
        width: 800px;
    }
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <LayoutE>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>{children}</Main>
            <Footer></Footer>
        </LayoutE>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
