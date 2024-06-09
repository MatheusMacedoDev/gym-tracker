import { Button } from '../../components/Button';
import { CommandText } from '../../components/CommandText/style';
import { Container } from '../../components/Container/style';
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

const series = [
    { id: 1, serialNumber: 1, reps: 12 },
    { id: 2, serialNumber: 2, reps: 12 },
    { id: 3, serialNumber: 3, reps: 12 },
    { id: 4, serialNumber: 4, reps: 12 },
    { id: 5, serialNumber: 5, reps: 12 }
];

export const ExerciseRecord = ({ navigation }) => {
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
                                serialNumber={item.serialNumber}
                                reps={item.reps}
                            />
                        )}
                    />
                </ListContainer>
                <Button
                    marginTop={percentage(0.05, 'h')}
                    handleClickFn={() => {
                        navigation.navigate('Main');
                    }}
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
        </Gradient>
    );
};
