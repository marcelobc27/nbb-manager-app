import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Colors } from "../../styles";
import CustomizableSubTitle from "../../components/CustomizableSubTitle";
import PlayersTable from "../../components/Tables/PlayersTable";
import players from "../../data/players";
import SliderComponent from "../../components/Slider";
import PlayerPrimarySkills from "../../components/PlayerPrimarySkills";
import FreeAgentsModalContent from "./ModalContent";

const FreeAgentsTable = ({ state }) => {
  const header = [
    "name",
    "age",
    "position".substring(0, 3),
    "overall".substring(0, 3),
  ];
  const { modalVisible, setModalVisible, actionVisible, setActionVisible } = state;

  return (
    <View>
      <PlayersTable
        header={header}
        contents={players}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        actionVisible={actionVisible}
        setActionVisible={setActionVisible}
      />
    </View>
  );
};

const FreeAgentsModal = ({state}) => {
  const { actionVisible, setActionVisible } = state;

  const showModal = () => setActionVisible(true);
  const hideModal = () => setActionVisible(false);

  return (
    <Modal
      visible={actionVisible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContainerStyle}
    >
      <FreeAgentsModalContent/>
    </Modal>
  );
};

const FreeAgents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);

  return (
    <Provider>
      <Portal>
        <PlayerPrimarySkills state={{ modalVisible, setModalVisible }} />
        <FreeAgentsModal state={{actionVisible, setActionVisible}}/>
      </Portal>
      <FreeAgentsTable state={{ modalVisible, setModalVisible, actionVisible, setActionVisible }} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  modalContainerStyle: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  tableWrapper: {
    flex: 1,
  },
});

export default FreeAgents;
