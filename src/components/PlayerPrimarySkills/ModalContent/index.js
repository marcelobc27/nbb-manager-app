import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import CustomizableSubTitle from "../../CustomizableSubTitle/index.js";
import { Alignment, Colors, Typography } from "../../../styles/index.js";
import { useNavigation } from "@react-navigation/native";
import SkillsTable from "../../Tables/SkillsTable.js";
import skills from "../../../data/skills.js";

const HeaderContent = () => {
  return (
    <View style={styles.contentHeaderWrapper}>
      <View style={styles.contentHeader}>
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="PLAYER NAME"
          flex={3.5}
          backgroundColor={Colors.VARIANTDARKPURPLE}
          alignment="center"
        />
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="100%"
          flex={1}
          backgroundColor={Colors.DARKGREYCOLOR}
          alignment="center"
        />
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="A+"
          flex={1.5}
          backgroundColor={Colors.DARKGREYCOLOR}
          alignment="center"
        />
      </View>
    </View>
  );
};

const FooterButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.detailedSkillsButton}
        onPress={() => {
          navigation.navigate("DetailedSkillsScreen");
        }}
      >
        <Text style={styles.detailedSkillsButtonText}>DETAILED SKILLS</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubtitleAndSkillsTable = ({title, content = []}) => {
  return (
    <View style={{ flex: 1}}>
      <View style={{flex: 0.35}}>
      <CustomizableSubTitle
        subtitle={title}
        flex={1}
        backgroundColor={Colors.PRIMARYORANGECOLOR}
      />
      </View>
      <View style={{flex: 0.65}}>
      <SkillsTable contents={content}/>
      </View>
    </View>
  );
};

export const MainContent = () => {
  return (
    <View style={styles.mainContentWrapper}>
      <SubtitleAndSkillsTable title="OFENSIVE SKILLS" content={skills.offensiveskills}/>
      <SubtitleAndSkillsTable title="DEFENSIVE SKILLS" content={skills.defensiveskills}/>
      <SubtitleAndSkillsTable title="GENERAL SKILLS" content={skills.generalskills}/>
    </View>
  );
};

const PlayerBasicSkillsModalContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderContent />
      <MainContent />
      <FooterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  contentHeaderWrapper: {
    flex: 0.10,
    flexShrink: 0,
  },
  contentHeader: {
    flex: 1,
    ...Alignment.DisplayRow,
    backgroundColor: "green",
  },
  mainContentWrapper: {
    flex: 0.8,
    justifyContent: "center",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  buttonWrapper: {
    flex: 0.10,
    flexShrink: 0,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  detailedSkillsButton: {
    flex: 1,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.DARKGREYCOLOR,
  },
  detailedSkillsButtonText: {
    ...Typography.SmallFontBold,
    color: Colors.SOLIDWHITECOLOR,
  },
});

export { PlayerBasicSkillsModalContent };
