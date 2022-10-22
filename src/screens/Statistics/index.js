import { StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import { Preset } from "../../styles"

const Statistics = () => {
  return(
    <View style={styles.container}>
      <DataTable style={Preset.TableContainer}>
        <DataTable.Header style={Preset.TableHeader}>
          <DataTable.Title style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>NAME</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>GAM</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>PTS</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>RBD</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>BLK</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>ASS</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>STL</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>MIN</DataTable.Title>
          <DataTable.Title style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>PER</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={Preset.TableRow}>
          <DataTable.Cell style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>PLAYER</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>20</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>22.1</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>11.5</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>3.0</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>11.2</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>5.0</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>46.9</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.1}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>22.5</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Statistics