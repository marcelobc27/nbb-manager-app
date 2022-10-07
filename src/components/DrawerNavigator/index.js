import { createDrawerNavigator } from "@react-navigation/drawer"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"
import Lineup from "../../screens/Lineup"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Group>
          <Drawer.Screen options={{title: "Feed"}} name="HomeScreeen" component={Home}/>
          <Drawer.Screen options={{title: "Standing"}} name="StandingScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "Calendar"}} name="CalendarScreeen" component={Calendar}/>
          <Drawer.Screen options={{title: "Lineup"}} name="LineupScreen" component={Lineup}/>
        </Drawer.Group>
      </Drawer.Navigator>
  )
}

export default DrawerNavigator