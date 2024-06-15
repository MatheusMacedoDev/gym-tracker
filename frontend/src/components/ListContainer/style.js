import styled from 'styled-components/native';

export const ListContainer = styled.View`
    width: 100%;
    min-height: ${props =>
        props.heightContainer ? props.heightContainer : 'auto'};
    max-height: ${props =>
        props.maxHeightContainer ? props.maxHeightContainer : '35%'};
`;
