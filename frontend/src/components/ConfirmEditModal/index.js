import { Modal } from 'react-native';
import { ContentModal } from './Container/style';
import Gradient from '../Gradient';
import { Logo } from '../Logo';
import { Title } from '../Title/style';
import { CommandText } from '../CommandText/style';
import { colors } from '../../colors.config';
import { LinkCommandText } from '../../screens/LoginScreen/components/linkCommandText';
import { Button } from '../Button';
import { percentage } from '../../utils/percentageFactory';
import ModalBackground from '../ModalBackground/ModaBackground';
import StatisticsContainer from '../../screens/Profile/components/StatisticsContainer';
import StatisticBox from '../../screens/Profile/components/StatisticBox';

export const ConfirmEditModal = ({
    visible,
    setVisible,
    statisticsData,
    afterConfirmationActionFn = null,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType='fade'
        >
            <ModalBackground>
                <ContentModal>
                    <Gradient roundedBorders={true}>
                        <Logo
                            widthLogo={'78px'}
                            heightLogo={'39px'}
                            marginTop={percentage(0.08, 'h')}
                        />
                        <Title fontSize='18' marginTop={percentage(0.04, 'h')}>
                            Você confirma seus dados?
                        </Title>
                        <CommandText
                            fontSize={'14px'}
                            textAlign={'center'}
                            marginTop={percentage(0.03, 'h')}
                        >
                            Após a confirmação você somente poderá alterar
                            novamente os seus dados{' '}
                        </CommandText>
                        <CommandText
                            fontSize={'14px'}
                            colorText={colors.orange}
                            textAlign={'center'}
                            marginBottom={percentage(0.07, 'h')}
                        >
                            daqui uma semana.
                        </CommandText>
                        <StatisticsContainer
                            style={{
                                width: '85%',
                                marginHorizontal: 'auto'
                            }}
                        >
                            <StatisticBox
                                label='Peso'
                                editable={false}
                                value={statisticsData.weight}
                                unitText='kg'
                            />
                            <StatisticBox
                                label='Altura'
                                editable={false}
                                value={statisticsData.height}
                                unitText='cm'
                            />
                            <StatisticBox
                                label='BF'
                                editable={false}
                                value={Math.round(statisticsData.bodyFat)}
                                unitText='%'
                            />
                            <StatisticBox
                                label='Cintura'
                                editable={false}
                                value={statisticsData.abdominalGirth}
                                unitText='cm'
                            />
                            <StatisticBox
                                label='Ombros'
                                editable={false}
                                value={statisticsData.scapularGirth}
                                unitText='cm'
                            />
                            <StatisticBox
                                label='Quadril'
                                editable={false}
                                value={statisticsData.hipGirth}
                                unitText='cm'
                            />
                            <StatisticBox
                                label='Braço'
                                editable={false}
                                value={statisticsData.armGirth}
                                unitText='cm'
                            />
                            <StatisticBox
                                label='Perna'
                                editable={false}
                                value={statisticsData.legGirth}
                                unitText='cm'
                            />
                        </StatisticsContainer>

                        <Button
                            title={'Eu tenho certeza!'}
                            widthButton='85%'
                            heightButton='64px'
                            alignCenter={true}
                            marginTop={percentage(0.07, 'h')}
                            marginBottom={percentage(0.03, 'h')}
                            handleClickFn={() => {
                                afterConfirmationActionFn();
                                setVisible(false);
                            }}
                        />
                        <LinkCommandText
                            onPress={() => setVisible(false)}
                            colorText={colors.orange}
                            textAlign='center'
                        >
                            Não tenho certeza
                        </LinkCommandText>
                    </Gradient>
                </ContentModal>
            </ModalBackground>
        </Modal>
    );
};
