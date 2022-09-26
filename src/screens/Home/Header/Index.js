import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Typography, Spacing, Buttons, Alignment, Colors } from "../../../styles"

const Header = () => {
  return(
    <View style={styles.header_wrapper}>
      <Text style={{color: "#ffffff"}}>Logo</Text>
      <TouchableOpacity onPress={() => navigation.navigate('StandingScreeen')}><Text>Standing</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header_wrapper: {
    height: 250,
    backgroundColor: Colors.VARIANTBLUE,
    ...Alignment.ColumnCenter
  },
})


export default Header
