import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import leagues from "../../data/contents";
import ModalContent from "./ModalContent";

const PlayerModal = ({modalVisible, setModalVisible, id}) => {
  return (
    <View style={styles.centeredViewModal}>
      <Modal
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
         animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* <Pressable onPress={(event) => {if(event.target == event.currentTarget){
          setModalVisible(!modalVisible)
        }}}> */}
        <ModalContent/>
        {/* </Pressable> */}
      </Modal>
    </View>
  );
};
  
const styles = StyleSheet.create({
  centeredViewModal: {
    flex: 1,
  },
})
  
export default PlayerModal;