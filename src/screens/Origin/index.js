import { StyleSheet, View } from "react-native"
import { Colors } from "../../styles"
import StartGameButton from "./StartGameButton"
import TeamChoice from "./TeamChoice"

const Origin = () => {
  return(
    <View style={styles.container}>
      <View style={styles.heroWrapper}></View>
      <View style={styles.teamChoiceWrapper}>
        <TeamChoice/>
      </View>
      <View style={styles.teamImageWrapper}></View>
      <View style={styles.startGameButton}></View>
      <View style={styles.footerWrapper}></View>
      <StartGameButton/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heroWrapper: {
    flex: 2,
    backgroundColor: Colors.DARKGREYCOLOR
  },
  teamImageWrapper: {
    flex: 3.5,
    backgroundColor: Colors.DARKGREYCOLOR
  },
  teamChoiceWrapper: {
    flex: 2.5,
  },
  startGameButton: {
    flex: 1,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  footerWrapper: {
    flex: 1,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  }
})

export default Origin