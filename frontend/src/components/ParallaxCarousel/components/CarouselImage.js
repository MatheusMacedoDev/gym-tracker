import styled from 'styled-components/native';

const CarouselImage = styled.Image`
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};

    width: ${props => (props.snapped ? '160' : '120')}px;
    height: ${props => (props.snapped ? '200' : '160')}px;

    border: ${props => (props.snapped ? '3px' : '0px')} solid #f9f9f9;
    border-radius: 20px;

    box-shadow: 4px 0px 16px white;
    elevation: 20;

    position: relative;
    z-index: ${props => (props.snapped ? 100 : 1)};
`;

export default CarouselImage;
