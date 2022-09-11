import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Lineup from "../../screens/Lineup"
import Standing from "../../screens/Standing"

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={{title: "Pagina Inicial"}} name="HomeScreeen" component={Home}/>
        <Stack.Screen name="StandingScreeen" component={Standing}/>
        <Stack.Screen name="CalendarScreeen" component={Calendar}/>
        <Stack.Screen name="LineupScreen" component={Lineup}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator