import { createDrawerNavigator } from "@react-navigation/drawer"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"
import Lineup from "../../screens/Lineup"
import ModalTest from "../../screens/ModalTeste"
import DetailedPlayerSkills from "../../screens/DetailedPlayerSkills"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Group>
          <Drawer.Screen options={{title: "FEED"}} name="HomeScreeen" component={Home}/>
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
        </Drawer.Group>
      </Drawer.Navigator>
  )
}

export default DrawerNavigator