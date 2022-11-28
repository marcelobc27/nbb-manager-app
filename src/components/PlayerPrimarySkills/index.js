import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Colors } from "../../styles";
import { MainContent, PlayerBasicSkillsModalContent } from "./ModalContent";

const PlayerModal = ({ state }) => {
  const { modalVisible, setModalVisible } = state;

  const hideModal = () => setModalVisible(!modalVisible);

  return (
    <>
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainerStyle}
      >
        <View style={styles.modalViewWrapper}>
          <PlayerBasicSkillsModalContent/>
        </View>
      </Modal>
    </>
  );
};

const PlayerPrimarySkills = ({ state }) => {
  return <PlayerModal state={state} />;
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 0.8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  modalViewWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
});

export default PlayerPrimarySkills
