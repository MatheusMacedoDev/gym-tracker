import styled from 'styled-components/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const StyledListContainer = styled.View`
    width: 100%;
    min-height: ${props => props.heightContainer || 'auto'};
    max-height: ${props => props.maxHeightContainer || '35%'};
    justify-content: center;
    align-items: center;
`;

const ListContainer = ({ children, heightContainer, maxHeightContainer, loading }) => {
    return (
        <StyledListContainer heightContainer={heightContainer} maxHeightContainer={maxHeightContainer}>
            {loading ? <ActivityIndicator size="large" color="#fb6614" /> : children}
        </StyledListContainer>
    );
};

export default ListContainer;

