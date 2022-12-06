import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Typography } from "../../styles";

const PickerComponent = ({ backgroundColor, color, flex, margin, width }) => {
  const [type, setType] = useState("Select a Strategy");

  return (
    <View style={styles.pickerWrapper}>
      <Picker
        mode="dropdown"        
        style={[{
          width: `${width}%`,
          margin: margin,
          flex: flex,
          color: `${color ? color : Colors.SOLIDBLACKCOLOR}`,
          backgroundColor: `${backgroundColor ? backgroundColor : Colors.SOLIDWHITECOLOR}`,
          }, styles.picker]}
        selectedValue={type}
        onValueChange={(type) => setType(type)}
      >
          <Picker.Item label="SELECT A VALUE" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="2" value="2" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  picker: {
    ...Typography.SmallFontBold,
    borderColor: "transparent",
    padding: 5,
    alignContent: "center",
    justifyContent: 'center'
  }
})

export default PickerComponent
