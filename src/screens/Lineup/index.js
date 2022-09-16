import { useState } from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Button } from 'react-native-paper'
import contents from "../../data/contents"
import PlayerModal from "../PlayerModal"

const Lineup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
      <View style={styles.title_wrapper}>
        <Text style={styles.screen_title}>TESTE</Text>
      </View>
      <View style={styles.image_wrapper}>     
      </View>
      <View style={styles.lipeup_wrapper}>
        <View style={styles.lineup_player_wrapper}>
        {contents.map(team => {
          return(
            team.league.teams.map((players, index) => {
              if(players.name === 'Paraná'){
                return(
                  players.players.map((player, index) => {
                    return(
                      <TouchableOpacity
                        style={styles.table_touchable_style}
                        key={index}
                        onPress={() => {
                        setModalVisible(!modalVisible)
                        }}>
                          <Text>
                          {player.name}
                          </Text>
                      </TouchableOpacity>
                      ) 
                    })
                )}
            })
          )
        })}
        </View>
        <View style={styles.lineup_options_button}>
            <Button>Rotation</Button>
            <Button>Statistics</Button>
            <Button>Evolution</Button>
        </View>
      </View>
      <PlayerModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
    backgroundColor: '#bbb'
  },
  lineup_player_wrapper: {
    height: '95%'
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
    color: '#000000',
    margin: 5,
  }
})

export default Lineup;