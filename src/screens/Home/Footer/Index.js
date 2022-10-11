import { StyleSheet, Text, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const Footer = () => {
  return(
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>NBB MANAGER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerWrapper: {
    flex: 0.1,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.ColumnCenter
  },
  footerText: {
    ...Typography.MediumFont
  }
})

export default Footer