import React from 'react';
import Gradient from '../../components/Gradient';
import { ImageFisic, Subtitulo } from './style';
import { Logo } from '../../components/Logo/index';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import { ContainerPresentation } from '../Presentation/style';
import { percentage } from '../../utils/percentageFactory';

const Fisic = require('../../assets/Images/background.png');

export const PresentationInitial = ({ navigation }) => {
    return (
        <Gradient>
            <ImageFisic source={Fisic} resizeMode='cover'>
                <ContainerPresentation marginTop={percentage(0.64, 'h')}>
                    <Logo heightLogo={45} widthLogo={90} />

                    <Title
                        FontSize={20}
                        width='100%'
                        marginTop={percentage(0.03, 'h')}
                    >
                        Bem Vindo ao Gym Tracker
                    </Title>

                    <Subtitulo FontSize={12} marginTop={percentage(0.02, 'h')}>
                        Seu app de treinos diarios
                    </Subtitulo>

                    <Button
                        marginTop={percentage(0.05, 'h')}
                        marginBottom={'35px'}
                        title='Continuar'
                        handleClickFn={() => navigation.navigate('LoginScreen')}
                    />
                </ContainerPresentation>
            </ImageFisic>
        </Gradient>
    );
};

export default PresentationInitial;
