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
    flex: 1,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  heroWrapper: {
    flex: 0.2,
    backgroundColor: Colors.DARKGREYCOLOR
  },
  teamImageWrapper: {
    flex: 0.35,
    margin: 8,
    backgroundColor: Colors.DARKGREYCOLOR
  },
  teamChoiceWrapper: {
    flex: 0.25,
  },
  startGameButton: {
    flex: 0.1,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  footerWrapper: {
    flex: 0.1,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  }
})

export default Origin