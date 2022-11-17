import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, Portal, Provider } from "react-native-paper";
import FabComponent from "../../components/Fab";
import PlayerPrimarySkills from "../../components/PlayerPrimarySkills";
import PlayersTable from "../../components/Tables/PlayersTable";
import { juniorleaguefabactions } from "../../data/actions";
import players from "../../data/players";

const JuniorLeagueTable = ({ state }) => {
  const { modalVisible, setModalVisible } = state

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
      />
    </View>
  );
};

const JuniorLeague = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <Provider>
        <Portal>
          <PlayerPrimarySkills state={{ modalVisible, setModalVisible }} />
          <FabComponent actions={juniorleaguefabactions} />
        </Portal>
        <JuniorLeagueTable state={{ modalVisible, setModalVisible }}/>
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
});

export default JuniorLeague;
