import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import LayoutE from '../components/Layout/Layout';
import Header from './header';
import styled from 'styled-components';
import Footer from './Footer';
import Main from './Main';

const Grid = styled.div`
    height: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
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
            <Grid>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer></Footer>
            </Grid>
        </LayoutE>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
