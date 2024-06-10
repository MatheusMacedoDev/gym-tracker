import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { percentage } from '../../utils/percentageFactory';

export const AccountDataRegisterScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('eduardopasqualetti9@gmail.com');
    const [password, setPassword] = useState('12345');
    const [confirmPassword, setConfirmPassword] = useState('12345');

    async function handleContinue() {
        if (password === confirmPassword) {
            navigation.navigate('GenderRegisterScreen', {
                email: email,
                password: password,
                name: route.params.name
            });
        }
    }

    return (
        <Gradient>
            <Container>
                <IconButton
                    handleClickFn={() => {
                        navigation.goBack();
                    }}
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
                <Title marginTop={percentage(0.03, 'h')}>Dados da Conta</Title>
                <CommandText
                    textAlign={'center'}
                    marginTop={percentage(0.03, 'h')}
                >
                    {route.params != null ? route.params.name : null}, por favor
                    preencha os seus dados para criar sua nova conta:
                </CommandText>
                <Input
                    marginTop={percentage(0.08, 'h')}
                    placeholder='E-mail...'
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    marginTop={percentage(0.02, 'h')}
                    placeholder='Senha...'
                    value={password}
                    onChangeText={setPassword}
                />
                <Input
                    marginTop={percentage(0.02, 'h')}
                    placeholder='Confirme sua senha...'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Button
                    handleClickFn={handleContinue}
                    marginTop={percentage(0.08, 'h')}
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
