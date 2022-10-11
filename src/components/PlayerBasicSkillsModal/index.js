import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View, TouchableOpacity, Button } from "react-native";
import CustomizableSubTitle from "../CustomizableSubTitle/index.js";
import StandardOrangeSubTitle from "../StandardOrangeSubTitle/index.js";
import SkillsTable from "../SkillsTable.js/index.js";
import { Alignment, Colors } from "../../styles/index.js";
import CustomizableModal from "../CustomizableModal/index.js";

const PlayerBasicSkillsModalContent = () => {
  return(
    <>
      <View style={styles.contentHeader}>
        <CustomizableSubTitle color={Colors.SOLIDWHITECOLOR} subtitle="PLAYER NAME" flex={4} backgroundColor={Colors.VARIANTDARKPURPLE}/>
        <CustomizableSubTitle color={Colors.SOLIDWHITECOLOR} subtitle="A+" flex={1} backgroundColor={Colors.VARIANTBLUE}/>
      </View>
        <StandardOrangeSubTitle subtitle="OFFENSIVE SKILLS"/>
        <SkillsTable/>
        <StandardOrangeSubTitle subtitle="DEFENSIVE SKILLS"/>
        <SkillsTable/>
        <StandardOrangeSubTitle subtitle="GENERAL SKILLS"/>
        <SkillsTable/>
      <TouchableOpacity style={{height: 45, backgroundColor: Colors.VARIANTBLUE, color: Colors.SOLIDWHITECOLOR}}>
        DETAILED SKILLS
      </TouchableOpacity>
    </>      
  )
}

const PlayerBasicSkillsModal = ({modalVisible, setModalVisible}) => {
  return (
    <CustomizableModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <PlayerBasicSkillsModalContent/>
    </CustomizableModal>
  );
};
  
const styles = StyleSheet.create({
  contentHeader: {
    ...Alignment.DisplayRow
  }
})
  
export {PlayerBasicSkillsModal, PlayerBasicSkillsModalContent};