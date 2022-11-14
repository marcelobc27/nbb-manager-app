import { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import CustomizableSubTitle from '../../components/CustomizableSubTitle'
import PickerComponent from "../../components/Picker"
import { Colors } from "../../styles"

const Header = () => {
  return(
    <View style={styles.header}>
      <View style={styles.headerCoachPotential}>
        <CustomizableSubTitle 
          subtitle="A+" 
          flex={1} 
          backgroundColor={Colors.SOLIDBLACKCOLOR} 
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.headerCoachInformation}>
        <CustomizableSubTitle 
          subtitle="COACH NAME" 
          flex={1} 
          backgroundColor={Colors.SOLIDBLACKCOLOR} 
          color={Colors.SOLIDWHITECOLOR}
          alignment="center"
        />
        <CustomizableSubTitle 
          subtitle="COACH AGE" 
          flex={1} 
          backgroundColor={Colors.SOLIDBLACKCOLOR} 
          color={Colors.SOLIDWHITECOLOR}
          alignment="center"
        />
      </View>
    </View>
  )
}

const StarPlayers = () => {
  return(
    <View style={styles.starPlayersWrapper}>
      <View style={styles.starPlayers}>
        <View style={styles.starPlayersSections}>
          <CustomizableSubTitle subtitle="STAR PLAYER"/>
          <PickerComponent width={90} height={40} backgroundColor={Colors.PRIMARYORANGECOLOR} color={Colors.VARIANTDARKPURPLE}/>
          <PickerComponent width={90} height={40} backgroundColor={Colors.PRIMARYORANGECOLOR} color={Colors.VARIANTDARKPURPLE}/>
        </View>
        <View style={styles.starPlayersSections}>
          <CustomizableSubTitle subtitle="FUNCTION"/>
          <PickerComponent width={90}  height={40} backgroundColor={Colors.PRIMARYORANGECOLOR} color={Colors.VARIANTDARKPURPLE}/>
          <PickerComponent width={90}  height={40} backgroundColor={Colors.PRIMARYORANGECOLOR} color={Colors.VARIANTDARKPURPLE}/>
        </View>
      </View>
    </View>
  )
}

const SliderComponent = () => {
  return(
    <View>

    </View>
  )
}

const SliderStrategies = () => {
  return(
    <View style={styles.sliderStrategiesWrapper}>
      <CustomizableSubTitle subtitle="PAINT"/>
      <CustomizableSubTitle subtitle="MID-RANGE"/>
      <CustomizableSubTitle subtitle="3PT SHOOT"/>
      <CustomizableSubTitle subtitle="OFFENSIVE PACE"/>
      <CustomizableSubTitle subtitle="DEFENSIVE PRESSURE"/>
      <SliderComponent/>
    </View>
  )
}

const SelectStrategies = () => {
  return(
    <View style={styles.selectStrategiesWrapper}>
      <CustomizableSubTitle subtitle="OFFENSIVE STRATEGY"/>
      <PickerComponent width={90} height={40}/>
      <CustomizableSubTitle subtitle="DEFENSIVE STRATEGY"/>
      <PickerComponent width={90} height={40}/>
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
    flex: 0.10,
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
    flex: 0.90,
    flexDirection: 'column',
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  starPlayersWrapper: {
    flex: 0.2,
    flexDirection: 'row'
  },
  starPlayers: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  starPlayersSections: {
    flex: 0.5, 
    height: '100%', 
    backgroundColor: Colors.NEUTRALGREYCOLOR, 
    justifyContent: 'center'
  },
  sliderStrategiesWrapper: {
    flex: 0.6,
  },
  selectStrategiesWrapper: {
    flex: 0.2
  },
})

export default GameStyle