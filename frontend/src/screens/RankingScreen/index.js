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
import { useEffect, useState, useCallback } from 'react';
import {
    getRankUsersByLatestUpdate,
    getRankUsersByLikes
} from '../../infra/services/rankUsersService';
import {
    callNetworkErrorOccuredToast,
    toastConfig
} from '../../utils/toastConfiguration';
import Toast from 'react-native-toast-message';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

export const RankingScreen = ({ navigation }) => {
    const [usersByLikes, setUsersByLikes] = useState();
    const [usersLatestUpdate, setUsersLatestUpdate] = useState();
    const [loadingLikes, setLoadingLikes] = useState(true);
    const [loadingLatestUpdate, setLoadingLatestUpdate] = useState(true);

    useFocusEffect(
        useCallback(() => {
            getRankUsersLikes();
            getRankUsersUpdateLatest();
        }, [])
    );

    async function getRankUsersLikes() {
        try {
            const response = await getRankUsersByLikes();
            setUsersByLikes(response.data);
        } catch (error) {
            console.error('Error fetching users by likes:', error);
        } finally {
            setLoadingLikes(false);
        }
    }

    async function getRankUsersUpdateLatest() {
        try {
            const response = await getRankUsersByLatestUpdate();
            setUsersLatestUpdate(response.data);
        } catch (error) {
            console.error('Error fetching users by latest update:', error);
        } finally {
            setLoadingLatestUpdate(false);
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
                    nestedScrollEnabled={true}
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
                        {loadingLikes ? (
                            <ActivityIndicator size='large' color='#FF8434' />
                        ) : (
                            <ListComponent
                                nestedScrollEnabled={true}
                                contentContainerStyle={{
                                    gap: 18
                                }}
                                data={usersByLikes}
                                renderItem={({ item, index }) => (
                                    <RankingCard
                                        userId={item.userId}
                                        name={limitCharacters(
                                            item.userName,
                                            14
                                        )}
                                        likes={item.likes}
                                        sequentialNumber={index + 1}
                                        profilePhoto={item.profilePhoto}
                                        navigation={navigation}
                                    />
                                )}
                            />
                        )}
                    </ListContainer>
                    <RankingTitle
                        marginTop={percentage(0.05, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                    >
                        Mais recentes
                    </RankingTitle>
                    <ListContainer maxHeightContainer={'30%'}>
                        {loadingLatestUpdate ? (
                            <ActivityIndicator size='large' color='#FF8434' />
                        ) : (
                            <ListComponent
                                nestedScrollEnabled={true}
                                contentContainerStyle={{
                                    gap: 18
                                }}
                                data={usersLatestUpdate}
                                renderItem={({ item, index }) => (
                                    <RankingCard
                                        userId={item.userId}
                                        name={limitCharacters(
                                            item.userName,
                                            14
                                        )}
                                        likes={item.likes}
                                        sequentialNumber={index + 1}
                                        profilePhoto={item.profilePhoto}
                                        navigation={navigation}
                                    />
                                )}
                            />
                        )}
                    </ListContainer>
                </ScrollContainer>
            </Gradient>
        </>
    );
};
