import styled from 'styled-components/native';

const StatisticsContainer = styled.View`
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: ${props =>
        props.marginBottom ? props.marginBottom : '0px'};
`;

export default StatisticsContainer;
