import React, { useContext, useEffect, useRef, useState } from 'react';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import { ScrollContainer } from '../../components/Container/style';
import StatisticBox from '../Profile/components/StatisticBox';
import StatisticsContainer from '../Profile/components/StatisticsContainer';
import { Title } from '../../components/Title/style';
import { percentage } from '../../utils/percentageFactory';
import ProfileView from '../Profile/components/ProfileView';
import {
    GetProfileHistoriesByUserId,
    GetUserLikesAmount,
    GetUserProfileImage
} from '../../infra/services/userService';
import AuthContext from '../../global/AuthContext';
import ProfileImageContext from '../../global/ProfileImageContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../utils/toastConfiguration';
import ParallaxCarousel from '../../components/ParallaxCarousel';

const ViewSharedProfile = ({ navigation, route }) => {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bodyFat, setBodyFat] = useState(null);
    const [abdominalGirth, setAbdominalGirth] = useState(null);
    const [scapularGirth, setScapularGirth] = useState(null);
    const [hipGirth, setHipGirth] = useState(null);
    const [armGirth, setArmGirth] = useState(null);
    const [legGirth, setLegGirth] = useState(null);

    const [profileHistoriesData, setProfileHistoriesData] = useState();
    const [evolutionPhotosData, setEvolutionPhotosData] = useState(null);

    const [selectedGraphLabels, setSelectedGraphLabels] = useState(null);
    const [selectedGraphInfos, setSelectedGraphInfos] = useState(null);
    const [selectedGraphLegend, setSelectedGraphLegend] = useState('');
    const [selectedGraphData, setSelectedGraphData] = useState(null);

    const [userLikesAmount, setUserLikesAmount] = useState(0);

    const [scrollEnabled, setScrollEnabled] = useState(true);

    const { user, setUser } = useContext(AuthContext);
    const { profileImage, setProfileImage } = useContext(ProfileImageContext);

    const scrollContainerRef = useRef(null);

    const { userId } = route.params;

    function changeGraph(property, legend) {
        if (!profileHistoriesData) {
            return;
        }

        let graphLabels = [];
        let graphInfos = [];

        profileHistoriesData.forEach((profileHistory, index) => {
            const specificData = profileHistory[property];

            if (specificData !== null) {
                graphLabels.push(index);
                graphInfos.push(specificData);
            }
        });

        setSelectedGraphLabels(graphLabels);
        setSelectedGraphInfos(graphInfos);
        setSelectedGraphLegend(legend);
    }

    async function getUserProfileImageData() {
        if (profileImage !== '' && profileImage !== null) return;

        const response = await GetUserProfileImage(userId);

        setProfileImage(response.data);
    }

    async function getUserProfileData() {
        const response = await GetProfileHistoriesByUserId(userId);

        const allProfileHistoryData = response.data;

        if (allProfileHistoryData.length === 0) {
            return;
        }

        setProfileHistoriesData(allProfileHistoryData);

        const currentProfileHistoryData =
            allProfileHistoryData[allProfileHistoryData.length - 1];

        setWeight(currentProfileHistoryData.weight);
        setHeight(currentProfileHistoryData.height);
        setBodyFat(currentProfileHistoryData.bodyFat * 100);
        setAbdominalGirth(currentProfileHistoryData.abdominalGirth);
        setScapularGirth(currentProfileHistoryData.scapularGirth);
        setHipGirth(currentProfileHistoryData.hipGirth);
        setArmGirth(currentProfileHistoryData.armGirth);
        setLegGirth(currentProfileHistoryData.legGirth);
    }

    async function getUserLikesAmount() {
        const response = await GetUserLikesAmount(userId);

        console.log(response);

        if (response.status === 400) {
            return;
        }

        const likesAmount = response.data;

        setUserLikesAmount(likesAmount);
    }

    function getEvolutionPhotosHistoryData() {
        if (!profileHistoriesData) return null;

        const photoURIs = [];

        profileHistoriesData.forEach(profileHistory => {
            if (profileHistory.evolutionPhoto)
                photoURIs.push(profileHistory.evolutionPhoto);
        });

        setEvolutionPhotosData(photoURIs);
    }

    useEffect(() => {
        getUserProfileImageData();
        getUserProfileData();
        getUserLikesAmount();
    }, []);

    useEffect(() => {
        if (
            !selectedGraphLabels ||
            !selectedGraphInfos ||
            selectedGraphLegend === ''
        ) {
            return;
        }

        setSelectedGraphData({
            labels: selectedGraphLabels,
            datasets: [
                {
                    data: selectedGraphInfos,
                    color: () => `rgba(251, 102, 20, 0.8)`,
                    strokeWidth: 2
                }
            ],
            legend: [selectedGraphLegend]
        });
    }, [selectedGraphLabels]);

    useEffect(() => {
        changeGraph('weight', 'Peso (kg)');
        getEvolutionPhotosHistoryData();
    }, [profileHistoriesData]);

    return (
        <>
            <Toast swipeable config={toastConfig} />
            <Gradient>
                <ScrollContainer
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    ref={scrollContainerRef}
                    scrollEnabled={scrollEnabled}
                >
                    <ProfileView
                        userName={user.name}
                        avatarUri={profileImage}
                        likesAmount={userLikesAmount}
                        disableEditButton
                    />

                    <Title
                        fontSize={20}
                        marginTop={percentage(0, 'h')}
                        alignSelf='flex-start'
                        alignLeft={true}
                    >
                        Fotos de Evolução
                    </Title>

                    {evolutionPhotosData ? (
                        <ParallaxCarousel
                            marginTop={percentage(0.03, 'h')}
                            marginBottom={percentage(0.03, 'h')}
                            data={evolutionPhotosData}
                            setBackgroundScrollEnable={setScrollEnabled}
                            editable={false}
                        />
                    ) : (
                        <RegisterProgressingComponent editable={false} />
                    )}

                    {selectedGraphData != null && (
                        <>
                            <Title
                                fontSize={20}
                                marginTop={percentage(0, 'h')}
                                marginBottom={percentage(0.03, 'h')}
                                alignSelf='flex-start'
                                alignLeft={true}
                            >
                                Gráfico
                            </Title>

                            <LineChartComponent data={selectedGraphData} />
                        </>
                    )}

                    <Title
                        fontSize={20}
                        marginTop={
                            selectedGraphData
                                ? percentage(0.07, 'h')
                                : percentage(0.03, 'h')
                        }
                        marginBottom={percentage(0.05, 'h')}
                        alignSelf='flex-start'
                        alignLeft={true}
                    >
                        Atualmente
                    </Title>

                    <StatisticsContainer marginBottom={percentage(0.07, 'h')}>
                        <StatisticBox
                            label='Peso'
                            editable={false}
                            value={weight}
                            unitText='kg'
                            handleClickFn={() => {
                                changeGraph('weight', 'Peso (kg)');
                            }}
                        />
                        <StatisticBox
                            label='Altura'
                            editable={false}
                            value={height}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('height', 'Altura (cm)');
                            }}
                        />
                        <StatisticBox
                            label='BF'
                            editable={false}
                            value={Math.round(bodyFat)}
                            unitText='%'
                            handleClickFn={() => {
                                changeGraph('bodyFat', 'BF (%)');
                            }}
                        />
                        <StatisticBox
                            label='Cintura'
                            editable={false}
                            value={abdominalGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('abdominalGirth', 'Cintura (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Ombros'
                            editable={false}
                            value={scapularGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('scapularGirth', 'Ombros (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Quadril'
                            editable={false}
                            value={hipGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('hipGirth', 'Quadril (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Braço'
                            editable={false}
                            value={armGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('armGirth', 'Braço (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Perna'
                            editable={false}
                            value={legGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('legGirth', 'Perna (cm)');
                            }}
                        />
                    </StatisticsContainer>
                </ScrollContainer>
            </Gradient>
        </>
    );
};

export default ViewSharedProfile;
