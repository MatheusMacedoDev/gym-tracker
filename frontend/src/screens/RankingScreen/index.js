import Gradient from '../../components/Gradient';
import { Logo } from '../../components/Logo';
import { ScrollContainer } from '../../components/ScrollContainer';
import { Title } from '../../components/Title/style';
import { RankingTitle } from './Style/RankingTitle';
import { ListContainer } from '../../components/ListContainer/style';
import { ListComponent } from '../../components/List/style';
import RankingCard from '../../components/RankingCard';
import { percentage } from '../../utils/percentageFactory';
import { limitCharacters } from '../../utils/stringHandler';
import { useEffect, useState } from 'react';
import {
    getRankUsersByLatestUpdate,
    getRankUsersByLikes
} from '../../infra/services/rankUsersService';
import {
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';
import Toast from 'react-native-toast-message';

export const RankingScreen = ({ navigation }) => {
    const [usersByLikes, setUsersByLikes] = useState();
    const [usersLatestUpdate, setUsersLatestUpdate] = useState();

    useEffect(() => {
        getRankUsersLikes();
        getRankUsersUpdateLatest();
    }, []);

    async function getRankUsersLikes() {
        const response = await getRankUsersByLikes();

        if (response.status === 200) {
            setUsersByLikes(response.data);
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    async function getRankUsersUpdateLatest() {
        const response = await getRankUsersByLatestUpdate();

        if (response.status === 200) {
            setUsersLatestUpdate(response.data);
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    return (
        <>
            <Toast config={toastConfig} />
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
                    <ListContainer maxHeightContainer={'30%'}>
                        <ListComponent
                            nestedScrollEnabled={true}
                            contentContainerStyle={{
                                gap: 18
                            }}
                            data={usersByLikes}
                            renderItem={({ item, index }) => (
                                <RankingCard
                                    name={limitCharacters(item.userName, 14)}
                                    likes={item.likes}
                                    sequentialNumber={index + 1}
                                    profilePhoto={item.profilePhoto}
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
                    <ListContainer maxHeightContainer={'30%'}>
                        <ListComponent
                            nestedScrollEnabled={true}
                            contentContainerStyle={{
                                gap: 18
                            }}
                            data={usersLatestUpdate}
                            renderItem={({ item, index }) => (
                                <RankingCard
                                    userId={item.userId}
                                    name={limitCharacters(item.userName, 14)}
                                    likes={item.likes}
                                    sequentialNumber={index + 1}
                                    profilePhoto={item.profilePhoto}
                                    navigation={navigation}
                                />
                            )}
                        />
                    </ListContainer>
                </ScrollContainer>
            </Gradient>
        </>
    );
};
