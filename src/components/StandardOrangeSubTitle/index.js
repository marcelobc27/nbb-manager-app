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
    flex: 0.15,
    ...Alignment.RowCenterLeft,
    backgroundColor: Colors.PRIMARYORANGECOLOR,
    borderBottomWidth: 4,
    borderBottomColor: Colors.SOLIDBLACKCOLOR
  },
  subtitle_text: {
    marginLeft: 10,
    color: Colors.VARIANTDARKPURPLE,
    ...Typography.SmallFontBold
  }
})

export default StandardOrangeSubTitle

