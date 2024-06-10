import React from 'react';
import { FlatList } from 'react-native';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Title } from '../../components/Title/style';
import BtnExcercise2 from './style';
import { percentage } from '../../utils/percentageFactory';
import MuscleGroupContainer from './components/MuscleGroupContainer';
import { Container } from '../../components/Container/style';

const SelectGroupMuscle = ({ navigation }) => {
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
