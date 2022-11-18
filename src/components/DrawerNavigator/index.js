import { 
  createDrawerNavigator,   
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
from "@react-navigation/drawer"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"
import Lineup from "../../screens/Lineup"
import DetailedPlayerSkills from "../../screens/DetailedPlayerSkills"
import GameStyle from "../../screens/GameStyle"
import Rotation from "../Rotation"
import { Alignment, Colors, Typography } from "../../styles"
import PlayersDevelopment from "../../screens/PlayersDevelopment"
import Statistics from "../../screens/Statistics"
import Trades from "../../screens/Trades"
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native"
import JuniorLeague from "../../screens/JuniorLeague"
import FreeAgents from "../../screens/FreeAgents"
import SimulateGame from "../../screens/SimulateGame"
import Finances from "../../screens/Finances"
import Sponsors from "../../screens/Sponsors"
import Calendar from "../../screens/Calendar"

const Drawer = createDrawerNavigator()

const drawerItems = [
  //GameMarkdown
  {"id": "1", "title": "GAME", "name": "GameMarkdown", "component": Home, "type": "Markdown"},
  {"id": "2", "title": "FEED", "name": "HomeScreen", "component": Home, "type": "Page"},
  {"id": "3", "title": "SIMULATE GAME", "name": "SimulateGameScreen", "component": SimulateGame, "type": "Page"},
  {"id": "4", "title": "CALENDAR", "name": "CalendarScreen", "component": Calendar, "type": "Page"},
  //Management Markdown
  {"id": "5", "title": "MANAGEMENT", "name": "ManagementMarkdown", "component": Home, "type": "Markdown"},
  {"id": "6", "title": "LINEUP", "name": "LineupScreen", "component": Lineup, "type": "Page"},
  {"id": "7", "title": "STANDINGS", "name": "StandingsScreen", "component": Standing, "type": "Page"},
  {"id": "8", "title": "STATISTICS", "name": "StatisticsScreen", "component": Statistics, "type": "Page"},
  {"id": "9", "title": "GAMESTYLE", "name": "GameStyleScreen", "component": GameStyle, "type": "Component"},
  {"id": "10", "title": "DEVELOPMENT", "name": "DevelopmentScreen", "component": PlayersDevelopment, "type": "Component"},
  {"id": "11", "title": "DETAILED SKILLS", "name": "DetailedSkillsScreen", "component": DetailedPlayerSkills, "type": "Component"},
  {"id": "12", "title": "ROTATION", "name": "RotationScreen", "component": Rotation, "type": "Component"},
  //Market Markdown
  {"id": "13", "title": "MARKET", "name": "MarketMarkdown", "component": Home, "type": "Markdown"},
  {"id": "14", "title": "TRADES", "name": "TradesScreen", "component": Trades, "type": "Page"},
  {"id": "15", "title": "FREE AGENTS", "name": "FreeAgentsScreen", "component": FreeAgents, "type": "Page"},
  {"id": "16", "title": "JUNIORS LEAGUE", "name": "JuniorLeagueScreen", "component": JuniorLeague, "type": "Page"},
  {"id": "17", "title": "FINANCES", "name": "FinancesScreen", "component": Finances, "type": "Page"},
  {"id": "18", "title": "SPONSORS", "name": "SponsorsScreen", "component": Sponsors, "type": "Page"},
  //Honors Room Markdown
  {"id": "19", "title": "HONORS ROOM", "name": "HonorsRoomMarkdown", "component": Home, "type": "Markdown"},
  {"id": "20", "title": "LEGENDS", "name": "LegendsScreen", "component": Home, "type": "Page"},
  {"id": "21", "title": "AWARDS", "name": "AwardsScreen", "component": Home, "type": "Page"},
]

function CustomDrawerContent({ navigation }) {
  return(
    <>
    {
      drawerItems.map((item, index) => {
          if(item.type === "Page") { 
            return(
              <TouchableOpacity
                key={item.id}
                style={styles.pageTypeButton}
                onPress={() => {
                navigation.navigate(item.name);
              }}
              >
                <Text style={styles.pageTypeButtonText}>{item.title}</Text>
              </TouchableOpacity>
           )} else if (item.type === "Markdown") {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.markdownTypeButton}
                activeOpacity={1}
              >
                <Text style={styles.markdownTypeButtonText}>{item.title}</Text>
              </TouchableOpacity>
           )}
      })
    }
    </>
  )
}

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator 
        initialRouteName="HomeScreen" 
        screenOptions={screenOptions} 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          {
            drawerItems.map((item, index) => {
              return(
                <Drawer.Screen key={index} options={{title: item.title}} name={item.name} component={item.component}/>
              )
            })
          }
      </Drawer.Navigator>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.PRIMARYORANGECOLOR,
    height: 50
  },
  headerTintColor: Colors.VARIANTDARKPURPLE,
  drawerContentStyle: {
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  drawerActiveBackgroundColor: Colors.SOLIDWHITECOLOR,
  drawerActiveTintColor: Colors.SOLIDBLACKCOLOR,
  drawerInactiveTintColor: Colors.VARIANTDARKPURPLE,
  drawerItemStyle: {
    borderRadius: 0,
    marginLeft: 10
  },
  drawerLabelStyle: {
    ...Typography.MediumFontBold
  }
}

const styles = StyleSheet.create({
  pageTypeButton: {
    flex: 1,
    margin: 4,
    ...Alignment.ColumnCenterLeft,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  pageTypeButtonText: {
    color: Colors.VARIANTDARKPURPLE,
    paddingLeft: 10,
    ...Typography.MediumFontBold
  },
  markdownTypeButton: {
    flex: 1,
    ...Alignment.ColumnCenterLeft,
    backgroundColor: Colors.VARIANTDARKPURPLE
  },
  markdownTypeButtonText: {
    color: Colors.SOLIDWHITECOLOR,
    paddingLeft: 6,
    ...Typography.MediumFontBold
  }
})

export default DrawerNavigator