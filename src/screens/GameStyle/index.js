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
            flex={0.8}
            margin={4}
            width={85}
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
          <PickerComponent
            flex={0.8}
            margin={4}
            width={85}
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
        </View>
        <View style={styles.starPlayersSections}>
          <CustomizableSubTitle subtitle="FUNCTION" />
          <PickerComponent
            flex={0.8}
            margin={4}
            width={85}
            backgroundColor={Colors.PRIMARYORANGECOLOR}
            color={Colors.VARIANTDARKPURPLE}
          />
          <PickerComponent
            flex={0.8}
            margin={4}
            width={85}
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
      <ScrollView showsVerticalScrollIndicator={false}>
      <SliderComponent subtitle="PAINT" labelStart={1} labelEnd={5}/>
      <SliderComponent subtitle="MID-RANGE" labelStart={1} labelEnd={5}/>
      <SliderComponent subtitle="3PT SHOOT" labelStart={1} labelEnd={5}/>
      <SliderComponent subtitle="OFFENSIVE PACE" labelStart="SLOW" labelEnd="FAST" />
      <SliderComponent subtitle="DEFENSIVE PRESSURE" labelStart="LOW" labelEnd="HIGH"/>
      </ScrollView>
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
        width={90}
      />
      <CustomizableSubTitle subtitle="DEFENSIVE STRATEGY" />
      <PickerComponent
        backgroundColor={Colors.PRIMARYORANGECOLOR}
        color={Colors.VARIANTDARKPURPLE}
        width={90}
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
    flex: 0.25,
    flexDirection: "row",
  },
  starPlayers: {
    flex: 1,
    flexDirection: "row",
  },
  starPlayersSections: {
    flex: 0.5,
    height: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    justifyContent: "center",
  },
  sliderStrategiesWrapper: {
    flex: 0.5,
    margin: 8
  },
  selectStrategiesWrapper: {
    flex: 0.25,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
});

export default GameStyle;
