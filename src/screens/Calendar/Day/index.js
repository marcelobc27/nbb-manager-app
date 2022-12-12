import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Alignment, Colors, Typography } from "../../../styles";
import StandardOrangeSubTitle from "../../../components/StandardOrangeSubTitle";
import { useNavigation } from "@react-navigation/native";
import {calendar} from "../../../data/calendarData";

const TeamSection = ({
  teamName,
  teamPosition,
  teamOverral,
  backgroundColor,
  color,
}) => {
  return (
    <View style={[{ backgroundColor: backgroundColor }, styles.teamSectionWrapper]}>
      <View style={styles.teamSectionTeamName}>
        <Text style={[{ color: color }, styles.teamSectionText]}>{teamName.toUpperCase()}</Text>
      </View>
      <View style={styles.teamSectionAdditionalInfoWrapper}>
        <View style={styles.teamSectionAdditionalInfo}>
          <Text style={[{ color: color }, styles.teamSectionText]}>{teamPosition.toUpperCase()}</Text>
        </View>
        <View style={styles.teamSectionAdditionalInfo}>
          <Text style={[{ color: color }, styles.teamSectionText]}>{teamOverral}</Text>
        </View>
      </View>
    </View>
  );
};

const Item = ({ item, onPress}) => (
  <View style={styles.itemWrapper}>
    <View style={styles.itemSubtitleWrapper}>
      <TouchableOpacity onPress={onPress} style={styles.itemSubtitle}>
        <StandardOrangeSubTitle subtitle={item.day}/>
      </TouchableOpacity>
    </View>
    <View style={styles.itemContentWrapper}>
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
        data={calendar}
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
  itemWrapper: {
    height: 200, 
    width: '48%', 
    margin: 4 
  },
  itemSubtitleWrapper: {
    flex: 0.20
  },
  itemSubtitle: {
    flex: 1
  },
  itemContentWrapper: {
    flex: 0.80
  },
  teamSectionWrapper: {
    flex: 0.9
  },
  teamSectionTeamName: {
    flex: 5,
    ...Alignment.ColumnCenter
  },
  teamSectionAdditionalInfoWrapper: {
    flex: 5, 
    ...Alignment.DisplayRow
  },
  teamSectionAdditionalInfo: {
    flex: 1, 
    ...Alignment.ColumnCenter
  },
  teamSectionText: {
    ...Typography.SmallestFontBold
  },
});

export default Day;
