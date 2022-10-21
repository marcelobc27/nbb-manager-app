import { StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import { Preset } from "../../styles"

const PlayersDevelopment = () => {
  return(
    <View style={styles.container}>
      <DataTable style={Preset.TableContainer}>
        <DataTable.Header style={Preset.TableHeader}>
          <DataTable.Title style={[{flex: 0.7}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>PLAYERS NAME</DataTable.Title>
          <DataTable.Title style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>+ / -</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={Preset.TableRow}>
          <DataTable.Cell style={[{flex: 0.7}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>TESTE</DataTable.Cell>
          <DataTable.Cell style={[{flex: 0.3}, Preset.TableTextPosition]} textStyle={Preset.TableRowTextStyle}>TESTE</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default PlayersDevelopment