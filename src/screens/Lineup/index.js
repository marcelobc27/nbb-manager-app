import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { PlayerBasicSkillsModal } from "../../components/PlayerPrimarySkills/ModalContent";
import FabComponent from "../../components/Fab";
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle";
import { Alignment, Colors, Preset, Typography } from "../../styles";
import PlayersTable from "../../components/Tables/PlayersTable";
import players from "../../data/players";
import { useNavigation } from "@react-navigation/native";
import { Portal, Provider } from "react-native-paper";
import { lineupfabactions } from "../../data/actions";
import PlayerPrimarySkills from "../../components/PlayerPrimarySkills";

const HeaderImage = () => {
  return <View style={styles.imageWrapper}></View>;
};

const LineupPlayersTable = ({ state }) => {
  const navigation = useNavigation();
  const header = [
    "name",
    "age",
    "position".substring(0, 3),
    "overall".substring(0, 3),
  ];

  const { modalVisible, setModalVisible } = state;

  return (
    <View style={styles.lipeupWrapper}>
      <View style={{ flex: 1 }}>
        <StandardOrangeSubTitle subtitle="ROTATION" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 5 }}>
        <PlayersTable
          header={header}
          contents={players}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
      <View style={{ flex: 1 }}>
        <StandardOrangeSubTitle subtitle="REST" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 3 }}>
        <PlayersTable
          header={header}
          contents={players}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </View>
  );
};

const Lineup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider>
      <Portal>
        <PlayerPrimarySkills state={{ modalVisible, setModalVisible }} />
        <FabComponent actions={lineupfabactions} />
      </Portal>
      <HeaderImage />
      <LineupPlayersTable state={{ modalVisible, setModalVisible }} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.SOLIDWHITECOLOR,
  },
  imageWrapper: {
    flex: 0.3,
    backgroundColor: "#aaa",
  },
  lipeupWrapper: {
    flex: 0.7,
    width: "100%",
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  lineupPlayerWrapper: {
    ...Alignment.DisplayColumn,
    width: "100%",
  },
  tableHeader: {
    backgroundColor: Colors.VARIANTDARKPURPLE,
  },
  tableCell: {
    ...Alignment.ColumnCenter,
  },
  tableCellText: {
    ...Alignment.ColumnCenter,
    ...Typography.SmallFont,
    color: Colors.SOLIDWHITECOLOR,
  },
  tableRow: {
    ...Alignment.ColumnCenter,
  },
  tableRowText: {
    ...Alignment.ColumnCenter,
    ...Typography.SmallestFont,
    color: Colors.SOLIDBLACKCOLOR,
  },
});

export default Lineup;
