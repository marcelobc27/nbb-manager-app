import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const Header = () => {
  return(
    <View style={styles.headerWrapper}>
      <Text style={{color: "#ffffff"}}>Logo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 0.2,
    backgroundColor: Colors.VARIANTBLUE,
    ...Alignment.ColumnCenter
  },
})


export default Header
