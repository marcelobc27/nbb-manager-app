import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles";

const PickerComponent = ({ width, height, backgroundColor, color }) => {
  const [type, setType] = useState("Select a Strategy");

  return (
    <View style={styles.pickerWrapper}>
      <Picker
        mode="dropdown"
        style={[{
          width: `${width}%`,
          color: `${color ? color : Colors.SOLIDBLACKCOLOR}`,
          height: `${height ? height : "30px"}`,
          backgroundColor: `${backgroundColor ? backgroundColor : Colors.SOLIDWHITECOLOR}`,
          }, styles.picker]}
        selectedValue={type}
        onValueChange={(value) => setType(value)}
      >
        <Picker.Item label="SELECT A VALUE" value="" />
        <Picker.Item label="Links" value="Links" />
        <Picker.Item label="Location" value="Location" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    flex: 1
  },
  picker: {
    borderBottomWidth: 4,
    borderColor: "black",
    fontSize: 20,
    padding: 5,
    alignSelf: "center",
  }
})

export default PickerComponent
