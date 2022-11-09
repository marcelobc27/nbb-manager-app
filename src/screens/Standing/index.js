import { View, Text, StyleSheet } from "react-native"
import { DataTable, Button } from 'react-native-paper'
import StandingTable from "../../components/Tables/StandingsTable";
import teams from "../../data/teams";

const header = ["teams", ("victories").substring(0,1), ("defeats").substring(0,1), "+/-"];

const Standing = () => {
  return(
    <View style={styles.container}>
      <StandingTable header={header} contents={teams}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Standing