import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles";
import CustomizableSubTitle from "../CustomizableSubTitle";

const SliderComponent = ({ subtitle, labelEnd, labelStart }) => {
  const [value, setValue] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubTitle subtitle={subtitle} />
      </View>
      <View style={styles.pickerWrapper}>
        <Slider
          minimumValue={1}
          maximumValue={5}
          value={value}
          step={1}
          onValueChange={(value) => setValue(value)}
          minimumTrackTintColor={Colors.SOLIDBLACKCOLOR}
          maximumTrackTintColor={Colors.SOLIDBLACKCOLOR}
        />
      </View>
      <View style={styles.labelWrapper}>
        <View style={styles.labelStart}>
          <Text style={styles.labelTextStyle}>{labelStart}</Text>
        </View>
        <View style={styles.labelEnd}>
          <Text style={styles.labelTextStyle}>{labelEnd}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
  },
  subtitleWrapper: {
    flex: 0.3,
    justifyContent: "center",
  },
  pickerWrapper: {
    flex: 0.5,
    justifyContent: "center",
  },
  labelWrapper: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelStart: {
    alignItems: "flex-start",
  },
  labelEnd: {
    alignItems: "flex-end",
  },
  labelTextStyle: {
    marginStart: 5,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SliderComponent;
