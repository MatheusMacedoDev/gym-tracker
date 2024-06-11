import React, { useEffect, useState } from 'react';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import { Container, ScrollContainer } from '../../components/Container/style';
import StatisticBox from './components/StatisticBox';
import StatisticsContainer from './components/StatisticsContainer';
import { Title } from '../../components/Title/style';
import { percentage } from '../../utils/percentageFactory';
import { Button } from '../../components/Button';
import ProfileView from './components/ProfileView';
import {
    GetProfileHistoriesByUserId,
    GetUserProfileImage
} from '../../infra/services/userService';

const Profile = () => {
    const [profileImage, setProfileImage] = useState('');

    const [weight, setWeight] = useState('0');
    const [height, setHeight] = useState('0');
    const [bodyFat, setBodyFat] = useState('0');
    const [abdominalGirth, setAbdominalGirth] = useState('0');
    const [scapularGirth, setScapularGirth] = useState('0');
    const [hipGirth, setHipGirth] = useState('0');
    const [armGirth, setArmGirth] = useState('0');
    const [legGirth, setLegGirth] = useState('0');

    const [allowEdit, setAllowEdit] = useState(true);
    const [isProfileEditing, setIsProfileEditing] = useState(false);

    const [profileHistoriesData, setProfileHistoriesData] = useState();

    const [selectedGraphLabels, setSelectedGraphLabels] = useState(null);
    const [selectedGraphInfos, setSelectedGraphInfos] = useState(null);
    const [selectedGraphLegend, setSelectedGraphLegend] = useState('');
    const [selectedGraphData, setSelectedGraphData] = useState(null);

    function saveProfileHistory() {
        setIsProfileEditing(false);
        setAllowEdit(false);
    }

    function editProfileHistory() {
        setIsProfileEditing(true);
    }

    function logoutProfile() {}

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

    useEffect(() => {
        async function getUserProfileImageData() {
            const response = await GetUserProfileImage(
                'f0678abe-0f99-4be8-bf8b-ea028c811d90'
            );

            console.log(response.data);
            setProfileImage(response.data);
        }

        async function getUserProfileData() {
            const response = await GetProfileHistoriesByUserId(
                'f0678abe-0f99-4be8-bf8b-ea028c811d90'
            );

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

        getUserProfileImageData();
        getUserProfileData();
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
                    color: (opacity = 1) => `rgba(251, 102, 20, 0.8)`,
                    strokeWidth: 2
                }
            ],
            legend: [selectedGraphLegend]
        });
    }, [selectedGraphLabels]);

    useEffect(() => {
        changeGraph('weight', 'Peso (kg)');
    }, [profileHistoriesData]);

    return (
        <Gradient>
            <Container>
                <ScrollContainer
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                >
                    <ProfileView
                        userName='João Oliveira'
                        avatarUri={profileImage}
                        likesAmount='1,2k'
                    />

                    {selectedGraphData != null && (
                        <>
                            <Title
                                fontSize={20}
                                marginTop={percentage(0.03, 'h')}
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
                        marginTop={percentage(0.07, 'h')}
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
                            value={bodyFat}
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
                        Fotos
                    </Title>

                    <RegisterProgressingComponent
                        handleClickFn={() => navigation.navigate('Camera')}
                    />

                    {allowEdit && isProfileEditing ? (
                        <Button
                            title='Salvar'
                            marginTop={percentage(0.05, 'h')}
                            handleClickFn={saveProfileHistory}
                        />
                    ) : (
                        <Button
                            title='Atualizar'
                            marginTop={percentage(0.05, 'h')}
                            handleClickFn={editProfileHistory}
                        />
                    )}
                    <Button
                        title='Sair'
                        marginTop={percentage(0.03, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                        handleClickFn={logoutProfile}
                        hiddenButton={true}
                    />
                </ScrollContainer>
            </Container>
        </Gradient>
    );
};

export default Profile;
