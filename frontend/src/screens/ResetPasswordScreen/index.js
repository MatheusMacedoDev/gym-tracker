import { useState } from 'react';
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
import { percentage } from '../../utils/percentageFactory';
import { ChangePassword } from '../../infra/services/userService';

export const ResetPasswordScreen = ({ navigation, route }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    async function handleChangePassword() {
        const email = route.params.email;
        const passwordRecoverCode = route.params.code;
         
        if (newPassword !== confirmNewPassword) {
            setError('Passwords do not match');
            return;
        }

        const response = await ChangePassword(email, newPassword, passwordRecoverCode)

        if (response.status == 200) {
            navigation.navigate('LoginScreen');
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
                <Title marginTop={percentage(0.05, 'h')}>Quase lá</Title>
                <CommandText
                    textAlign={'center'}
                    marginTop={percentage(0.05, 'h')}
                >
                    Altere sua senha
                </CommandText>
                <Input
                    marginTop={percentage(0.12, 'h')}
                    placeholder='Nova senha...'
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                <Input
                    marginTop={percentage(0.03, 'h')}
                    placeholder='Repita a nova senha...'
                    value={confirmNewPassword}
                    onChangeText={setConfirmNewPassword}
                />
                <Button
                    marginTop={percentage(0.12, 'h')}
                    title='Continuar'
                    icon={(size, color) => (
                        <Entypo
                            name='chevron-right'
                            size={size}
                            color={color}
                        />
                    )}
                    handleClickFn={() => handleChangePassword()}
                />
            </Container>
        </Gradient>
    );
};
