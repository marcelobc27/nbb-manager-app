import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const ContractsTable = ({ contents = [],  modalVisible, setModalVisible, actionVisible,setActionVisible}) => {
  const contractTime = contents.map((item) => item.contractTime)
  const maxContractTime = Math.max(contractTime)
  console.log(contractTime)
  console.log(maxContractTime)
  return (
    <View style={Preset.TableContainer}>
      <DataTable.Header style={Preset.TableHeader}>
        {contents.map((item) => (
          
          <DataTable.Title
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableHeaderTextStyle}
          >
            {item.contractTime}
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
            {cell.contractValue}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default ContractsTable;
