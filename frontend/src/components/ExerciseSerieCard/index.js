import React from 'react';
import {
    ContainerCard,
    ContainerInput,
    ContainerText
} from './Container/style';
import { InputExercise } from './Input/style';
import { CardSubtitle, CardTitle } from './Title/style';

export const ExerciseSerieCard = ({ data, setSeries, marginBottom }) => {

    const handleOverloadChange = (text) => {
        setSeries(data.id, 'overload', text);
    };

    const handleRepetitionsChange = (text) => {
        setSeries(data.id, 'repetitions', text);
    };

    return (
        <ContainerCard marginBottom={marginBottom}>
            <ContainerText>
                <CardTitle>Serie {data.id}</CardTitle>
                <CardSubtitle>{data.repsRange} Repetições</CardSubtitle>
            </ContainerText>
            <ContainerInput>
                <InputExercise
                    onChangeText={handleOverloadChange}
                    value={data.overload}
                    placeholder='Kg...'
                    keyboardType='numeric'
                />
                <InputExercise
                    onChangeText={handleRepetitionsChange}
                    value={data.repetitions}
                    placeholder='0...'
                    keyboardType='numeric'
                />
            </ContainerInput>
        </ContainerCard>
    );
};
