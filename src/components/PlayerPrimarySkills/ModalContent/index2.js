import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import leagues from "../../../data/contents";

const Skill = ({
  playerid= 1,
  pass= 85,
  externalshoot= 95,
  internalshoot= 72,
  freethrowshoot= 75,
  physical= 75,
  block= 56,
  steals= 76,
  rebounds= 74
}) => {
  return(
    <View>
      
    </View>
  )
}

const Player = ({skills = []}) => {
  return(
    <View>
      {skills.map(skill => <Skill {...skill} />)}
    </View>
  )
}

const Team = ({players = []}) => {
  return(
    <View>
      {players.map(player => <Player {...player} />)}
    </View>
  )
}

const League = ({teams = []}) => {
  return(
    <View>
      {teams.map(team => <Team {...team} />)}
    </View>
  )
}

const PlayerModal2 = ({modalVisible, setModalVisible, id}) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              {leagues.map(league =>  <League {...league}/>)}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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

export default PlayerModal2;