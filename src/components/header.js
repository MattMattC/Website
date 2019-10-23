import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import HeaderComp from '../components/Header/Header';
import styled from 'styled-components';

const headerContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
    <HeaderComp>
        <headerContent>
            <ThemeToggle></ThemeToggle>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                {siteTitle}
            </Link>
        </headerContent>
    </HeaderComp>

)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
