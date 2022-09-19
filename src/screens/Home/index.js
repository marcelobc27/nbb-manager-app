import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native"
import { Card, Button } from "react-native-paper"
import leagues from "../../data/contents"

const NextGame = ({team}) => {
  return(
    <View style={styles.games_next}>
      <Text style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: '#FFFFFF'
      }}>{team}</Text>
      <Text style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: '#FFFFFF'
      }}>X</Text>
      <Text style={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: '#FFFFFF'
      }}>{team}</Text>
    </View>
  )
}

const Home = ({navigation}) => {
      return(
        <View style={styles.container}>
            <View style={styles.hero_wrapper}>
              <Text style={{color: "#ffffff"}}>Logo</Text>
              <Button onPress={() => navigation.navigate('StandingScreeen')}>Standing</Button>
            </View>
            <View style={styles.games_wrapper}>
                <View style={styles.games_highlighted}>
                  <Text>Actual Game</Text> 
                  <View style={styles.teams_wrapper}>
                      <View style={{flex: 0.5}}>
                        <Text>Team 1</Text>
                      </View>
                      <View style={{flex: 0.5}}>
                        <Text>Team 2</Text>
                      </View>
                  </View>
                  <View style={styles.next_game_action_buttons}>
                      <Button onPress={() => navigation.navigate('LineupScreen')}>Lineup</Button>
                      <Button>Play</Button>
                  </View>
                </View>
                <View style={styles.game_next}>
                  <ScrollView horizontal={true}>
                    {
                      leagues.map((teams, index) => {
                        return(
                          teams.teams.map((team, index) => {
                            return(
                              <NextGame key={index} team={team.name}/>
                            )
                          })
                        )
                      })
                    }
                  </ScrollView>
                </View>
            </View>
            <View style={styles.additional_wrapper}>
              <Text>NBB MANAGER</Text>
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
    hero_wrapper: {
      height: 250,
      backgroundColor: '#34495e',
      alignItems: 'center',
      justifyContent: 'center'
    },
    games_wrapper: {
      height: 650,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#bbb'
    },
    games_highlighted: {
      height: '60%',
      width: '100%',
      backgroundColor: '#ffffff'
    },
    game_next: {
      height: '40%',
      width: '100%',
      backgroundColor: '#ffffff'
    },
    games_next: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
      width: 250,
      margin: 5,
      backgroundColor: '#2c3e50',
      color: '#ffffff'
    },
    additional_wrapper: {
      height: 100,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    next_game_action_buttons: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#ff9900',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    teams_wrapper: {
      flex: 1,
      flexDirection: 'row',
    }
})

export default Home