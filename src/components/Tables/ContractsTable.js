import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";



const ContractsTable = ({
  header = [],
  contents = [],
  modalVisible,
  setModalVisible,
  actionVisible,
  setActionVisible,
}) => {
  return (
    <View style={{width: "150%"}}>
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
          onPress={() =>
            typeof actionVisible !== "undefined"
              ? setActionVisible(!actionVisible)
              : console.log("teste")
          }
          onLongPress={() => setModalVisible(!modalVisible)}
        >
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.contractValue / cell.contractTime}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default ContractsTable;
