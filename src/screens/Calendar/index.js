import { View, Text } from "react-native"
import SubTitle from "../../components/SubTitle"

const Calendar = () => {
  return(
    <View style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
      }}>
      <SubTitle subtitle="Calendar"/>
      <Text>
        CalendarScreen
      </Text>
    </View>
  )
}

export default Calendar