import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { PlayerBasicSkillsModal } from "../../components/PlayerBasicSkillsModal";
import FabComponent, { TouchableTitle } from "../../components/Fab";
import { OverlayView } from "../../components/Fab";
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle";
import { Alignment, Colors, Preset, Typography } from "../../styles";
import PlayersTable from "../../components/Tables/PlayersTable";
import players from "../../data/players";
import { useNavigation } from "@react-navigation/native";
import { Portal, Provider } from "react-native-paper";

const HeaderImage = () => {
  return <View style={styles.imageWrapper}></View>;
};

const LineupPlayersTable = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const header = ["name", "age", "position", "overall"];

  return (
    <View style={styles.lipeupWrapper}>
      <View style={{ flex: 1 }}>
        <StandardOrangeSubTitle subtitle="ROTATION" />
      </View>
      <ScrollView style={{ flex: 5 }}>
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
      <ScrollView style={{ flex: 3 }}>
        <PlayersTable
          header={header}
          contents={players}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
      <View style={{ flex: 0 }}>
        <PlayerBasicSkillsModal
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </View>
  );
};

const Lineup = () => {
  return (
      <Provider>
        <Portal>
        <FabComponent/>
        </Portal>
      <HeaderImage />
      <LineupPlayersTable/>
      </Provider>
  );
};

const LineupFabScreens = ({visible, setVisible}) => {  
  return (
    <View style={styles.overlay}>
      <TouchableTitle title="PlayBook" />
      <TouchableTitle
        title="Game Style"
        pageName="GameStyleScreen"
        visible={visible}
        setVisible={setVisible}
      />
      <TouchableTitle
        title="Development"
        pageName="PlayersDevelopmentScreen"
        visible={visible}
        setVisible={setVisible}
      />
      <TouchableTitle
        title="Rotation"
        pageName="RotationScreen"
        visible={visible}
        setVisible={setVisible}
      />
    </View>
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
