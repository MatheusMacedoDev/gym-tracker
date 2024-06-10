import { useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container/style';
import { IconButton } from '../../components/IconButton';
import { Logo } from '../../components/Logo';
import { SelectPicker } from '../../components/SelectPicker';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createWeightArray } from '../../utils/arraysFactory.js';
import Gradient from '../../components/Gradient/index.js';
import { percentage } from '../../utils/percentageFactory.js';

export const WeightRecordScreen = ({ navigation }) => {
    const [weight, setWeight] = useState();

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
                <Logo marginTop={percentage(0.12, 'h')} />
                <Title marginTop={percentage(0.05, 'h')}>
                    Qual o seu peso?
                </Title>
                <SelectPicker
                    onItemPress={setWeight}
                    valueNow={weight}
                    list={createWeightArray()}
                />
                <Button
                    handleClickFn={() => {
                        navigation.navigate('HeighRecordScreen');
                    }}
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
