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

export const ResetPasswordScreen = ({ navigation }) => {
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
                />
                <Input
                    marginTop={percentage(0.03, 'h')}
                    placeholder='Repita a nova senha...'
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
                    handleClickFn={() => navigation.navigate('LoginScreen')}
                />
            </Container>
        </Gradient>
    );
};
