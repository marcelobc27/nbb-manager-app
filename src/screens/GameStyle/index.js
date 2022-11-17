import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomizableSubTitle from "../../components/CustomizableSubTitle";
import PickerComponent from "../../components/Picker";
import SliderComponent from "../../components/Slider";
import { Colors } from "../../styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerCoachPotential}>
        <CustomizableSubTitle
          subtitle="A+"
          flex={1}
          alignment="center"
          backgroundColor={Colors.DARKGREYCOLOR}
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.headerCoachInformation}>
        <CustomizableSubTitle
          subtitle="COACH NAME"
          flex={1}
          backgroundColor={Colors.DARKGREYCOLOR}
          color={Colors.SOLIDWHITECOLOR}
          alignment="center"
        />
        <CustomizableSubTitle
          subtitle="COACH AGE"
          flex={1}
          backgroundColor={Colors.DARKGREYCOLOR}
          color={Colors.SOLIDWHITECOLOR}
          alignment="center"
        />
      </View>
    </View>
  );
};

const StarPlayers = () => {
  return (
    <View style={styles.starPlayersWrapper}>
      <View style={styles.starPlayers}>
        <View style={styles.starPlayersSections}>
          <CustomizableSubTitle subtitle="STAR PLAYER" />
          <PickerComponent
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
          <PickerComponent
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
        </View>
        <View style={styles.starPlayersSections}>
          <CustomizableSubTitle subtitle="FUNCTION" />
          <PickerComponent
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
          <PickerComponent
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
        </View>
      </View>
    </View>
  );
};

const SliderStrategies = () => {
  return (
    <View style={styles.sliderStrategiesWrapper}>
      <SliderComponent subtitle="PAINT" />
      <SliderComponent subtitle="MID-RANGE" />
      <SliderComponent subtitle="OFFENSIVE PACE" />
      <SliderComponent subtitle="OFFENSIVE PACE" />
      <SliderComponent subtitle="DEFENSIVE PRESSURE" />
    </View>
  );
};

const SelectStrategies = () => {
  return (
    <View style={styles.selectStrategiesWrapper}>
      <CustomizableSubTitle subtitle="OFFENSIVE STRATEGY" />
      <PickerComponent
        backgroundColor={Colors.PRIMARYORANGECOLOR}
        color={Colors.VARIANTDARKPURPLE}
      />
      <CustomizableSubTitle subtitle="DEFENSIVE STRATEGY" />
      <PickerComponent
        backgroundColor={Colors.PRIMARYORANGECOLOR}
        color={Colors.VARIANTDARKPURPLE}
      />
    </View>
  );
};

const MainContent = () => {
  return (
    <View style={styles.mainContent}>
      <StarPlayers />
      <SliderStrategies />
      <SelectStrategies />
    </View>
  );
};

const GameStyle = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MainContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    flex: 0.1,
    backgroundColor: "yellow",
  },
  headerCoachInformation: {
    flex: 0.7,
    flexDirection: "column",
  },
  headerCoachPotential: {
    flex: 0.3,
    flexDirection: "column",
  },
  mainContent: {
    flex: 0.9,
    flexDirection: "column",
    backgroundColor: Colors.SOLIDWHITECOLOR,
  },
  starPlayersWrapper: {
    flex: 0.2,
    flexDirection: "row",
  },
  starPlayers: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
  },
  starPlayersSections: {
    flex: 0.5,
    height: "100%",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    justifyContent: "center",
  },
  sliderStrategiesWrapper: {
    flex: 0.6,
  },
  selectStrategiesWrapper: {
    flex: 0.2,
  },
});

export default GameStyle;
