import { View, Text } from "react-native"
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle"
import { Alignment } from "../../styles"

const Calendar = () => {
  return(
    <View style={{
      flex: 1,
      ...Alignment.DisplayColumn
    }}>
      <StandardOrangeSubTitle subtitle="Calendar"/>
      <Text>
        CalendarScreen
      </Text>
    </View>
  )
}

export default Calendar