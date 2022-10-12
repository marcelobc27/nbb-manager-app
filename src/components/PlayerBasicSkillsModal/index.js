import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View, TouchableOpacity, Button, Text } from "react-native";
import CustomizableSubTitle from "../CustomizableSubTitle/index.js";
import StandardOrangeSubTitle from "../StandardOrangeSubTitle/index.js";
import SkillsTable from "../SkillsTable.js/index.js";
import { Alignment, Colors } from "../../styles/index.js";
import CustomizableModal from "../CustomizableModal/index.js";

const PlayerBasicSkillsModalContent = ({modalVisible, setModalVisible, navigation}) => {
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
      <TouchableOpacity
        style={styles.detailedSkillsButton}
        onPress={
          () => {
            navigation.navigate('DetailedSkillsScreen')
            setModalVisible(!modalVisible)
          }
        }
      >
        <Text style={styles.detailedSkillsButtonText}>DETAILED SKILLS</Text>
      </TouchableOpacity>
    </>      
  )
}

const PlayerBasicSkillsModal = ({modalVisible, setModalVisible, navigation}) => {
  return (
    <CustomizableModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <PlayerBasicSkillsModalContent modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}/>
    </CustomizableModal>
  );
};
  
const styles = StyleSheet.create({
  contentHeader: {
    ...Alignment.DisplayRow
  },
  detailedSkillsButton: {
    height: 45, 
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.VARIANTBLUE,
  },
  detailedSkillsButtonText: {
    color: Colors.SOLIDWHITECOLOR,
    fontWeight: 200,
  }
})
  
export {PlayerBasicSkillsModal, PlayerBasicSkillsModalContent};