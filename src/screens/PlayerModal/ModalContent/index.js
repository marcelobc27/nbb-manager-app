import {StyleSheet, Text, Pressable, View, Animated } from "react-native";
import { DataTable } from "react-native-paper";
import CustomizableSubTitle from "../../../components/CustomizableSubTitle";
import StandardOrangeSubTitle from "../../../components/StandardOrangeSubTitle";
import { Colors } from '../../../styles'

const SkillTable = () => {
  return(
    <View style={{
      backgroundColor: '#FFF'
    }}>
    <DataTable.Header style={{backgroundColor: '#741B47'}}>
      <DataTable.Title style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} textStyle={{color: "#FFF"}}>PAS</DataTable.Title>
      <DataTable.Title style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} textStyle={{color: "#FFF"}}>INT</DataTable.Title>
      <DataTable.Title style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} textStyle={{color: "#FFF"}}>EXT</DataTable.Title>
      <DataTable.Title style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} textStyle={{color: "#FFF"}}>FT</DataTable.Title>
      <DataTable.Title style={{flex: 1.5, alignItems: 'center', justifyContent: 'center'}} textStyle={{color: "#FFF"}}>OVR</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
      <DataTable.Cell style={{alignItems: 'center', justifyContent: 'center'}}>75</DataTable.Cell>
      <DataTable.Cell style={{alignItems: 'center', justifyContent: 'center'}}>80</DataTable.Cell>
      <DataTable.Cell style={{alignItems: 'center', justifyContent: 'center'}}>95</DataTable.Cell>
      <DataTable.Cell style={{alignItems: 'center', justifyContent: 'center'}}>95</DataTable.Cell>
      <DataTable.Cell style={{alignItems: 'center', justifyContent: 'center'}}>83</DataTable.Cell>
    </DataTable.Row>
    </View>
  )
}

const ModalContent = () => {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 200,
    }}>
    <Animated.View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <CustomizableSubTitle color={Colors.SOLIDWHITECOLOR} subtitle="Teste1" flex={4} backgroundColor={Colors.VARIANTDARKPURPLE}/>
          <CustomizableSubTitle color={Colors.SOLIDWHITECOLOR} subtitle="Teste2" flex={1} backgroundColor={Colors.VARIANTBLUE}/>
        </View>
        <StandardOrangeSubTitle subtitle="OFFENSIVE SKILLS"/>
        <SkillTable/>
        <StandardOrangeSubTitle subtitle="DEFENSIVE SKILLS"/>
        <SkillTable/>
        <StandardOrangeSubTitle subtitle="GENERAL SKILLS"/>
        <SkillTable/>
        {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable> */}
      </View>
    </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    height: '60%',
    width: '95%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: "grey"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalContent