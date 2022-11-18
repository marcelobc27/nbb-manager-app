import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LineupTab from "../../screens/SimulateGame/Lineup";
import { Colors } from "../../styles/index";
import PlayByPlay from "../../screens/SimulateGame/PlayByPlay";
import Stats from "../../screens/SimulateGame/Stats";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          backgroundColor: Colors.PRIMARYORANGECOLOR,
          margin: 2,
        },
        tabBarLabelStyle: {
          width: "100%",
          color: Colors.VARIANTDARKPURPLE,
          fontSize: 16,
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.VARIANTDARKPURPLE,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "PLAY BY PLAY",
        }}
        name="PlayByPlayScreen"
        component={PlayByPlay}
      />
      <Tab.Screen
        options={{ title: "STATS"}}
        name="StatsScreen"
        component={Stats}
      />
      <Tab.Screen
        options={{ title: "LINEUP" }}
        name="LineupTabScreen"
        component={LineupTab}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
