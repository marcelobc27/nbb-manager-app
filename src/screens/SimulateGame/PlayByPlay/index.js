import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { Colors } from "../../../styles/index";

const mockdata = [
  {
    quarter: "First",
    plays: [
      {
        playName: "Shot",
        score: "+2",
      },
      {
        playName: "Jumpshot",
        score: "+2",
      },
      {
        playName: "Layup",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
    ],
  },
  {
    quarter: "Second",
    plays: [
      {
        playName: "Shot",
        score: "+2",
      },
      {
        playName: "Jumpshot",
        score: "+2",
      },
      {
        playName: "Layup",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
    ],
  },
  {
    quarter: "Third",
    plays: [
      {
        playName: "Shot",
        score: "+2",
      },
      {
        playName: "Jumpshot",
        score: "+2",
      },
      {
        playName: "Layup",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
    ],
  },
  {
    quarter: "Fourth",
    plays: [
      {
        playName: "Shot",
        score: "+2",
      },
      {
        playName: "Jumpshot",
        score: "+2",
      },
      {
        playName: "Layup",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
      {
        playName: "3 point",
        score: "+2",
      },
    ],
  },
];

const PlayByPlay = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <List.Section
        titleStyle={styles.listSectionTitle}
        style={styles.listSection}
        title="END OF THE GAME"
      >
        {mockdata.reverse().map((item) => (
          <List.Accordion
            right={() => (
              <List.Icon
                style={styles.listAccordionIconStyle}
                color="white"
                icon="chevron-down"
              />
            )}
            style={styles.listAccordionStyle}
            titleStyle={styles.listAccordionTitleStyle}
            title={`${item.quarter.toUpperCase()} QUARTER`}
          >
            {item.plays.map((plays) => (
              <List.Item
                style={styles.listItemStyle}
                titleStyle={styles.titleStyle}
                title={
                  <View style={styles.playsWrapper}>
                    <Text style={styles.playsScoreText}>{plays.score}</Text>
                    <Text style={styles.playsNameText}>{plays.playName}</Text>
                  </View>
                }
              />
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  playsScoreText: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  playsNameText: {
    alignItems: "center",
    justifyContent: "center",
  },
  playsWrapper: {
    flexDirection: "row",
  },
  titleStyle: {
    color: Colors.SOLIDWHITECOLOR,
    fontSize: 20,
  },
  listItemStyle: {
    backgroundColor: Colors.DARKGREYCOLOR,
    justifyContent: "center",
  },
  listAccordionStyle: {
    backgroundColor: Colors.VARIANTDARKPURPLE,
  },
  listAccordionTitleStyle: {
    color: Colors.SOLIDWHITECOLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
  listAccordionIconStyle: {
    margin: 0,
  },
  listSection: {
    backgroundColor: Colors.VARIANTDARKPURPLE,
  },
  listSectionTitle: {
    color: Colors.SOLIDWHITECOLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlayByPlay;
