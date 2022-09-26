import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"
import Lineup from "../../screens/Lineup"
import PlayerModal from "../../screens/PlayerModal"
import { createDrawerNavigator } from "@react-navigation/drawer"

// const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Group>
          <Drawer.Screen options={{title: "Feed"}} name="HomeScreeen" component={Home}/>
          <Drawer.Screen options={{title: "Standing"}} name="StandingScreeen" component={Standing}/>
          <Drawer.Screen options={{title: "Calendar"}} name="CalendarScreeen" component={Calendar}/>
          <Drawer.Screen options={{title: "Lineup"}} name="LineupScreen" component={Lineup}/>
        </Drawer.Group>
        <Drawer.Group screenOptions={{ presentation: 'modal'}}>
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigator