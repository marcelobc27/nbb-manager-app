import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../styles";

const StartGameButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.touchable}
      >
        <>+</>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.SOLIDWHITECOLOR,
    position: "absolute",
    bottom: "4%",
  },
  touchable: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 60,
    fontWeight: "bold",
    backgroundColor: "purple",
    color: Colors.SOLIDWHITECOLOR,
  }
});

export default StartGameButton;
