import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={{color: "#ffffff"}}>Logo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Colors.DARKGREYCOLOR,
    ...Alignment.ColumnCenter
  },
})

export default Header
