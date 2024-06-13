import { colors } from '../../../colors.config';
import ExerciseContainer from './Style/ExerciseContainer';
import ExerciseTitle from './Style/ExerciseTitle';
import { FontAwesome } from '@expo/vector-icons';
import { percentage } from '../../../utils/percentageFactory';
import CheckIconBackgroud from './Style/CheckIconBackgroud';

export default ExistWorkoutComponent = ({ nameExercise, checked }) => {
    return (
        <ExerciseContainer>
            <CheckIconBackgroud
                color={checked ? colors.orange : colors.darkGray}
            >
                <FontAwesome
                    name='check'
                    size={18}
                    color={checked ? colors.white : colors.lightGray}
                />
            </CheckIconBackgroud>
            <ExerciseTitle marginLeft={percentage(0.03, 'w')}>
                {nameExercise}
            </ExerciseTitle>
        </ExerciseContainer>
    );
};
