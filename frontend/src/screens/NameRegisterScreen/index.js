import { Button } from '../../components/Button';
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessageText from '../../components/ErrorMessageText/style';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    name: yup.string().required("O nome não pode ser vazio").min(3,"O nome não pode ser pequeno assim")
});

export const NameRegisterScreen = ({ navigation }) => {
    
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    async function passToAccountData(data) {
        navigation.navigate('AccountDataRegisterScreen', { name: data.name });
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
                <Logo marginTop={percentage(0.2, 'h')} />
                <Title fontSize={38} marginTop={percentage(0.05, 'h')}>
                    Qual o seu nome?
                </Title>
                <Input
                    onChangeText={text => setValue('name', text)}
                    marginTop={percentage(0.1, 'h')}
                    placeholder='Seu nome...'
                    error={errors.name}
                />
                {errors.name && <ErrorMessageText>{errors.name.message}</ErrorMessageText>}
                <Button
                    handleClickFn={handleSubmit(passToAccountData)}
                    marginTop={percentage(0.25, 'h')}
                    title='Continuar'
                    icon={(size, color) => (
                        <Entypo name='chevron-right' size={28} color={color} />
                    )}
                />
            </Container>
        </Gradient>
    );
};
