import { useState } from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Button, DataTable } from 'react-native-paper'
import league from "../../data/contents"
import { PlayerBasicSkillsModal } from "../../components/PlayerBasicSkillsModal"

const PlayersTable = ({name, age, position, overrall, modalVisible, setModalVisible}) => {
  return(
    <DataTable.Row onPress={() => setModalVisible(!modalVisible)}>
      <DataTable.Cell>{name}</DataTable.Cell>
      <DataTable.Cell>{position}</DataTable.Cell>
      <DataTable.Cell>{age}</DataTable.Cell>
      <DataTable.Cell>{overrall}</DataTable.Cell>
    </DataTable.Row>
  )
}

const Lineup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.container}>
      <PlayerBasicSkillsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <View style={styles.title_wrapper}>
        <Text style={styles.screen_title}>TESTE</Text>
      </View>
      <View style={styles.image_wrapper}>     
      </View>
      <View style={styles.lipeup_wrapper}>
        <View style={styles.lineup_player_wrapper}>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Position</DataTable.Title>
            <DataTable.Title>Age</DataTable.Title>
            <DataTable.Title>Overrall</DataTable.Title>
          </DataTable.Header>
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
        </View>
        <View style={styles.lineup_options_button}>
            <Button>Rotation</Button>
            <Button>Statistics</Button>
            <Button>Evolution</Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0,
    backgroundColor: '#ffffff'
  },
  title_wrapper: {
    height: 50,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_wrapper: {
    height: 250,
    backgroundColor: '#aaa'
  },
  lipeup_wrapper: {
    height: 700,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  lineup_player_wrapper: {
    flexDirection: 'column',
    height: '95%',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  lineup_options_button: {
    display: 'flex',
    flexDirection: 'row',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9900',
  },
  screen_title: {
    fontFamily: 'Inconsolata',
    fontSize: 32,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  table_touchable_style: {
    fontFamily: 'Inconsolata',
    fontSize: 20,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  table_touchable_content_style: {
    margin: 10
  }
})

export default Lineup;