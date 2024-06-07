import { useState } from 'react';
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

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('matheus.macedo@email.com');
    const [password, setPassword] = useState('12345');

    async function handleLogin() {
        const response = await MakeLogin(email, password);
        console.log(response.data);
        if (response.status == 200) {
            navigation.replace('Main');
        } else {
        }
    }

    return (
        <Gradient>
            <Container>
                <Logo marginTop={percentage(0.15, 'h')} />
                <Title marginTop={percentage(0.05, 'h')}>Bem vindo</Title>
                <Input
                    marginTop={percentage(0.12, 'h')}
                    placeholder='E-mail ou usuário...'
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    marginTop={percentage(0.03, 'h')}
                    placeholder='Senha...'
                    value={password}
                    onChangeText={setPassword}
                />
                <Link
                    onPress={() => navigation.navigate('RecoverPasswordScreen')}
                    textAlign={'right'}
                    marginTop={percentage(0.03, 'h')}
                >
                    Esqueceu sua senha ?
                </Link>
                <Button
                    marginTop={percentage(0.1, 'h')}
                    title='Login'
                    handleClickFn={handleLogin}
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
    );
};
