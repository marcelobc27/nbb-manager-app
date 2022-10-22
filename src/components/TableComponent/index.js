import { StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import { Preset } from "../../styles"

const TableComponent = ({navigation, contents = []}) => {
  return(
    <View style={styles.container}>
      <DataTable style={Preset.TableContainer}>
        <DataTable.Header style={Preset.TableHeader}>
          <DataTable.Title style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>NAME</DataTable.Title>
          <DataTable.Title style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>AGE</DataTable.Title>
          <DataTable.Title style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>CONTRACT</DataTable.Title>
          <DataTable.Title style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>SALARY</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={Preset.TableRow}>
          <DataTable.Cell style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>NAME</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>21</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>2</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.2}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>2OMIL</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  }
})

export default TableComponent