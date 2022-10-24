import { View, StyleSheet } from "react-native"
import { DataTable } from "react-native-paper"
import { Alignment, Colors, Preset } from "../../styles"

const SkillsTable = () => {
  return(
    <DataTable style={{flex: 3.5, backgroundColor: Colors.NEUTRALGREYCOLOR, justifyContent: 'center'}}>
      <DataTable.Header style={Preset.TableHeader}>
        <DataTable.Title style={[{flex: 1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>PAS</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>INT</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>EXT</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>FT</DataTable.Title>
        <DataTable.Title style={[{flex: 1.5}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>OVR</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row style={Preset.TableRow}>
        <DataTable.Cell style={Preset.TableTextPosition} textStyle={Preset.TableRowTextStyle}>75</DataTable.Cell>
        <DataTable.Cell style={Preset.TableTextPosition} textStyle={Preset.TableRowTextStyle}>80</DataTable.Cell>
        <DataTable.Cell style={Preset.TableTextPosition} textStyle={Preset.TableRowTextStyle}>95</DataTable.Cell>
        <DataTable.Cell style={Preset.TableTextPosition} textStyle={Preset.TableRowTextStyle}>95</DataTable.Cell>
        <DataTable.Cell style={Preset.TableTextPosition} textStyle={Preset.TableRowTextStyle}>83</DataTable.Cell>
      </DataTable.Row>
    </DataTable>  
  )
}

const styles = StyleSheet.create({
  tableRow: {
    ...Alignment.RowCenter
  },
  tableHeader: {
    backgroundColor: Colors.VARIANTDARKPURPLE
  }
})

export default SkillsTable