import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { CardsGender } from '../../components/CardsGender/index.js';
import Gradient from '../../components/Gradient/index.js';
import { useState } from 'react';
import { percentage } from '../../utils/percentageFactory.js';
import Toast from 'react-native-toast-message';
import {
    callGenderNotSelectedErrorToast,
    toastConfig
} from '../../utils/toastConfiguration.js';

export const GenderRegisterScreen = ({ navigation, route }) => {
    const [selectedGender, setSelectedGender] = useState();

    async function handleContinue() {
        if (selectedGender) {
            navigation.navigate('BirthYearRegisterScreen', {
                userData: {
                    ...route.params,
                    gender: selectedGender
                }
            });
        } else {
            callGenderNotSelectedErrorToast();
        }
    }

    return (
        <>
            <Toast config={toastConfig} />
            <Gradient>
                <Container>
                    <IconButton
                        handleClickFn={() => navigation.goBack()}
                        gradient={false}
                        icon={
                            <MaterialIcons
                                name='reply'
                                size={40}
                                color={'#FB6614'}
                            />
                        }
                    />
                    <Logo marginTop={percentage(0.15, 'h')} />
                    <Title
                        marginTop={percentage(0.03, 'h')}
                        marginBottom={percentage(0.06, 'h')}
                    >
                        Qual o seu sexo?
                    </Title>
                    <CardsGender
                        selectedGender={selectedGender}
                        setSelectedGender={setSelectedGender}
                    />
                    <Button
                        handleClickFn={handleContinue}
                        marginTop={percentage(0.06, 'h')}
                        title='Continuar'
                        icon={(size, color) => (
                            <Entypo
                                name='chevron-right'
                                size={size}
                                color={color}
                            />
                        )}
                    />
                </Container>
            </Gradient>
        </>
    );
};
