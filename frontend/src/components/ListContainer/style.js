import styled from 'styled-components/native';

export const ListContainer = styled.View`
    width: 100%;
    max-height: ${props =>
        props.maxHeightContainer ? props.maxHeightContainer : '35%'};
`;
