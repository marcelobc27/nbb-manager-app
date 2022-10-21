import { createDrawerNavigator } from "@react-navigation/drawer"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"
import Lineup from "../../screens/Lineup"
import ModalTest from "../../screens/ModalTeste"
import DetailedPlayerSkills from "../../screens/DetailedPlayerSkills"
import GameStyle from "../../screens/GameStyle"
import Rotation from "../Rotation"
import { Colors } from "../../styles"
import PlayersDevelopment from "../../screens/PlayersDevelopment"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
        <Drawer.Group>
          <Drawer.Screen options={{title: "FEED" }} name="HomeScreeen" component={Home}/>
          <Drawer.Screen options={{title: "SIMULATE GAME"}} name="HomeEScreeen" component={Home}/>
          <Drawer.Screen options={{title: "CALENDAR"}} name="HomeeeScreeen" component={Home}/>
          <Drawer.Screen options={{title: "LINE-UP"}} name="LineupScreen" component={Lineup}/>
          <Drawer.Screen options={{title: "STANDING"}} name="StandingScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "STATISTICS"}} name="StatisticsScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "TRADES"}} name="TradesScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "FREE AGENTS"}} name="FreeAgentsScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "JUNIOR LEAGUE"}} name="JuniorLeagueScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "FINANCES"}} name="FinancesScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "SPONSORS"}} name="SponsorsScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "Detailed Skills"}} name="DetailedSkillsScreen" component={DetailedPlayerSkills}/>
          <Drawer.Screen options={{title: "Modal Teste"}} name="ModalTesteScreen" component={ModalTest}/>
          <Drawer.Screen options={{title: "GAME STYLE"}} name="GameStyleScreen" component={GameStyle}/>
          <Drawer.Screen options={{title: "ROTATION"}} name="RotationScreen" component={Rotation}/>
          <Drawer.Screen options={{title: "DEVELOPMENT"}} name="PlayersDevelopmentScreen" component={PlayersDevelopment}/>
        </Drawer.Group>
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
    marginLeft: 10,
  },
}

export default DrawerNavigator