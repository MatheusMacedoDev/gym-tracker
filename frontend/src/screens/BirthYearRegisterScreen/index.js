import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createArrayYears } from '../../utils/arraysFactory.js';
import Gradient from '../../components/Gradient/index.js';
import { SelectPicker } from '../../components/SelectPicker/index.js';
import { percentage } from '../../utils/percentageFactory.js';
import { RegisterUser } from '../../infra/services/userService.js';
import { SendWelcomeEmail } from '../../infra/services/userService.js';

export const BirthYearRegisterScreen = ({ navigation, route }) => {
    const [yearBirth, setYearBirth] = useState(2023);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData(route.params.userData);
        console.log(route.params);
    }, [route.params]);

    async function handleRegister() {
        const response = await RegisterUser(
            userData.email,
            userData.password,
            userData.name,
            parseInt(yearBirth),
            userData.gender
        );

        console.log(response.status);

        if (response.status === 201) {
            await SendWelcomeEmail(userData.email, userData.name);
            navigation.replace('LoginScreen');
        } else {
            setError('Failed to register. Please try again.');
        }
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
                    Qual o seu ano de nascimento?
                </Title>
                <SelectPicker
                    onItemPress={setYearBirth}
                    valueNow={yearBirth}
                    list={createArrayYears()}
                />
                <Button
                    handleClickFn={handleRegister}
                    marginTop={percentage(0.1, 'h')}
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
