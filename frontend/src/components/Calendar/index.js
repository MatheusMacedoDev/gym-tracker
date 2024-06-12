import moment from 'moment';
import { StyleSheet } from 'react-native';
import { StyledCalendarStrip } from './style';

export const CalendarHome = ({ setTrainingDate }) => {
    moment.updateLocale('pt-br', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
        ),

        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split(
            '_'
        ),

        weekdays:
            'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split(
                '_'
            ),

        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),

        weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_')
    });

    const currentDate = new Date();

    const startingDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );

    const endingDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );
    return (
        <StyledCalendarStrip
            onDateSelected={date =>
                setTrainingDate(moment(date).format('YYYY-MM-DD'))
            }
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={styles.selectedAnimationStyle}
            // seta esquerda e direita para avançar e voltar(aqui como display none)
            iconLeftStyle={styles.iconsStyle}
            iconRightStyle={styles.iconsStyle}
            selectedDate={currentDate}
            startingDate={moment()}
            minDate={startingDate}
            maxDate={endingDate}
            innerStyle={styles.container}
            calendarHeaderStyle={styles.calendarHeaderStyle}
            dateNumberStyle={styles.numberDateStyle}
            dateNameStyle={styles.nameDateStyle}
            dayContainerStyle={styles.dayContainerStyle}
            dateContainerStyle={styles.datesContainer}
            highlightDateNameStyle={styles.selectedDateNameStyle}
            highlightDateNumberStyle={styles.selectedDateNumberStyle}
            highlightDateContainerStyle={styles.selectedContainerStyle}
            iconContainer={{ flex: 0.1 }}
            scrollable={true}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 34,
        display: 'flex'
    },
    datesContainer: {},
    iconsStyle: {
        display: 'none'
    },
    selectedDateNameStyle: {
        display: `none`
    },
    nameDateStyle: {
        display: `none`
    },
    calendarHeaderStyle: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: 'white',
        fontFamily: 'MontserratAlternates_600SemiBold',
        marginLeft: '9%'
    },
    numberDateStyle: {
        color: '#FF8434',
        fontSize: 14
    },
    dayContainerStyle: {
        borderColor: '#FF8434',
        borderWidth: 1,
        borderRadius: 30,
        width: 42,
        height: 42
    },
    selectedDateNumberStyle: {
        color: 'white',
        fontSize: 17
    },
    selectedContainerStyle: {
        backgroundColor: `#FF8434`
    }
});
