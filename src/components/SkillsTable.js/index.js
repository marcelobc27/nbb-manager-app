import { View, StyleSheet } from "react-native"
import { DataTable } from "react-native-paper"
import { Alignment, Colors } from "../../styles"

const SkillsTable = () => {
  return(
    <View style={{
      backgroundColor: '#FFF'
    }}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={[{flex: 1}, styles.tableRow]} textStyle={{color: "#FFF"}}>PAS</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, styles.tableRow]} textStyle={{color: "#FFF"}}>INT</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, styles.tableRow]} textStyle={{color: "#FFF"}}>EXT</DataTable.Title>
        <DataTable.Title style={[{flex: 1}, styles.tableRow]} textStyle={{color: "#FFF"}}>FT</DataTable.Title>
        <DataTable.Title style={[{flex: 1.5}, styles.tableRow]} textStyle={{color: "#FFF"}}>OVR</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell style={styles.tableRow}>75</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow}>80</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow}>95</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow}>95</DataTable.Cell>
        <DataTable.Cell style={styles.tableRow}>83</DataTable.Cell>
      </DataTable.Row>
    </View>
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