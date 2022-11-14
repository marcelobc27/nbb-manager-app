import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import CustomizableSubTitle from "../CustomizableSubTitle/index.js";
import { Alignment, Colors, Typography } from "../../styles/index.js";
import CustomizableModal from "../CustomizableModal/index.js";
import { useNavigation } from "@react-navigation/native";
import SkillsTable from "../Tables/SkillsTable.js";
import skills from "../../data/skills.js";

const HeaderContent = () => {
  return (
    <View style={styles.contentHeaderWrapper}>
      <View style={styles.contentHeader}>
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="PLAYER NAME"
          flex={4}
          backgroundColor={Colors.VARIANTDARKPURPLE}
          alignment="center"
        />
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="100%"
          flex={1}
          backgroundColor={Colors.VARIANTGREEN}
          alignment="center"
        />
        <CustomizableSubTitle
          color={Colors.SOLIDWHITECOLOR}
          subtitle="A+"
          flex={1}
          backgroundColor={Colors.SOLIDBLACKCOLOR}
          alignment="center"
        />
      </View>
    </View>
  );
};

const FooterButton = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.detailedSkillsButton}
        onPress={() => {
          navigation.navigate("DetailedSkillsScreen");
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.detailedSkillsButtonText}>DETAILED SKILLS</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubtitleAndSkillTable = ({title, content = []}) => {
  return (
    <View style={{ flex: 1}}>
      <CustomizableSubTitle
        subtitle={title}
        flex={0.5}
        backgroundColor={Colors.PRIMARYORANGECOLOR}
      />
      <SkillsTable contents={content}/>
    </View>
  );
};

const MainContent = () => {
  return (
    <View style={styles.mainContentWrapper}>
      <SubtitleAndSkillTable title="OFENSIVE SKILLS" content={skills.offensiveskills}/>
      <SubtitleAndSkillTable title="DEFENSIVE SKILLS" content={skills.defensiveskills}/>
      <SubtitleAndSkillTable title="GENERAL SKILLS" content={skills.generalskills}/>
    </View>
  );
};

const PlayerBasicSkillsModalContent = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderContent />
      <MainContent />
      <FooterButton
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const PlayerBasicSkillsModal = ({ modalVisible, setModalVisible }) => {
  return (
    <CustomizableModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <PlayerBasicSkillsModalContent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </CustomizableModal>
  );
};

const styles = StyleSheet.create({
  contentHeaderWrapper: {
    flex: 0.15,
    flexShrink: 0,
  },
  contentHeader: {
    flex: 1,
    ...Alignment.DisplayRow,
    backgroundColor: "green",
  },
  mainContentWrapper: {
    flex: 0.7,
    justifyContent: "center",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  buttonWrapper: {
    flex: 0.15,
    flexShrink: 0,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  detailedSkillsButton: {
    flex: 1,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.SOLIDBLACKCOLOR,
  },
  detailedSkillsButtonText: {
    ...Typography.MediumFontBold,
    color: Colors.SOLIDWHITECOLOR,
  },
});

export { PlayerBasicSkillsModal, PlayerBasicSkillsModalContent };
