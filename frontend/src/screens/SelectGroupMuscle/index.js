import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import Gradient from '../../components/Gradient';
import { ContainerPresentation } from '../../screens/Presentation/style';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Title } from '../../components/Title/style';
import { Button } from '../../components/Button';
import BtnExcercise2 from './style';

import Ombro from '../../assets/Images/Ombro.png';
import Posterior from '../../assets/Images/Posterior.png';
import Quadriceps from '../../assets/Images/Quadriceps.png';
import Panturrilha from '../../assets/Images/panturrilha.png';

import { percentage } from '../../utils/percentageFactory';
import MuscleGroupContainer from './components/MuscleGroupContainer';
import { Container } from '../../components/Container/style';

const data = [
    { id: '1', title: 'Ombro', image: Ombro },
    { id: '2', title: 'Posterior', image: Posterior },
    { id: '3', title: 'Quadriceps', image: Quadriceps },
    { id: '4', title: 'Panturrilha', image: Panturrilha },
    { id: '5', title: 'Posterior', image: Posterior },
    { id: '6', title: 'Posterior', image: Posterior },
    { id: '7', title: 'Ombro', image: Ombro },
    { id: '8', title: 'Posterior', image: Posterior },
    { id: '9', title: 'Quadriceps', image: Quadriceps },
    { id: '10', title: 'Panturrilha', image: Panturrilha },
    { id: '11', title: 'Posterior', image: Posterior },
    { id: '12', title: 'Posterior', image: Posterior }
];

const SelectGroupMuscle = ({ navigation, route }) => {
    const numColumns = 2;

    const renderItem = ({ item }) => (
        <BtnExcercise2
            title={item.title}
            image={item.image}
            onPress={() => navigation.navigate('SelectExercise')}
        />
    );

    return (
        <Gradient>
            <Container>
                <IconButton
                    gradient={false}
                    icon={
                        <MaterialIcons
                            name='reply'
                            size={40}
                            color={'#FB6614'}
                            onPress={() => navigation.goBack()}
                        />
                    }
                />

                <Title
                    marginTop={percentage(0.12, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                    FontSize={20}
                >
                    Exercicios
                </Title>

                <MuscleGroupContainer>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={numColumns}
                        key={numColumns}
                        contentContainerStyle={{ justifyContent: 'center' }}
                    />
                </MuscleGroupContainer>
            </Container>
        </Gradient>
    );
};

export default SelectGroupMuscle;
