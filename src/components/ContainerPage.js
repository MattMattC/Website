import React from 'react';
import styled from 'styled-components';

const ContainerPageStyle = styled.div`
    margin: 0 auto;
    @media (min-width: 800px) {
        width: 800px;
    }
`;

const ContainerPage = ({ children }) => {
    return <ContainerPageStyle>{children}</ContainerPageStyle>;
};

export default ContainerPage;
