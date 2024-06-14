import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import CodeInput from '../../components/CodeInput';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Logo } from '../../components/Logo';
import Gradient from '../../components/Gradient';
import { percentage } from '../../utils/percentageFactory';
import { ValidatePasswordRecoverCode } from '../../infra/services/userService';

export const EmailCodeScreen = ({ navigation, route }) => {
    const [code, setCode] = useState('');

    useEffect(() => {}, [code])

    async function handleValidateRecoveryCode(email) {
        email = route.params.email;

        const response = await ValidatePasswordRecoverCode(email, code);

        if (response.status == 200) {
            navigation.navigate('ResetPasswordScreen', {
                email: email,
                code: code
            });
        } else {}
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                        Código de verificação
                    </Title>
                    <CommandText
                        marginTop={percentage(0.05, 'h')}
                        marginBottom={percentage(0.12, 'h')}
                    >
                        Digite o cógido que foi enviado para o seu e-mail para
                        verficarmos o seu pedido.
                    </CommandText>
                    <CodeInput 
                        code={code} 
                        setCode={setCode} 
                    />
                    <Button
                        handleClickFn={handleValidateRecoveryCode}
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
        </TouchableWithoutFeedback>
    );
};
