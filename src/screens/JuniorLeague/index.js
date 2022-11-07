import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import FabComponent, { OverlayView } from "../../components/Fab"

const JuniorLeagueTable = () => {
  return(
    <View style={styles.tableWrapper}>
      <DataTable.Header>
        <DataTable.Title>Teste</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Teste</DataTable.Cell>
      </DataTable.Row>
    </View>
  )
}

const JuniorLeague = () => {
  const [visibleOverlay, setVisibleOverlay] = useState(false)

  return(
    <View style={styles.container}>
      <JuniorLeagueTable/>
      <FabComponent visibleOverlay={visibleOverlay} setVisibleOverlay={setVisibleOverlay}>
        <OverlayView visible={visibleOverlay} setVisible={setVisibleOverlay}/>
      </FabComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%'
  },
  tableWrapper: {
    flex: 1
  }
})

export default JuniorLeague