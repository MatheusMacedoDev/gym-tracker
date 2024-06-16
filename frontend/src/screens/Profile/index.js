import React, { useContext, useEffect, useRef, useState } from 'react';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import { ScrollContainer } from '../../components/Container/style';
import StatisticBox from './components/StatisticBox';
import StatisticsContainer from './components/StatisticsContainer';
import { Title } from '../../components/Title/style';
import { percentage } from '../../utils/percentageFactory';
import { Button } from '../../components/Button';
import ProfileView from './components/ProfileView';
import {
    CreateProfileHistory,
    GetProfileHistoriesByUserId,
    GetUserLikesAmount,
    GetUserProfileImage,
    UpdateProfileImage
} from '../../infra/services/userService';
import AuthContext from '../../global/AuthContext';
import ProfileImageContext from '../../global/ProfileImageContext';
import { ConfirmEditModal } from '../../components/ConfirmEditModal';
import Toast from 'react-native-toast-message';
import {
    callCancelEditProfileStartsToast,
    callEditProfileStartsToast,
    callNetworkErrorOccuredToast,
    callPhotoRegisteredToast,
    callProfilePhotoUpdatedToast,
    callProfileUpdatedToast,
    toastConfig
} from '../../utils/toastConfiguration';
import { removeUserToken } from '../../utils/tokenHandler';
import ParallaxCarousel from '../../components/ParallaxCarousel';

