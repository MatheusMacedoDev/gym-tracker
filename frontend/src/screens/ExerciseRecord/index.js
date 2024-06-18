import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { ExerciseSerieCard } from '../../components/ExerciseSerieCard';
import Gradient from '../../components/Gradient';
import { ListComponent } from '../../components/List/style';
import { ListContainer } from '../../components/ListContainer/style';
import { Logo } from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { Entypo } from '@expo/vector-icons';
import { ExerciseSerieLabel } from './Container/style';
import { Label } from './Label/style';
import { percentage } from '../../utils/percentageFactory';
import { IconButton } from '../../components/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import { RegisterDiaryExerciseSeries } from '../../infra/services/diaryWorkoutService';
import { ScrollContainer } from '../../components/ScrollContainer';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container } from '../../components/Container/style';

export const ExerciseRecord = ({ navigation, route }) => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const seriesArray = [];
        for (let i = 0; i < route.params.seriesAmount; i++) {
            seriesArray.push({
                diaryExerciseId: route.params.diaryExerciseId,
                id: i + 1,
                repsRange: route.params.repetitions,
                repetitions: '',
                overload: ''
            });
        }
        console.log(route.params);
        setSeries(seriesArray);
    }, [route.params]);

    const updateSeries = (id, field, value) => {
        setSeries(x => x.map(serie =>
            serie.id === id ? { ...serie, [field]: value } : serie
        ));
    };

    async function RegisterExerciseSeries() {
        if (series.length >= 1) {
            for (let index = 0; index < series.length; index++) {
                if (series[index].repetitions && series[index].overload) {
                    await RegisterDiaryExerciseSeries(
                        series[index].diaryExerciseId,
                        series[index].id,
                        series[index].repetitions,
                        series[index].overload
                    )
                }
            }
            route.params.disableFn()
            navigation.navigate('TrainingExercisesScreens');
        } else { alert("preencha todas repeticoes e cargas") }
    }

    return (
        <Gradient>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <Container showsVerticalScrollIndicator={false} widthScroll={'85%'}>
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
                    <Logo marginTop={percentage(0.08, 'h')} />
                    <Title marginTop={percentage(0.05, 'h')}>
                        Registro de exercício
                    </Title>
                    <CommandText
                        marginTop={percentage(0.03, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                        textAlign={'center'}
                    >
                        Preencha os dados da série a seguir:
                    </CommandText>
                    <ExerciseSerieLabel marginBottom={percentage(0.03, 'h')}>
                        <Label>Carga</Label>
                        <Label>Repetições</Label>
                    </ExerciseSerieLabel>
                    <ListContainer>
                        <ListComponent
                            data={series}
                            contentContainerStyle={{
                                gap: 16
                            }}
                            renderItem={({ item }) => (
                                <ExerciseSerieCard
                                    key={item.id}
                                    data={item}
                                    setSeries={updateSeries}
                                />
                            )}
                        />
                    </ListContainer>
                    <Button
                        marginTop={percentage(0.05, 'h')}
                        handleClickFn={() => RegisterExerciseSeries()}
                        title='Finalizar exercício'
                        icon={(size, color) => (
                            <Entypo
                                name='chevron-right'
                                size={size}
                                color={color}
                            />
                        )}
                    />
                </Container>
            </KeyboardAvoidingView>
        </Gradient>
    );
};
