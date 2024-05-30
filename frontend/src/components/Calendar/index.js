import moment from "moment";
import { StyleSheet } from "react-native";
import { StyledCalendarStrip } from "./style";

export const CalendarHome = ({setTrainingDate}) => {


  moment.updateLocale("pt-br", {

    months:
      "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),

    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),

    weekdays:
      "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
        "_"
      ),

    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

    weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
  });
  
  const currentDate = new Date();

  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return(
        <StyledCalendarStrip
      
      onDateSelected={date => setTrainingDate(moment(date).format('YYYY-MM-DD'))}
      calendarAnimation={{ type: "sequence", duration: 30 }}
      daySelectionAnimation={ styles.selectedAnimationStyle }

      // seta esquerda e direita para avançar e voltar(aqui como display none)
      iconLeftStyle={styles.iconsStyle}
      iconRightStyle={styles.iconsStyle}

      
      selectedDate={currentDate}

      startingDate={moment()}

      minDate={startingDate}
      maxDate={endingDate}
      
      //estilização dos itens que não estão selecionados
      calendarHeaderStyle={ styles.calendarHeaderStyle }
      dateNumberStyle={ styles.numberDateStyle }
      dateNameStyle={ styles.nameDateStyle }
      // estilização do item que está selecionado - efeito do item marcado
      highlightDateNameStyle={ styles.selectedDateNameStyle }
      highlightDateNumberStyle={ styles.selectedDateNumberStyle }
      highlightDateContainerStyle={ styles.selectedContainerStyle }

      //tamanho do container
      iconContainer={{ flex: 0.1 }}
      
      //scroll da barra
      scrollable={true}
    />
  );
};

const styles = StyleSheet.create({
  iconsStyle : {
    display : 'none'
  },
  calendarHeaderStyle : {
    fontSize: 20,
    textAlign: "center",
    alignSelf : 'flex-start',
    color : 'white',
    fontFamily: "MontserratAlternates_600SemiBold",
    paddingHorizontal: 16,
  },
  nameDateStyle : {
    color: "#7B787F",
    fontSize: 11,
    textTransform : 'capitalize',
  },
  numberDateStyle : {
    color: "#FF8434",
    fontSize: 16
  },
  selectedDateNameStyle : {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    textTransform : 'capitalize'
  },
  selectedDateNumberStyle : {
    color: "white",
    fontSize: 14
  },
  selectedContainerStyle : {
    backgroundColor: `#FF8434`
  },
})