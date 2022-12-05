import { StyleSheet, TouchableOpacity, View } from "react-native"
import PickerComponent from "../../../components/Picker"
import StandardOrangeSubTitle from "../../../components/StandardOrangeSubTitle"

const TeamChoice = () => {
  return(
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
      <StandardOrangeSubTitle subtitle="CHOOSE A TEAM"/>
      <PickerComponent flex={1} margin={8} width={100}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8 
  },
  innerWrapper: {
    flex: 0.6
  }
})

export default TeamChoice