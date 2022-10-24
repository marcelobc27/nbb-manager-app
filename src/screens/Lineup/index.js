import { useState } from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { Button, DataTable } from 'react-native-paper'
import league from "../../data/contents"
import { PlayerBasicSkillsModal } from "../../components/PlayerBasicSkillsModal"
import FabComponent from "../../components/Fab"
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle"
import { Alignment, Colors, Preset, Typography } from "../../styles"

const TableHeader = () => {
  return(
    <DataTable.Header style={Preset.TableHeader}>
      <DataTable.Title style={[{flex: 0.40}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>NAME</DataTable.Title>
      <DataTable.Title style={[{flex: 0.30}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>POS</DataTable.Title>
      <DataTable.Title style={[{flex: 0.15}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>AGE</DataTable.Title>
      <DataTable.Title style={[{flex: 0.15}, Preset.TableTextPosition]} textStyle={Preset.TableHeaderTextStyle}>OVR</DataTable.Title>
    </DataTable.Header>
  )
}

const PlayersTable = ({name, age, position, overrall, modalVisible, setModalVisible}) => {
  return(
    <DataTable.Row
      onPress={() => setModalVisible(!modalVisible)}
    >
      <DataTable.Cell style={[{flex: 0.40}, Preset.TableRow]} textStyle={Preset.TableRowTextStyle}>{name.toUpperCase()}</DataTable.Cell>
      <DataTable.Cell style={[{flex: 0.30}, Preset.TableRow]} textStyle={Preset.TableRowTextStyle}>{position.toUpperCase()}</DataTable.Cell>
      <DataTable.Cell style={[{flex: 0.15}, Preset.TableRow]} textStyle={Preset.TableRowTextStyle}>{age}</DataTable.Cell>
      <DataTable.Cell style={[{flex: 0.15}, Preset.TableRow]} textStyle={Preset.TableRowTextStyle}>{overrall}</DataTable.Cell>
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
      <StandardOrangeSubTitle subtitle="ROTATION"/>
      <View style={{flex: 1}}>
      <TableHeader/>
      <ScrollView nestedScrollEnabled={true}>
      {league.map((teams) => {
        return(
        teams.teams.map(players => {
          return(
          players.players.map((player, index) => {
            return(
            <PlayersTable
              key={player.id}
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
      </ScrollView>
      <PlayerBasicSkillsModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
      <StandardOrangeSubTitle subtitle="REST"/>
    </View>
 )
}

const Lineup = ({navigation}) => {
  return(
    <View style={styles.container}>
      <HeaderImage/>
      <LineupPlayersTable navigation={navigation}/>
      <FabComponent navigation={navigation}/>
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
    ...Alignment.DisplayColumn,
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
    ...Typography.SmallFont,
    color: Colors.SOLIDWHITECOLOR,
  },
  tableRow: {
    ...Alignment.ColumnCenter,
  },
  tableRowText: {
    ...Alignment.ColumnCenter,
    ...Typography.SmallestFont,
    color: Colors.SOLIDBLACKCOLOR,
  }
})

export default Lineup;