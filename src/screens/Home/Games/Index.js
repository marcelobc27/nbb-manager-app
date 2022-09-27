import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"
import leagues from "../../../data/contents"
import SubTitle from "../../../components/SubTitle"

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
      <SubTitle subtitle="Actual Game"/>                 
      <View style={styles.game_highlighted_teams_wrapper}>
        <View style={styles.game_highlighted_team}>
          <Text>Team 1</Text>
        </View>
        <View style={styles.game_highlighted_team}>
          <Text>Team 2</Text>
        </View>
      </View>
      <View style={styles.game_highlighted_action_buttons_wrapper}>
        <TouchableOpacity 
          style={styles.game_highlighted_action_button}
          onPress={() => navigation.navigate('LineupScreen')}><Text>Lineup</Text></TouchableOpacity>
        <TouchableOpacity style={styles.game_highlighted_action_button}><Text>Play</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const NextGames = () => {
  return(
    <View style={styles.games_next_wrapper}>
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
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  game_highlighted: {
    height: '70%',
    width: '100%',
    backgroundColor: Colors.VARIANTDARKPURPLE
  },
  games_next_wrapper: {
    height: '30%',
    width: '100%',
    backgroundColor: Colors.SOLIDWHITECOLOR
    },
  games_next: {
    height: '80%',
    marginTop: 15,
    width: 200,
    margin: 5,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.VARIANTDARKPURPLE,
    color: Colors.NEUTRALGREYCOLOR,
  },
  games_next_date_style: {
    height: '20%',
    width: '100%',
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  game_highlighted_action_buttons_wrapper: {
    flex: 0.1,
    ...Alignment.RowCenterRight,
    backgroundColor: Colors.PRIMARYORANGECOLOR
  },
  game_highlighted_teams_wrapper: {
    flex: 1,
    ...Alignment.RowCenterLeft
  },
  game_highlighted_team: {
    margin: 2,
    flex: 0.5,
    height: '100%',
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.RowCenter
  },
  games_next_text_style: {
    ...Alignment.ColumnCenter,
    ...Typography.BigFont,
    color: Colors.NEUTRALGREYCOLOR,
  },
  game_highlighted_action_button: {
    ...Buttons.SmallButton,
    ...Typography.SmallFont,
    ...Alignment.ColumnCenter,
    color: Colors.VARIANTDARKPURPLE,
    backgroundColor: Colors.PRIMARYORANGECOLOR
  }
})

export default Games