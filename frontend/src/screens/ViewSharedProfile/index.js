import React, { useState } from 'react';
import Gradient from '../../components/Gradient';
import LineChartComponent from '../../components/Grafic';
import { Container, ScrollContainer } from '../../components/Container/style';
import RegisterProgressingComponent from '../../components/RegisterProgressingComponent';
import { Title } from '../../components/Title/style';
import { percentage } from '../../utils/percentageFactory';
import { Button } from '../../components/Button';
import StatisticsContainer from '../Profile/components/StatisticsContainer';
import StatisticBox from '../Profile/components/StatisticBox';
import ProfileView from '../Profile/components/ProfileView';
import Carousel from '../../components/Carousel';

const SharedProfile = () => {
    const [weight, setWeight] = useState('78');
    const [height, setheight] = useState('178');
    const [bodyFat, setBodyFat] = useState('14');
    const [abdominalGirth, setAbdominalGirth] = useState('80');
    const [scapularGirth, setScapularGirth] = useState('110');
    const [hipGirth, setHipGirth] = useState('90');
    const [armGirth, setArmGirth] = useState('38');
    const [legGirth, setLegGirth] = useState('75');

    const [allowEdit, setAllowEdit] = useState(true);
    const [isProfileEditing, setIsProfileEditing] = useState(false);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(251, 102, 20, 0.8)`,
                strokeWidth: 2
            }
        ],
        legend: ['Progresso']
    };

    function saveProfileHistory() {
        setIsProfileEditing(false);
        setAllowEdit(false);
    }

    function editProfileHistory() {
        setIsProfileEditing(true);
    }

    function logoutProfile() {}

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

                    <Title
                        fontSize={20}
                        marginTop={percentage(0.03, 'h')}
                        marginBottom={percentage(0.05, 'h')}
                        alignSelf='flex-start'
                        alignLeft={true}
                    >
                        Gráfico
                    </Title>

                    <LineChartComponent data={data} />

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
                        />
                        <StatisticBox
                            label='Altura'
                            editable={isProfileEditing}
                            value={height}
                            setValue={setheight}
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

export default SharedProfile;
