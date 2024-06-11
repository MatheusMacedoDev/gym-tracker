import React, { useEffect, useState } from 'react';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import { Container, ScrollContainer } from '../../components/Container/style';
import RegisterProgressingComponent from '../../components/RegisterProgressingComponent';
import StatisticBox from './components/StatisticBox';
import StatisticsContainer from './components/StatisticsContainer';
import { Title } from '../../components/Title/style';
import { percentage } from '../../utils/percentageFactory';
import { Button } from '../../components/Button';
import ProfileView from './components/ProfileView';
import { GetProfileHistoriesByUserId } from '../../infra/services/userService';

const Profile = () => {
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

    const [selectedGraphLabels, setSelectedGraphLabels] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
    const [selectedGraphInfos, setSelectedGraphInfos] = useState([20, 45, 28, 80, 99, 43]);
    const [selectedGraphLegend, setSelectedGraphLegend] = useState('Progresso')
    const [selectedGraphData, setSelectedGraphData] = useState(null);

    function saveProfileHistory() {
        setIsProfileEditing(false);
        setAllowEdit(false);
    }

    function editProfileHistory() {
        setIsProfileEditing(true);
    }

    function logoutProfile() {}

    useEffect(() => {
        async function getUserProfileData() {
            const response = await GetProfileHistoriesByUserId('c603fdc1-003b-410f-b5e5-3663a03e0028');

            const allProfileHistoryData = response.data;

            setProfileHistoriesData(allProfileHistoryData);

            const currentProfileHistoryData = allProfileHistoryData[allProfileHistoryData.length - 1];

            setWeight(currentProfileHistoryData.weight);
            setHeight(currentProfileHistoryData.height);
            setBodyFat(currentProfileHistoryData.bodyFat * 100);
            setAbdominalGirth(currentProfileHistoryData.abdominalGirth);
            setScapularGirth(currentProfileHistoryData.scapularGirth);
            setHipGirth(currentProfileHistoryData.hipGirth);
            setArm(currentProfileHistoryData.armGirth);
            setLeg(currentProfileHistoryData.legGirth);
        }

        getUserProfileData();
    }, [])

    useEffect(() => {
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
                        avatarUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMi61i5ieAks081B7kEedNZtMWFpFjYyc79aQgPVuM7MhAW4gVPtvwYhkTjjHea3lG4E&usqp=CAU'
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
                                let graphLabels = [];
                                let graphInfos = [];

                                profileHistoriesData.forEach((profileHistory, index) => {
                                    graphLabels.push(index);
                                    graphInfos.push(profileHistory.weight);
                                });

                                setSelectedGraphLabels(graphLabels);
                                setSelectedGraphInfos(graphInfos);
                                setSelectedGraphLegend('Peso')
                            }}
                        />
                        <StatisticBox
                            label='Altura'
                            editable={isProfileEditing}
                            value={height}
                            setValue={setHeight}
                            unitText='cm'
                        />
                        <StatisticBox
                            label='BF'
                            editable={isProfileEditing}
                            value={bodyFat}
                            setValue={setBodyFat}
                            unitText='%'
                        />
                        <StatisticBox
                            label='Cintura'
                            editable={isProfileEditing}
                            value={abdominalGirth}
                            setValue={setAbdominalGirth}
                            unitText='cm'
                        />
                        <StatisticBox
                            label='Ombros'
                            editable={isProfileEditing}
                            value={scapularGirth}
                            setValue={setScapularGirth}
                            unitText='cm'
                        />
                        <StatisticBox
                            label='Quadril'
                            editable={isProfileEditing}
                            value={hipGirth}
                            setValue={setHipGirth}
                            unitText='cm'
                        />
                        <StatisticBox
                            label='Braço'
                            editable={isProfileEditing}
                            value={armGirth}
                            setValue={setArmGirth}
                            unitText='cm'
                        />
                        <StatisticBox
                            label='Perna'
                            editable={isProfileEditing}
                            value={legGirth}
                            setValue={setLegGirth}
                            unitText='cm'
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
