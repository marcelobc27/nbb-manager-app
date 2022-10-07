import { View, Text, StyleSheet } from "react-native"
import { Colors, Typography, Spacing, Buttons, Alignment } from "../../styles"

const StandardOrangeSubTitle = ({subtitle}) => {
  return(
      <View style={styles.subtitle_wrapper}>
        <Text style={styles.subtitle_text}>{subtitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  subtitle_wrapper: {
    height: 40,
    ...Alignment.RowCenterLeft,
    backgroundColor: Colors.PRIMARYORANGECOLOR
  },
  subtitle_text: {
    marginLeft: 10,
    color: Colors.VARIANTDARKPURPLE,
    ...Typography.SmallFont
  }
})

export default StandardOrangeSubTitle

