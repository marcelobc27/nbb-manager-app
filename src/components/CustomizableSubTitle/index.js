import { View, Text, StyleSheet } from "react-native"
import { Colors, Typography, Spacing, Buttons, Alignment } from "../../styles"

const CustomizableSubTitle = ({subtitle, flex, backgroundColor, color}) => {
  return(
      <View style={[{flex: flex,backgroundColor: backgroundColor},styles.subtitle_wrapper]}>
        <Text style={[{color: color}, styles.subtitle_text]}>{subtitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  subtitle_wrapper: {
    height: 40,
    ...Alignment.RowCenterLeft,
  },
  subtitle_text: {
    marginLeft: 10,
    ...Typography.SmallFont
  }
})

export default CustomizableSubTitle

