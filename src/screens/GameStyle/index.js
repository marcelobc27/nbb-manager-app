import { StyleSheet, Text, View } from "react-native"
import CustomizableSubTitle from '../../components/CustomizableSubTitle'
import { Colors } from "../../styles"

const Header = () => {
  return(
    <View style={styles.header}>
      <View style={styles.headerCoachPotential}>
        <CustomizableSubTitle 
          subtitle="A+" 
          flex={1} 
          backgroundColor={Colors.VARIANTBLUE} 
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.headerCoachInformation}>
        <CustomizableSubTitle 
          subtitle="COACH NAME" 
          flex={1} 
          backgroundColor={Colors.VARIANTBLUE} 
          color={Colors.SOLIDWHITECOLOR}
        />
        <CustomizableSubTitle 
          subtitle="COACH AGE" 
          flex={1} 
          backgroundColor={Colors.VARIANTBLUE} 
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
    </View>
  )
}

const StarPlayers = () => {
  return(
    <View>

    </View>
  )
}

const SliderStrategies = () => {
  return(
    <View>

    </View>
  )
}

const SelectStrategies = () => {
  return(
    <View>

    </View>
  )
}

const MainContent = () => {
  return(
    <View style={styles.mainContent}>
      <StarPlayers/>
      <SliderStrategies/>
      <SelectStrategies/>
    </View>
  )
}

const GameStyle = () => {
  return(
    <View style={styles.container}>
      <Header/>
      <MainContent/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    flex: 0.15,
    backgroundColor: 'yellow'
  },
  headerCoachInformation: {
    flex: 0.7,
    flexDirection: 'column'
  },
  headerCoachPotential: {
    flex: 0.3,
    width: '100%',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 0.85,
    flexDirection: 'column',
    backgroundColor: Colors.SOLIDWHITECOLOR
  }
})

export default GameStyle