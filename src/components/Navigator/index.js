import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Calendar from "../../screens/Calendar"
import Home from "../../screens/Home"
import Standing from "../../screens/Standing"

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreeen" component={Home}/>
                <Stack.Screen name="StandingScreeen" component={Standing}/>
                <Stack.Screen name="CalendarScreeen" component={Calendar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator