import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import Footer from "./Footer/Index"
import Header from "./Header/Index"
import Games from "./Games/Index"

const Home = () => {
  return(
    <View style={styles.container}>
      <Header/>
      <Games/>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  }
})

export default Home