const Profile = ({ navigation }) => {
    const [showConfirmEditModal, setShowConfirmEditModal] = useState(false);

    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bodyFat, setBodyFat] = useState(null);
    const [abdominalGirth, setAbdominalGirth] = useState(null);
    const [scapularGirth, setScapularGirth] = useState(null);
    const [hipGirth, setHipGirth] = useState(null);
    const [armGirth, setArmGirth] = useState(null);
    const [legGirth, setLegGirth] = useState(null);
    const [evolutionPhotoUri, setEvolutionPhotoUri] = useState('');

    const [allowEdit, setAllowEdit] = useState(true);
    const [isProfileEditing, setIsProfileEditing] = useState(false);

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

    async function saveProfileHistory() {
        setIsProfileEditing(false);
        setAllowEdit(false);

        const response = await CreateProfileHistory(
            user.userId,
            weight != '0' ? weight : null,
            height != '0' ? height : null,
            abdominalGirth != '0' ? abdominalGirth : null,
            scapularGirth != '0' ? scapularGirth : null,
            hipGirth != '0' ? hipGirth : null,
            armGirth != '0' ? armGirth : null,
            legGirth != '0' ? legGirth : null,
            bodyFat !== null && bodyFat != '0' ? bodyFat / 100 : null,
            evolutionPhotoUri !== '' ? evolutionPhotoUri : null
        );

        if (response.status === 201) {
            callProfileUpdatedToast();
        } else {
            callNetworkErrorOccuredToast();
            setIsProfileEditing(true);
            setAllowEdit(true);
            return;
        }

        const newProfileHistoryData = response.data;

        setWeight(newProfileHistoryData.weight);
        setHeight(newProfileHistoryData.height);

        if (newProfileHistoryData.bodyFat) {
            setBodyFat(parseFloat(newProfileHistoryData.bodyFat) * 100);
        }

        setAbdominalGirth(newProfileHistoryData.abdominalGirth);
        setScapularGirth(newProfileHistoryData.scapularGirth);
        setHipGirth(newProfileHistoryData.hipGirth);
        setArmGirth(newProfileHistoryData.armGirth);
        setLegGirth(newProfileHistoryData.legGirth);

        setProfileHistoriesData([
            ...profileHistoriesData,
            newProfileHistoryData
        ]);
    }

    function scrollToStatistics() {
        scrollContainerRef.current.scrollTo({
            y: selectedGraphData ? 440 : 90,
            animated: true
        });
    }

    function editProfileHistory() {
        setIsProfileEditing(true);
        scrollToStatistics();
        callEditProfileStartsToast();
    }

    function cancelEditProfileHistory() {
        setIsProfileEditing(false);
        scrollToStatistics();
        callCancelEditProfileStartsToast();
    }

    async function saveNewProfileImage(photoUri) {
        if (!photoUri || photoUri.trim() === '') {
            return;
        }

        callPhotoRegisteredToast();

        const response = await UpdateProfileImage(user.userId, photoUri);

        if (response.status === 200) {
            setProfileImage(response.data.profileImageUri);
            callProfilePhotoUpdatedToast();
        } else {
            callNetworkErrorOccuredToast();
        }
    }

    function registerEvolutionPhoto(photoUri) {
        if (!photoUri || photoUri.trim() === '') {
            return;
        }

        setEvolutionPhotoUri(photoUri);

        callPhotoRegisteredToast();
    }

    function logoutProfile() {
        setUser(null);
        removeUserToken();
        navigation.replace('LoginScreen');
    }

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

        const response = await GetUserProfileImage(user.userId);

        setProfileImage(response.data);
    }

    async function getUserProfileData() {
        const response = await GetProfileHistoriesByUserId(user.userId);

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
        const response = await GetUserLikesAmount(user.userId);

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
                <ConfirmEditModal
                    visible={showConfirmEditModal}
                    setVisible={setShowConfirmEditModal}
                    statisticsData={{
                        weight,
                        height,
                        abdominalGirth,
                        scapularGirth,
                        hipGirth,
                        legGirth,
                        armGirth,
                        bodyFat
                    }}
                    afterConfirmationActionFn={saveProfileHistory}
                />
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
                        handleEditClick={() => {
                            navigation.navigate('Camera', {
                                handlePhoto: saveNewProfileImage
                            });
                        }}
                    />

                    {selectedGraphData != null && (
                        <>
                            <Title
                                fontSize={20}
                                marginTop={percentage(0, 'h')}
                                marginBottom={percentage(0.05, 'h')}
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

                    <StatisticsContainer>
                        <StatisticBox
                            label='Peso'
                            editable={isProfileEditing}
                            value={weight}
                            setValue={setWeight}
                            unitText='kg'
                            handleClickFn={() => {
                                changeGraph('weight', 'Peso (kg)');
                            }}
                        />
                        <StatisticBox
                            label='Altura'
                            editable={isProfileEditing}
                            value={height}
                            setValue={setHeight}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('height', 'Altura (cm)');
                            }}
                        />
                        <StatisticBox
                            label='BF'
                            editable={isProfileEditing}
                            value={Math.round(bodyFat)}
                            setValue={setBodyFat}
                            unitText='%'
                            handleClickFn={() => {
                                changeGraph('bodyFat', 'BF (%)');
                            }}
                        />
                        <StatisticBox
                            label='Cintura'
                            editable={isProfileEditing}
                            value={abdominalGirth}
                            setValue={setAbdominalGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('abdominalGirth', 'Cintura (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Ombros'
                            editable={isProfileEditing}
                            value={scapularGirth}
                            setValue={setScapularGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('scapularGirth', 'Ombros (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Quadril'
                            editable={isProfileEditing}
                            value={hipGirth}
                            setValue={setHipGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('hipGirth', 'Quadril (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Braço'
                            editable={isProfileEditing}
                            value={armGirth}
                            setValue={setArmGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('armGirth', 'Braço (cm)');
                            }}
                        />
                        <StatisticBox
                            label='Perna'
                            editable={isProfileEditing}
                            value={legGirth}
                            setValue={setLegGirth}
                            unitText='cm'
                            handleClickFn={() => {
                                changeGraph('legGirth', 'Perna (cm)');
                            }}
                        />
                    </StatisticsContainer>

                    <Title
                        fontSize={20}
                        marginTop={percentage(0.07, 'h')}
                        alignSelf='flex-start'
                        alignLeft={true}
                    >
                        Fotos de Evolução
                    </Title>

                    {evolutionPhotosData ? (
                        <ParallaxCarousel
                            marginTop={percentage(0.06, 'h')}
                            marginBottom={percentage(0.02, 'h')}
                            data={evolutionPhotosData}
                            setBackgroundScrollEnable={setScrollEnabled}
                            editable={isProfileEditing}
                            handleAddClickFn={() =>
                                navigation.navigate('Camera', {
                                    handlePhoto: registerEvolutionPhoto
                                })
                            }
                        />
                    ) : (
                        <RegisterProgressingComponent
                            handleClickFn={() =>
                                navigation.navigate('Camera', {
                                    handlePhoto: registerEvolutionPhoto
                                })
                            }
                            editable={isProfileEditing}
                        />
                    )}

                    {allowEdit &&
                        (isProfileEditing ? (
                            <Button
                                title='Salvar'
                                marginTop={percentage(0.05, 'h')}
                                handleClickFn={() =>
                                    setShowConfirmEditModal(true)
                                }
                            />
                        ) : (
                            <Button
                                title='Atualizar'
                                marginTop={percentage(0.05, 'h')}
                                handleClickFn={editProfileHistory}
                            />
                        ))}
                    {isProfileEditing ? (
                        <Button
                            title='Cancelar'
                            marginTop={percentage(0.03, 'h')}
                            marginBottom={percentage(0.04, 'h')}
                            handleClickFn={cancelEditProfileHistory}
                            hiddenButton={true}
                        />
                    ) : (
                        <Button
                            title='Sair'
                            marginTop={percentage(0.03, 'h')}
                            marginBottom={percentage(0.04, 'h')}
                            handleClickFn={logoutProfile}
                            hiddenButton={true}
                        />
                    )}
                </ScrollContainer>
            </Gradient>
        </>
    );
};

export default Profile;
