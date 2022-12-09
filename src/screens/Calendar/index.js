import { View, Text, Animated, StyleSheet } from "react-native"
import CustomizableSubTitle from "../../components/CustomizableSubTitle"
import { Colors } from "../../styles"
import Day from "./Day"

const Calendar = () => {
  return(
    <View style={styles.container}>
      <View style={styles.monthTitleWrapper}>
        <CustomizableSubTitle subtitle="MONTH" flex={0.8} color={Colors.SOLIDWHITECOLOR} backgroundColor={Colors.VARIANTDARKPURPLE}/>
      </View>
      <View style={styles.calendarDaysWrapper}>
        <Day/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  monthTitleWrapper: {
    flex: 0.1,
    justifyContent: "center"
  },
  calendarDaysWrapper: {
    flex: 0.9
  }
})

export default Calendar