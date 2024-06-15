import { useEffect, useState } from 'react';
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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ErrorMessageText from '../../components/ErrorMessageText/style';
import Toast from 'react-native-toast-message';
import {
    callCodeVerifiedToast,
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';

const schema = yup.object().shape({
    newPassword: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(5, 'A senha deve conter pelo menos 5 dígitos'),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'As senhas devem coincidir')
        .required('A confirmação de senha não pode ser vazia')
});

export const ResetPasswordScreen = ({ navigation, route }) => {
    const {
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleChangePassword(data) {
        const email = route.params.email;
        const passwordRecoverCode = route.params.code;

        if (data.newPassword === data.confirmNewPassword) {
            const response = await ChangePassword(
                email,
                data.confirmNewPassword,
                passwordRecoverCode
            );

            if (response.status == 200) {
                navigation.navigate('LoginScreen');
            } else {
                callNetworkErrorOccuredToast();
            }
        }
    }

    useEffect(() => {
        callCodeVerifiedToast();
    }, []);

    return (
        <>
            <Toast config={toastConfig} />
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
                        error={errors.newPassword}
                        onChangeText={text => setValue('newPassword', text)}
                        secureTextEntry={true}
                    />
                    {errors.newPassword && (
                        <ErrorMessageText>
                            {errors.newPassword.message}
                        </ErrorMessageText>
                    )}
                    <Input
                        marginTop={percentage(0.03, 'h')}
                        placeholder='Repita a nova senha...'
                        error={errors.confirmNewPassword}
                        onChangeText={text =>
                            setValue('confirmNewPassword', text)
                        }
                        secureTextEntry={true}
                    />
                    {errors.confirmNewPassword && (
                        <ErrorMessageText>
                            {errors.confirmNewPassword.message}
                        </ErrorMessageText>
                    )}
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
                        handleClickFn={handleSubmit(handleChangePassword)}
                    />
                </Container>
            </Gradient>
        </>
    );
};
