import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import Footer from "./Footer/Index"
import Header from "./Header/Index"
import Games from "./Games/Index"

const Home = () => {
  return(
    <View style={styles.container}>
      <View style={{flex: 0.2}}>
        <Header/>
      </View>
      <View style={{flex: 0.7}}>
        <Games/>
      </View>
      <View style={{flex: 0.1}}>
        <Footer/>
      </View>
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