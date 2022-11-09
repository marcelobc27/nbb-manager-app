import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const header = ["name", "age", ("contract").substring(0, 1), "salary"];

const TradesTable = ({ header = [], contents = [] }) => {
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
        <DataTable.Row style={Preset.TableRow}>
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
            {cell.contract}
          </DataTable.Cell>
          <DataTable.Cell
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.salary}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default TradesTable;
