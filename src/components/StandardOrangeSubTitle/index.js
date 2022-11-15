import { View, Text, StyleSheet } from "react-native"
import { Colors, Typography, Spacing, Buttons, Alignment } from "../../styles"

const StandardOrangeSubTitle = ({subtitle}) => {
  return(
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  subtitleWrapper: {
    flex: 1,
    ...Alignment.RowCenterLeft,
    backgroundColor: Colors.PRIMARYORANGECOLOR,
    borderBottomColor: Colors.SOLIDBLACKCOLOR
  },
  subtitleText: {
    marginLeft: 20,
    color: Colors.VARIANTDARKPURPLE,
    ...Typography.SmallFontBold
  }
})

export default StandardOrangeSubTitle

