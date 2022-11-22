import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles";
import CustomizableSubtitle from '../../../components/CustomizableSubTitle'

const data = [
  {
    statsName: "3PT",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "2PT",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "FT",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "REBOUNDS",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "ASSISTS",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "STEALS",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "BLOCKS",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
  {
    statsName: "TO",
    teamAName: "Team A",
    teamAValue: 6,
    teamAName: "Team B",
    teamBValue: 8,
  },
];

const StatisticsLine = ({ teamA, teamB, statsName }) => {
  return (
    <View style={styles.statisticsWrapper}>
      <View style={styles.statsValueWrapper}>
        <Text style={styles.statsValue}>{teamA}</Text>
      </View>
      <View style={styles.statsNameWrapper}>
        <Text style={styles.statsName}>{statsName}</Text>
      </View>
      <View style={styles.statsValueWrapper}>
        <Text style={styles.statsValue}>{teamB}</Text>
      </View>
    </View>
  );
};

const Stats = () => {
  return (
    <View style={styles.container}>
      <CustomizableSubtitle flex={1} subtitle="GAME STATS" backgroundColor={Colors.VARIANTDARKPURPLE} color={Colors.SOLIDWHITECOLOR}/>
      {data.map((stats) => {
        return (
          <StatisticsLine
            teamA={stats.teamAValue}
            teamB={stats.teamBValue}
            statsName={stats.statsName}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statisticsWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  statsValueWrapper: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.DARKGREYCOLOR,
  },
  statsValue: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.SOLIDWHITECOLOR,
  },
  statsNameWrapper: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  statsName: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.SOLIDBLACKCOLOR,
  },
});

export default Stats;
