import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import styled from 'styled-components';

const HeaderContent = styled.div`
    background-color: ${props => props.theme.theme.color.header};
    padding: ${props => props.theme.theme.size.padding};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto';
`;

const Header = ({ siteTitle }) => (
    <HeaderContent>
        <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
        >
            {siteTitle}
        </Link>
        <ThemeToggle></ThemeToggle>
    </HeaderContent>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
