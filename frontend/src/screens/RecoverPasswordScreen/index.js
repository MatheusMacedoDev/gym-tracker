import { Image } from 'react-native';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Gradient from '../../components/Gradient';
import { percentage } from '../../utils/percentageFactory';

export const RecoverPasswordScreen = ({ navigation }) => {
    async function passToEmailCode() {
        navigation.navigate('EmailCodeScreen');
    }

    return (
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
                <Title marginTop={percentage(0.05, 'h')}>
                    Esqueceu a senha?
                </Title>
                <CommandText marginTop={percentage(0.05, 'h')}>
                    Digite o seu e-mail para que possamos enviar um código de
                    recuperação.
                </CommandText>
                <Input
                    marginTop={percentage(0.12, 'h')}
                    placeholder='Email de recuperação...'
                />
                <Button
                    handleClickFn={passToEmailCode}
                    marginTop={percentage(0.12, 'h')}
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
    );
};
