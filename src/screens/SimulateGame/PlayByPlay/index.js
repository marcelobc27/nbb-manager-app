import { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
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
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <List.Section
        titleStyle={{
          color: Colors.SOLIDWHITECOLOR,
          fontSize: 20,
        }}
        style={{
          backgroundColor: Colors.VARIANTDARKPURPLE,
        }}
        title="END OF THE GAME"
      >
        {mockdata.reverse().map((item) => (
          <List.Accordion
            right={props => <List.Icon {...props} icon="folder" />}
            style={{ backgroundColor: Colors.VARIANTDARKPURPLE }}
            titleStyle={{ color: Colors.SOLIDWHITECOLOR, fontSize: 20 }}
            title={`${item.quarter.toUpperCase()} QUARTER`}
          >
            {item.plays.map((plays) => (
              <List.Item
                style={{
                  backgroundColor: Colors.DARKGREYCOLOR,
                  justifyContent: "center",
                }}
                titleStyle={{ color: Colors.SOLIDWHITECOLOR, fontSize: 20 }}
                title={
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        marginRight: 16,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {plays.score}
                    </Text>
                    <Text
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      {plays.playName}
                    </Text>
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

export default PlayByPlay;
