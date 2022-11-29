import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles";

const GameTime = () => {
  return (
    <View style={styles.timeSectionWrapper}>
      <View style={styles.gameTimeTextWrapperTop}>
        <Text style={styles.gameTimeText}>Q1</Text>
      </View>
      <View style={styles.gameTimeTextWrapperBottom}>
        <Text style={styles.gameTimeText}>12: 00</Text>
      </View>
    </View>
  );
};

const ScoreSection = () => {
  return (
    <View style={styles.scoreSectionWrapper}>
      <View style={styles.teamNameTextWrapper}>
        <Text style={styles.teamNameText}>TEAM A</Text>
      </View>
      <View style={styles.scoreTextWrapper}>
        <Text style={styles.scoreText}>125</Text>
      </View>
    </View>
  );
};

const ScoreBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreboardWrapper}>
        <ScoreSection />
        <GameTime />
        <ScoreSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreboardWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  scoreSectionWrapper: {
    flex: 3.5,
    flexDirection: "column",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  timeSectionWrapper: {
    flex: 3,
  },
  gameTimeTextWrapperTop: {
    flex: 0.5,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gameTimeTextWrapperBottom: {
    flex: 0.5,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gameTimeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  teamNameTextWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  teamNameText: {
    fontSize: 28,
    color: Colors.VARIANTDARKPURPLE,
  },
  scoreTextWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default ScoreBoard;
