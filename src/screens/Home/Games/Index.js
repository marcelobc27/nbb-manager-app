import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"
import leagues from "../../../data/contents"
import StandardOrangeSubTitle from "../../../components/StandardOrangeSubTitle"

const NextGame = ({team}) => {
  return(
    <View style={styles.gamesNext}>
      <View style={styles.gamesNextDate}>
        <Text style={styles.gamesNextDateText}>Day 1</Text>
      </View>
      <View style={styles.gamesNextTeamsNamesWrapper}>
        <Text style={styles.GamesNextText}>{team}</Text>
        <Text style={styles.GamesNextText}>X</Text>
        <Text style={styles.GamesNextText}>{team}</Text>
      </View>
    </View>
  )
}

const GamesHighlighted = ({navigation}) => {
  return(
    <View style={styles.gameHighlightedWrapper}>
      <StandardOrangeSubTitle subtitle="ACTUAL GAME"/>                 
      <View style={styles.gameHighlightedTeamsWrapper}>
        <View style={styles.gameHighlightedTeams}>
        </View>
        <View style={styles.gameHighlightedTeams}>
          <Text>Team 2</Text>
        </View>
      </View>
      <View style={styles.gameHighlightedActionButtonsWrapper}>
        <TouchableOpacity 
          style={styles.gameHighlightedActionButton}
          onPress={() => navigation.navigate('LineupScreen')}>
          <Text style={styles.gameHighlightedActionButtonText}>LINEUP</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.gameHighlightedActionButton}>
          <Text style={styles.gameHighlightedActionButtonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
    </View> 
  )
}

const NextGames = () => {
  return(
    <View style={styles.gamesNextWrapper}>
      <ScrollView horizontal={true}>
        <NextGame team="Teste"/>
        <NextGame team="Teste2"/>
        <NextGame team="Teste3"/>
        <NextGame team="Teste4"/>
        <NextGame team="Teste5"/>
      </ScrollView>
    </View>
  )
}

const Games = ({navigation}) => {
  return(
    <View style={styles.gamesWrapper}>
      <GamesHighlighted navigation={navigation}/>
      <NextGames/>              
    </View>
  )
}

const styles = StyleSheet.create({
  gamesWrapper: {
    flex: 0.7,
    ...Alignment.DisplayColumn,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  gamesNextWrapper: {
    flex: 0.3,
    display: Alignment.DisplayRow,
    width: '100%',
    backgroundColor: Colors.SOLIDWHITECOLOR
    },
  gameHighlightedWrapper: {
    flex: 0.7,
    width: '100%',
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  gameHighlightedTeamsWrapper: {
    flex: 1,
    ...Alignment.RowCenterLeft,
  },
  gameHighlightedTeams: {
    margin: 2,
    flex: 0.5,
    height: '95%',
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.RowCenter
  },
  gameHighlightedActionButtonsWrapper: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.PRIMARYORANGECOLOR,
    borderBottomColor: Colors.SOLIDBLACKCOLOR,
    borderBottomWidth: 4
  },
  gameHighlightedActionButton: {
    color: Colors.VARIANTDARKPURPLE,
    backgroundColor: Colors.PRIMARYORANGECOLOR,
    marginLeft: 20,
    marginRight: 20  
  },
  gameHighlightedActionButtonText: {
    ...Typography.MediumFontBold,
    color: Colors.VARIANTDARKPURPLE
  },
  gamesNext: {
    flex: 0.8,
    width: 200,
    margin: 5,
    ...Alignment.ColumnCenter,
    borderWidth: 1,
    borderColor: Colors.SOLIDBLACKCOLOR,
    backgroundColor: Colors.VARIANTDARKPURPLE,
    color: Colors.NEUTRALGREYCOLOR,
  },
  gamesNextTeamsNamesWrapper: {
    flex: 0.7,
    width: 200,
    margin: 5,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.VARIANTDARKPURPLE,
    color: Colors.NEUTRALGREYCOLOR,
  },
  gamesNextDate: {
    flex: 0.3,
    width: '100%',
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  gamesNextDateText: {
    ...Typography.MediumFontBold,
  },
  GamesNextText: {
    ...Alignment.ColumnCenter,
    ...Typography.BigFontBold,
    color: Colors.NEUTRALGREYCOLOR,
  },
})

export default Games