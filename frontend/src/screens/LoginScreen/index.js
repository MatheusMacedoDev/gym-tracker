import { useContext, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import Gradient from '../../components/Gradient';
import { Input } from '../../components/Input/style';
import { Link } from '../../components/Link/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { LinkCommandText } from './components/linkCommandText';
import { LinkContainer } from './components/linkContainer';
import { MakeLogin } from '../../infra/services/userService';
import { percentage } from '../../utils/percentageFactory';
import { getUserToken, setUserToken } from '../../utils/tokenHandler';
import AuthContext from '../../global/AuthContext';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from 'react-native';
import ErrorMessageText from '../../components/ErrorMessageText/style';
import {
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';
import Toast from 'react-native-toast-message';

const schema = yup.object().shape({
    email: yup
        .string()
        .required('O email não pode ser vazio')
        .email('Digite um email válido'),
    password: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(5, 'A senha deve conter pelo menos 5 dígitos')
});

export const LoginScreen = ({ navigation }) => {
    const { setUser } = useContext(AuthContext);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        register('email');
        register('password');
    }, [register]);

    async function handleLogin(data) {
        const response = await MakeLogin(data.email, data.password);

        if (response.status === 200) {
            const token = response.data.authenticationToken;

            await setUserToken(token);
            const decodedToken = await getUserToken();
            setUser(decodedToken);

            navigation.replace('Main');
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    useEffect(() => {
        async function tryToUseSavedToken() {
            const decodedToken = await getUserToken();
            setUser(decodedToken);

            if (decodedToken) {
                navigation.replace('Main');
            }
        }

        tryToUseSavedToken();
    }, []);

    return (
        <>
            <Toast config={toastConfig} />
            <Gradient>
                <Container>
                    <Logo marginTop={percentage(0.15, 'h')} />
                    <Title marginTop={percentage(0.05, 'h')}>Bem-vindo</Title>
                    <Input
                        marginTop={percentage(0.12, 'h')}
                        placeholder='E-mail...'
                        onChangeText={text => setValue('email', text)}
                        error={errors.email}
                    />
                    {errors.email && (
                        <ErrorMessageText>
                            {errors.email.message}
                        </ErrorMessageText>
                    )}
                    <Input
                        marginTop={percentage(0.03, 'h')}
                        placeholder='Senha...'
                        secureTextEntry
                        error={errors.password}
                        onChangeText={text => setValue('password', text)}
                    />
                    {errors.password && (
                        <Text
                            style={{
                                fontFamily: 'Montserrat_400Regular',
                                fontSize: 15,
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginTop: 10,
                                paddingLeft: 5
                            }}
                        >
                            {errors.password.message}
                        </Text>
                    )}

                    <Link
                        onPress={() =>
                            navigation.navigate('RecoverPasswordScreen')
                        }
                        textAlign={'right'}
                        marginTop={percentage(0.03, 'h')}
                    >
                        Esqueceu sua senha?
                    </Link>
                    <Button
                        marginTop={percentage(0.1, 'h')}
                        title='Login'
                        handleClickFn={handleSubmit(handleLogin)}
                    />
                    <LinkContainer marginTop={percentage(0.04, 'h')}>
                        <LinkCommandText>Não tem uma conta?</LinkCommandText>
                        <Link
                            onPress={() =>
                                navigation.navigate('NameRegisterScreen')
                            }
                        >
                            Cadastre-se
                        </Link>
                    </LinkContainer>
                </Container>
            </Gradient>
        </>
    );
};
