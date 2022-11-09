import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const header = ["teams", "victories", "defeats", "plusminus"];

const StandingTable = ({ header = [], contents = [] }) => {
  const navigation = useNavigation()

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
          onPress={() => navigation.navigate('LineupScreen')}
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
            {cell.victories}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.defeats}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.plus - cell.minus}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default StandingTable;
