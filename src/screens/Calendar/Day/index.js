import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../styles";
import StandardOrangeSubTitle from "../../../components/StandardOrangeSubTitle";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    day: "DAY 1",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    day: "DAY 2",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    day: "DAY 3",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    day: "DAY 4",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    day: "DAY 4",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    day: "DAY 4",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    day: "DAY 4",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    day: "DAY 4",
    teamAname: "First Item",
    teamAposition: "8th",
    teamAoverral: 87,
    teamBname: "First Item",
    teamBposition: "8th",
    teamVoverral: 87,
  },
];

const TeamSection = ({
  teamName,
  teamPosition,
  teamOverral,
  backgroundColor,
  color,
}) => {
  return (
    <View style={{ flex: 0.9, backgroundColor: backgroundColor }}>
      <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: color, fontSize: 18, fontWeight: 'bold' }}>{teamName.toUpperCase()}</Text>
      </View>
      <View style={{ flex: 5, flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: color, fontSize: 18, fontWeight: 'bold' }}>{teamPosition.toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: color, fontSize: 18, fontWeight: 'bold' }}>{teamOverral}</Text>
        </View>
      </View>
    </View>
  );
};

const Item = ({ item, onPress}) => (
  <View style={{ height: 200, width: '48%', margin: 4 }}>
    <View style={{flex: 0.20}}>
      <TouchableOpacity onPress={onPress} style={[{flex: 1}]}>
        <StandardOrangeSubTitle subtitle={item.day}/>
      </TouchableOpacity>
    </View>
    <View style={{flex: 0.8}}>
    <TeamSection
      teamName={item.teamAname}
      teamPosition={item.teamAposition}
      teamOverral={item.teamAoverral}
      backgroundColor={Colors.SOLIDBLACKCOLOR}
      color={Colors.SOLIDWHITECOLOR}
    />
    <TeamSection
      teamName={item.teamAname}
      teamPosition={item.teamAposition}
      teamOverral={item.teamAoverral}
      backgroundColor={Colors.NEUTRALGREYCOLOR}
      color={Colors.SOLIDBLACKCOLOR}
    />
    </View>
  </View>
);

const Day = () => {
  const navigation = useNavigation()

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("DayScreen")}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    margin: 8,
  },
  title: {
    fontSize: 16,
  },
});

export default Day;
