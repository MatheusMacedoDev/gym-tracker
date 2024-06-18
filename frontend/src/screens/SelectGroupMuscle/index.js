import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Gradient from '../../components/Gradient';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { Title } from '../../components/Title/style';
import BtnExcercise2 from './style';
import { percentage } from '../../utils/percentageFactory';
import MuscleGroupContainer from './components/MuscleGroupContainer';
import { Container } from '../../components/Container/style';
import { GetMuscleGroups } from '../../infra/services/exerciseService';
import {
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';
import Toast from 'react-native-toast-message';

const SelectGroupMuscle = ({ navigation, route }) => {
    const [muscleGroups, setMuscleGroups] = useState();
    const numColumns = 2;

    useEffect(() => {
        GetAllMuscleGroups();
    }, []);

    const renderItem = ({ item }) => (
        <BtnExcercise2
            image={item.muscleImage}
            title={item.groupName}
            onPress={() =>
                navigation.navigate('SelectExercise', {
                    mucleGroupId: item.mucleGroupId,
                    defaultWorkoutId: route.params.defaultWorkoutId,
                    trainingName: route.params.trainingName
                })
            }
        />
    );

    async function GetAllMuscleGroups() {
        const response = await GetMuscleGroups();

        if (response.status === 200) {
            setMuscleGroups(response.data);
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    return (
        <>
            <Toast swipeable config={toastConfig} />
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
                        Grupos musculares
                    </Title>

                    <MuscleGroupContainer>
                        <FlatList
                            data={muscleGroups}
                            renderItem={renderItem}
                            keyExtractor={item => item.mucleGroupId}
                            numColumns={numColumns}
                            key={numColumns}
                            contentContainerStyle={{ justifyContent: 'center' }}
                        />
                    </MuscleGroupContainer>
                </Container>
            </Gradient>
        </>
    );
};

export default SelectGroupMuscle;