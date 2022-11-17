import { StyleSheet, View } from "react-native"
import PlayersDevelopmentTable from "../../components/Tables/PlayersDevelopment"

const PlayersDevelopment = () => {
  return(
    <View style={styles.container}>
      <PlayersDevelopmentTable/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default PlayersDevelopment