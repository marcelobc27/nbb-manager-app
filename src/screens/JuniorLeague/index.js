import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, Modal, Portal, Provider } from "react-native-paper";
import FabComponent from "../../components/Fab";
import PlayerPrimarySkills from "../../components/PlayerPrimarySkills";
import PlayersTable from "../../components/Tables/PlayersTable";
import { juniorleaguefabactions } from "../../data/actions";
import players from "../../data/players";
import { Colors } from "../../styles";
import JuniorLeagueModalContent from "./ModalContent";

const JuniorLeagueTable = ({ state }) => {
  const { modalVisible, setModalVisible, actionVisible, setActionVisible } = state

  const header = [
    "name",
    "age",
    "position".substring(0, 3),
    "overall".substring(0, 3),
  ];

  return (
    <View style={styles.tableWrapper}>
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

const JuniorLeagueModal = ({state}) => {
  const { actionVisible, setActionVisible } = state;

  const showModal = () => setActionVisible(true);
  const hideModal = () => setActionVisible(false);

  return (
    <Modal
      visible={actionVisible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContainerStyle}
    >
      <JuniorLeagueModalContent/>
    </Modal>
  );
};

const JuniorLeague = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionVisible, setActionVisible] = useState(false);

  return (
      <Provider>
        <Portal>
          <PlayerPrimarySkills state={{ modalVisible, setModalVisible }} />
          <JuniorLeagueModal state={{actionVisible, setActionVisible}}/>
          <FabComponent actions={juniorleaguefabactions} />
        </Portal>
        <JuniorLeagueTable state={{ modalVisible, setModalVisible, actionVisible, setActionVisible }}/>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  tableWrapper: {
    flex: 1,
  },
  modalContainerStyle: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
});

export default JuniorLeague;
