import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import leagues from "../../../data/contents"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const NextGame = ({team}) => {
  return(
    <View style={styles.games_next}>
    <View style={styles.games_next_date_style}>
      <Text>Day 1</Text>
    </View>
    <View style={styles.games_next}>
      <Text style={styles.games_next_text_style}>{team}</Text>
      <Text style={styles.games_next_text_style}>X</Text>
      <Text style={styles.games_next_text_style}>{team}</Text>
    </View>
    </View>
  )
}

const GamesHighlighted = ({navigation}) => {
  return(
    <View style={styles.game_highlighted}>
    <View style={styles.game_highlighted_header_title}>
      <Text>Actual Game</Text>
    </View>                  
      <View style={styles.game_highlighted_teams_wrapper}>
        <View style={styles.game_highlighted_team}>
          <Text>Team 1</Text>
        </View>
        <View style={styles.game_highlighted_team}>
          <Text>Team 2</Text>
        </View>
      </View>
      <View style={styles.game_highlighted_action_buttons}>
        <TouchableOpacity 
          style={styles.action_button}
          onPress={() => navigation.navigate('LineupScreen')}><Text>Lineup</Text></TouchableOpacity>
        <TouchableOpacity style={styles.action_button}><Text>Play</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const NextGames = () => {
  return(
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
  )
}

const Games = ({navigation}) => {
  return(
    <View style={styles.games_wrapper}>
      <GamesHighlighted navigation={navigation}/>
      <NextGames/>              
    </View>
  )
}

const styles = StyleSheet.create({
  games_wrapper: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#bbb'
  },
  game_highlighted: {
    height: '70%',
    width: '100%',
    backgroundColor: '#741B47'
  },
  game_next: {
    height: '30%',
    width: '100%',
    backgroundColor: '#ffffff'
  },
  games_next: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    marginTop: 15,
    width: 200,
    margin: 5,
    backgroundColor: '#741B47',
    color: '#ffffff'
  },
  games_next_date_style: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE'
  },
  game_highlighted_header_title: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#ff9900',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  game_highlighted_action_buttons: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#ff9900',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  game_highlighted_teams_wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  game_highlighted_team: {
    margin: 2,
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#EEEEEE'
  },
  games_next_text_style: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: '#FFFFFF',
  },
  action_button: {
    ...Buttons.SmallButton,
    ...Typography.SmallFont,
    ...Alignment.ColumnCenter,
    color: Colors.VARIANTDARKPURPLE,
    backgroundColor: Colors.PRIMARYORANGECOLOR
  }
})

export default Games