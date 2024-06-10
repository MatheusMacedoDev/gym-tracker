import { colors } from '../../../colors.config';
import ExerciseContainer from './Style/ExerciseContainer';
import ExerciseTitle from './Style/ExerciseTitle';
import { AntDesign } from '@expo/vector-icons';
import { percentage } from '../../../utils/percentageFactory';

export default ExistWorkoutComponent = ({ nameExercise }) => {
    return (
        <ExerciseContainer>
            <AntDesign name='checkcircle' size={22} color={colors.orange} />
            <ExerciseTitle marginLeft={percentage(0.04, 'w')}>
                {nameExercise}
            </ExerciseTitle>
        </ExerciseContainer>
    );
};
