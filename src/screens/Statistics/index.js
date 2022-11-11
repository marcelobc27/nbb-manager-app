import { ScrollView, StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import StatisticsTable from "../../components/Tables/StatisticsTable"
import statistics from "../../data/statistics"
import { Preset } from "../../styles"

const Statistics = () => {
  const header = ["name", "gamesplayed", "points", "rebounds", "blocks", "assists", "steals", "minutespergame", "effectiveness"]
  return(
    <ScrollView horizontal contentContainerStyle={{flex: 1}}>
      <StatisticsTable header={header} contents={statistics}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Statistics