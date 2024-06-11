import { useEffect, useState } from 'react';
import {
    ContainerCard,
    ContainerInput,
    ContainerText
} from './Container/style';
import { InputExercise } from './Input/style';
import { CardSubtitle, CardTitle } from './Title/style';

export const ExerciseSerieCard = ({ serie,marginBottom }) => {

    useEffect(() => {
        console.log(serie);
    },[serie])
    return (
        <ContainerCard marginBottom={marginBottom}>
            <ContainerText>
                <CardTitle>Serie {serie.id}</CardTitle>
                <CardSubtitle>{serie.repsRange} Repetições</CardSubtitle>
            </ContainerText>
            <ContainerInput>
                <InputExercise placeholder='Kg...' />
                <InputExercise placeholder='0...' />
            </ContainerInput>
        </ContainerCard>
    );
};
