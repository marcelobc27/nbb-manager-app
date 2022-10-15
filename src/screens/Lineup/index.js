import { useState } from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { Button, DataTable } from 'react-native-paper'
import league from "../../data/contents"
import { PlayerBasicSkillsModal } from "../../components/PlayerBasicSkillsModal"
import FabComponent from "../../components/Fab"
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle"
import { Alignment, Colors, Typography } from "../../styles"

const TableHeader = () => {
  return(
    <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title style={styles.tableCell} textStyle={styles.tableCellText}>NAME</DataTable.Title>
      <DataTable.Title style={styles.tableCell} textStyle={styles.tableCellText}>POSITION</DataTable.Title>
      <DataTable.Title style={styles.tableCell} textStyle={styles.tableCellText}>AGE</DataTable.Title>
      <DataTable.Title style={styles.tableCell} textStyle={styles.tableCellText}>OVERRAL</DataTable.Title>
    </DataTable.Header>
  )
}

const PlayersTable = ({name, age, position, overrall, modalVisible, setModalVisible}) => {
  return(
    <DataTable.Row
      onPress={() => setModalVisible(!modalVisible)}
    >
      <DataTable.Cell style={styles.tableRow} textStyle={styles.tableRowText}>{name}</DataTable.Cell>
      <DataTable.Cell style={styles.tableRow} textStyle={styles.tableRowText}>{position}</DataTable.Cell>
      <DataTable.Cell style={styles.tableRow} textStyle={styles.tableRowText}>{age}</DataTable.Cell>
      <DataTable.Cell style={styles.tableRow} textStyle={styles.tableRowText}>{overrall}</DataTable.Cell>
    </DataTable.Row>
  )
}

const HeaderImage = () => {
  return(
    <View style={styles.imageWrapper}>

    </View>
  )
}

const LineupPlayersTable = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.lipeupWrapper}>
      <StandardOrangeSubTitle subtitle="STARTERS"/>
      <ScrollView>
      <TableHeader/>
      {league.map((teams, index) => {
        return(
        teams.teams.map(players => {
          return(
          players.players.map(player => {
            return(
            <PlayersTable
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              name={player.name}
              age={player.age}
              position={player.position}
              overrall={player.attackoverrall}   
            />
            )
          })
          )
        })
        )          
        })
      }
      <PlayerBasicSkillsModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </ScrollView>
      <StandardOrangeSubTitle subtitle="REST"/>
    </View>
 )
}

const Lineup = ({navigation}) => {
  return(
    <View style={styles.container}>
      <HeaderImage/>
      <LineupPlayersTable navigation={navigation}/>
      <FabComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  imageWrapper: {
    flex: 0.3,
    backgroundColor: '#aaa'
  },
  lipeupWrapper: {
    flex: 0.7,
    width: '100%',
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  lineupPlayerWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  tableHeader: {
    backgroundColor: Colors.VARIANTDARKPURPLE
  },
  tableCell: {
    ...Alignment.ColumnCenter,
  },
  tableCellText: {
    ...Alignment.ColumnCenter,
    ...Typography.SmallestFont,
    color: Colors.SOLIDWHITECOLOR,
  },
  tableRow: {
    ...Alignment.ColumnCenter,
  },
  tableRowText: {
    ...Alignment.ColumnCenter,
    color: Colors.SOLIDBLACKCOLOR,
  }
})

export default Lineup;