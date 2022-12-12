import { ScrollView, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Card, Divider } from "react-native-paper";
import { calendargames } from "../../../data/calendarData";
import { Alignment, Colors, Typography } from "../../../styles";

const TeamCard = ({ teamName }) => {
  return (
    <Card style={styles.cardWrapper}>
      <Card.Cover
        style={styles.cardImage}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Divider style={styles.divider} />
      <Card.Actions style={styles.cardAction}>
        <TouchableOpacity>{teamName}</TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const IndividualScoreBoard = ({ teamAScore, teamBScore }) => {
  return (
    <View style={styles.individualScoreboardWrapper}>
      <View style={styles.individualScoreboardScoreWrapper}>
        <Text style={styles.individualScoreboardScoreText}>{teamAScore}</Text>
        <Text style={styles.individualScoreboardScoreText}>{teamBScore}</Text>
      </View>
    </View>
  );
};

const ScoreBoardAllGames = () => {
  return (
    <View style={styles.scoreboardContainer}>
      {calendargames.map((team) => {
        return (
          <View style={styles.scoreboardWrapper}>
            <View style={styles.teamSectionWrapper}>
              <TeamCard teamName={team.teamAName}/>
            </View>
            <View style={styles.individualScoreboardContainer}>
              <IndividualScoreBoard teamAScore={team.teamAScore} teamBScore={team.teamBScore}/>
            </View>
            <View style={styles.teamSectionWrapper}>
              <TeamCard teamName={team.teamBName}/>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const DetailedDay = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    >
      <ScoreBoardAllGames/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Alignment.DisplayColumn,
  },
  contentContainerStyle: {
    height: "150%",
  },
  scoreboardContainer: {
    flex: 1,
    ...Alignment.DisplayColumn,
    marginBottom: 1,
  },
  scoreboardWrapper: {
    flex: 1,
    ...Alignment.DisplayRow,
  },
  teamSectionWrapper: {
    flex: 3,
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.DARKGREYCOLOR,
  },
  teamSection: {
    flex: 1,
  },
  individualScoreboardContainer: {
    flex: 4,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  individualScoreboardWrapper: {
    flex: 1,
  },
  individualScoreboardScoreWrapper: {
    flex: 1,
    ...Alignment.RowCenter,
  },
  individualScoreboardScoreText: {
    flex: 0.5,
    textAlign: "center",
    color: Colors.VARIANTDARKPURPLE,
    ...Typography.BiggestFontBold,
  },
  individualScoreboardAdditionalTextWrapper: {
    flex: 0.6,
    ...Alignment.RowCenter,
  },
  individualScoreboardAdditionalText: {
    flex: 1,
    textAlign: "center",
    color: Colors.SOLIDBLACKCOLOR,
    ...Typography.SmallFontBold,
  },
  cardWrapper: {
    flex: 1,
    borderRadius: 0,
  },
  cardImage: {
    flex: 0.9,
  },
  cardAction: {
    flex: 0.1,
    ...Alignment.ColumnCenter,
    ...Typography.SmallestFontBold,
    color: Colors.SOLIDBLACKCOLOR,
    borderRadius: 0,
  },
  divider: {
    backgroundColor: Colors.VARIANTDARKPURPLE,
  },
});

export default DetailedDay;
