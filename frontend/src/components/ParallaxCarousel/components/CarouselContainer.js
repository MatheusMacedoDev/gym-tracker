import styled from 'styled-components/native';

const CarouselContainer = styled.View`
    height: 240px;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    position: relative;
`;

export default CarouselContainer;
