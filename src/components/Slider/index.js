import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomizableSubTitle from "../CustomizableSubTitle";

const SliderComponent = ({ subtitle }) => {
  const [value, setValue] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubTitle subtitle={subtitle}/>
      </View>
      <View style={styles.pickerWrapper}>
        <Slider
          minimumValue={0}
          maximumValue={5}
          value={value}
          step={1}
          onValueChange={(value) => setValue(value)}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  subtitleWrapper: {
    flex: 0.4,
    justifyContent: "center"
  },
  pickerWrapper: {
    flex: 0.6,
    justifyContent: "center"
  }
})

export default SliderComponent;
