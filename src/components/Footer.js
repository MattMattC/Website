import React from 'react';
import styled from 'styled-components';
import ContainerPage from './ContainerPage';

const FooterStyle = styled.footer`
    background-color: ${props => props.theme.theme.color.lightGray};
`;

const Footer = props => {
    return (
        <FooterStyle>
            <ContainerPage>Coucou c'st moi</ContainerPage>
        </FooterStyle>
    );
};

export default Footer;
