import { ScrollView, StyleSheet, View } from "react-native"
import { DataTable } from "react-native-paper"
import StatisticsTable from "../../components/Tables/StatisticsTable"
import statistics from "../../data/statistics"
import { Preset } from "../../styles"

const Statistics = () => {
  const header = ["name", "gamesplayed", "points", "rebounds", "blocks", "assists", "steals", "minutespergame", "effectiveness"]
  return(
    <ScrollView horizontal>
      <StatisticsTable header={header} contents={statistics}/>
    </ScrollView>
  )
}

export default Statistics