import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../styles";

const StartGameButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} children="+">
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.SOLIDWHITECOLOR,
    position: "absolute",
    bottom: '4%'
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
    color: Colors.SOLIDWHITECOLOR
  },
  touchableText: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.SOLIDWHITECOLOR
  }
});

export default StartGameButton;
