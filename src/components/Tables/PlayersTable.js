import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const PlayersTable = ({ header = [], contents = [],  modalVisible, setModalVisible, actionVisible,setActionVisible}) => {
  return (
    <View style={Preset.TableContainer}>
      <DataTable.Header style={Preset.TableHeader}>
        {header.map((title) => (
          <DataTable.Title
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableHeaderTextStyle}
          >
            {title.toUpperCase()}
          </DataTable.Title>
        ))}
      </DataTable.Header>
      {contents.map((cell) => (
        <DataTable.Row
          key={cell.teamid} 
          style={Preset.TableRow}
          onPress={() => typeof(actionVisible) !== 'undefined' ? setActionVisible(!actionVisible) : console.log("teste")}
          onLongPress={() => setModalVisible(!modalVisible)}
        >
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.name.toUpperCase()}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.age}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.position.toUpperCase()}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {(cell.attackoverrall + cell.defenseoverrall)/2}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default PlayersTable;
