import React from 'react';
import {
    ContainerText,
    TextTitle,
    RoundImage,
    TextDescription,
    TextContainer,
    Container2,
    ContainerPresentation
} from './style';
import { Button } from '../../components/Button';
import Gradient from '../../components/Gradient';
import { percentage } from '../../utils/percentageFactory';

const roundImageSource = require('../../assets/Images/joaocantor.jpg');

export const Presentation = ({ navigation }) => {
    return (
        <Gradient>
            <ContainerPresentation marginTop={percentage(0.3, 'h')}>
                <ContainerText>
                    <Container2>
                        <TextTitle>
                            Hello,{'\n'}
                            Gym bro
                        </TextTitle>

                        <RoundImage source={roundImageSource} />
                    </Container2>

                    <TextContainer>
                        <TextDescription>
                            Bem-vindo ao Gym Tracker! Organize seus treinos,
                            acompanhe seu progresso e alcance suas metas fitness
                            com facilidade. Vamos juntos transformar sua jornada
                            de exercícios!
                        </TextDescription>
                    </TextContainer>
                </ContainerText>
                <Button
                    marginTop={percentage(0, 'h')}
                    title='Continuar'
                    handleClickFn={() =>
                        navigation.navigate('PresentationInitial')
                    }
                />
            </ContainerPresentation>
        </Gradient>
    );
};
export default Presentation;
