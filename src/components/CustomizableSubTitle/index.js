import { View, Text, StyleSheet } from "react-native"
import { Colors, Typography, Spacing, Buttons, Alignment } from "../../styles"

const CustomizableSubTitle = ({subtitle, flex, backgroundColor, color, alignment}) => {
  return(
      <View style={[{flex: flex,backgroundColor: backgroundColor, alignItems: alignment, justifyContent: 'center'},styles.subtitle_wrapper]}>
        <Text style={[{color: color}, styles.subtitle_text]}>{subtitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  subtitle_wrapper: {
    height: 40,
  },
  subtitle_text: {
    marginLeft: 10,
    ...Typography.SmallFontBold
  }
})

export default CustomizableSubTitle

