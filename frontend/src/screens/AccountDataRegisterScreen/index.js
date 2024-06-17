import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { percentage } from '../../utils/percentageFactory';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import ErrorMessageText from '../../components/ErrorMessageText/style';
import { ScrollContainer } from '../../components/ScrollContainer';
import { KeyboardAvoidingView, Platform } from 'react-native';

const schema = yup.object().shape({
    email: yup.string().required('O email não pode ser vazio').email('Digite um email válido'),
    password: yup.string().required('A senha não pode ser vazia').min(5, 'A senha deve conter pelo menos 5 dígitos'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem coincidir').required('A confirmação de senha não pode ser vazia')
})

export const AccountDataRegisterScreen = ({ navigation, route }) => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        register('email');
        register('password');
    }, [register]);

    async function handleContinue(data) {
        if (data.password === data.confirmPassword) {
            navigation.navigate('GenderRegisterScreen', {
                email: data.email,
                password: data.password,
                name: route.params.name
            });
        }
    }

    return (
        <Gradient>
             <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
            <ScrollContainer showsVerticalScrollIndicator={false} widthScroll={'85%'}>
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
                    autoFocus
                    placeholder='E-mail...'
                    error={errors.email}
                    onChangeText={text => setValue('email', text)}
                />
                {errors.email && <ErrorMessageText>{errors.email.message}</ErrorMessageText>}
                <Input
                    marginTop={percentage(0.02, 'h')}
                    placeholder='Senha...'
                    secureTextEntry
                    textContentType="oneTimeCode"
                    error={errors.password}
                    onChangeText={text => setValue('password', text)}
                />
                {errors.password && <ErrorMessageText>{errors.password.message}</ErrorMessageText>}
                <Input
                    marginTop={percentage(0.02, 'h')}
                    placeholder='Confirme sua senha...'
                    secureTextEntry
                    textContentType="oneTimeCode"
                    error={errors.confirmPassword}
                    onChangeText={text => setValue('confirmPassword', text)}
                />
                {errors.confirmPassword && <ErrorMessageText>{errors.confirmPassword.message}</ErrorMessageText>}
                <Button
                    handleClickFn={handleSubmit(handleContinue)}
                    marginTop={percentage(0.08, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                    title='Continuar'
                    icon={(size, color) => (
                        <Entypo
                            name='chevron-right'
                            size={size}
                            color={color}
                        />
                    )}
                />
            </ScrollContainer>
            </KeyboardAvoidingView>
        </Gradient>
    );
};
