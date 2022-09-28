import { StyleSheet, Text, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const Footer = () => {
  return(
    <View style={styles.footer_wrapper}>
      <Text>NBB MANAGER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer_wrapper: {
    flex: 0.1,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.ColumnCenter
  },
  footer_text: {
    ...Typography.MediumFont
  }
})

export default Footer