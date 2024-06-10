import Gradient from '../../components/Gradient';
import { Logo } from '../../components/Logo';
import { ScrollContainer } from '../../components/ScrollContainer';
import { Title } from '../../components/Title/style';
import { RankingTitle } from './Style/RankingTitle';
import { ListContainer } from '../../components/ListContainer/style';
import { ListComponent } from '../../components/List/style';
import RankingCard from '../../components/RankingCard';
import { percentage } from '../../utils/percentageFactory';

const usuarios = [
    { id: 1, nome: 'Rubens Moura', curtidas: '2,9' },
    { id: 2, nome: 'Matheus Macedo', curtidas: '2,5' },
    { id: 4, nome: 'Joao Oliveira', curtidas: '1,4' },
    { id: 5, nome: 'Gabriela Ramos', curtidas: '1,1' },
    { id: 6, nome: 'Eduardo Pasqualetti', curtidas: '1,1' },
    { id: 7, nome: 'Eduardo Pasqualetti', curtidas: '1,1' }
];

export const RankingScreen = () => {
    return (
        <Gradient>
            <ScrollContainer
                contentContainerStyle={{
                    maxHeight: 1200
                }}
            >
                <Logo
                    widthLogo={105}
                    heightLogo={50}
                    marginTop={percentage(0.1, 'h')}
                />
                <Title marginTop={percentage(0.03, 'h')}>Inspiração</Title>
                <RankingTitle
                    marginTop={percentage(0.05, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Mais curtidas
                </RankingTitle>
                <ListContainer heightContainer={'30%'}>
                    <ListComponent
                        nestedScrollEnabled={true}
                        contentContainerStyle={{
                            gap: 18
                        }}
                        data={usuarios}
                        renderItem={({ item, index }) => (
                            <RankingCard
                                name={item.nome}
                                likes={item.curtidas}
                                sequentialNumber={index + 1}
                            />
                        )}
                    />
                </ListContainer>
                <RankingTitle
                    marginTop={percentage(0.05, 'h')}
                    marginBottom={percentage(0.05, 'h')}
                >
                    Mais recentes
                </RankingTitle>
                <ListContainer heightContainer={'30%'}>
                    <ListComponent
                        nestedScrollEnabled={true}
                        contentContainerStyle={{
                            gap: 18
                        }}
                        data={usuarios}
                        renderItem={({ item, index }) => (
                            <RankingCard
                                name={item.nome}
                                likes={item.curtidas}
                                sequentialNumber={index + 1}
                            />
                        )}
                    />
                </ListContainer>
            </ScrollContainer>
        </Gradient>
    );
};
