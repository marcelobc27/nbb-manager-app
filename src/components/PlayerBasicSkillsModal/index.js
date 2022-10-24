import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View, TouchableOpacity, Button, Text } from "react-native";
import CustomizableSubTitle from "../CustomizableSubTitle/index.js";
import SkillsTable from "../SkillsTable.js/index.js";
import { Alignment, Colors, Typography } from "../../styles/index.js";
import CustomizableModal from "../CustomizableModal/index.js";

const HeaderContent = () => {
  return(
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
          subtitle="A+" 
          flex={1} 
          backgroundColor={Colors.VARIANTBLUE}
          alignment="center"
        />
      </View>
    </View>
  )
}

const FooterButton = ({navigation, modalVisible, setModalVisible}) => {
  return(
    <View style={styles.buttonWrapper}>
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
    </View>
  )
}

const TitleAndTable = () => {
  return(
    <View style={{flex: 1, margin: 4}}>
      <CustomizableSubTitle subtitle="TESTE" flex={1.5} backgroundColor={Colors.PRIMARYORANGECOLOR}/>
      <SkillsTable/>
    </View>    
  )
}

const MainContent = () => {
  return(
    <View style={styles.mainContentWrapper}>
      <TitleAndTable/>
    </View>
  )
}

const PlayerBasicSkillsModalContent = ({modalVisible, setModalVisible, navigation}) => {
  return(
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <HeaderContent/>
      <MainContent/>
      <MainContent/>
      <MainContent/>
      <MainContent/>
      <FooterButton navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>     
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
  contentHeaderWrapper: {
    flex: 0.2,
    flexShrink: 0
  },
  contentHeader: {
    flex: 1,
    ...Alignment.DisplayRow,
    backgroundColor: 'green'
  },
  mainContentWrapper: {
    flex: 0.8,
    justifyContent: 'center',
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  buttonWrapper: {
    flex: 0.2,
    flexShrink: 0,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  detailedSkillsButton: {
    flex: 1,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.VARIANTBLUE,
  },
  detailedSkillsButtonText: {
    ...Typography.MediumFontBold,
    color: Colors.SOLIDWHITECOLOR,
  }
})
  
export {PlayerBasicSkillsModal, PlayerBasicSkillsModalContent};