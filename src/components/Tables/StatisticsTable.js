import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { Preset } from "../../styles";

const StatisticsTable = ({ header = [], contents = []}) => {
  return (
    <View style={Preset.TableContainer}>
      <DataTable.Header style={Preset.TableHeader}>
        {header.map((title) => (
          <DataTable.Title
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableHeaderTextStyle}
          >
            {title.toUpperCase().substring(0, 3)}
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
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.points / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.rebounds / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.blocks / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.assists / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.steals / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.minutes / cell.gamesplayed}
          </DataTable.Cell>
          <DataTable.Cell
            key={cell.playerid}
            style={[Preset.TableTextPosition]}
            textStyle={Preset.TableRowTextStyle}
          >
            {cell.effectiveness}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </View>
  );
};

export default StatisticsTable;
