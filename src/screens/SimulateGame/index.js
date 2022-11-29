import { View } from "react-native";
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle";
import TopTabNavigator from "../../components/TopTapNavigator";
import { Colors } from "../../styles";
import Header from "../Home/Header/Index";
import ScoreBoard from "./ScoreBoard";

const SimulateGame = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <Header />
      </View>
      <View style={{flex: 0.065}}>
          <StandardOrangeSubTitle subtitle="PLAYING" />
      </View>
      <View style={{flex: 0.2}}>
        <ScoreBoard/>
      </View>
      <View style={{flex: 0.635}}>
        <TopTabNavigator/>
      </View>
    </View>
  );
};

export default SimulateGame;
