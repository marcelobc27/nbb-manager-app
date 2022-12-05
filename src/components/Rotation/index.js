import { useState } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View, Text } from "react-native";
import { Alignment, Colors, Typography } from "../../styles";
import CustomizableSubTitle from "../CustomizableSubTitle";
import PickerComponent from "../Picker";
import FlatListComponent from "../FlatListComponent";
import { Provider } from "react-native-paper";
import { ColumnCenter } from "../../styles/alignment";
import players from '../../data/players'

const RotationButtons = () => {
  return(
    <View style={styles.rotationButtonsWrapper}>
      <TouchableOpacity 
        style={[{backgroundColor: Colors.DARKGREYCOLOR}, styles.touchable]}
      >
        <Text style={styles.touchableText}>ADVANCED SETTINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[{backgroundColor: Colors.VARIANTGREEN}, styles.touchable]}
      >
        <Text style={styles.touchableText}>SAVE CHANGES</Text>
      </TouchableOpacity>
    </View>
  )
}

const RotationPlayersPositionsSection = ({subtitle}) => {
  return(
    <View style={styles.rottaionPlayersPositionsSection}>
      <View style={{flex: 0.1}}>
        <CustomizableSubTitle flex={1} subtitle={subtitle} backgroundColor={Colors.PRIMARYORANGECOLOR} alignment="center"/>
      </View>
      <View style={{flex: 0.9}}>
        <FlatListComponent data={players}/>
      </View>
    </View>
  )
}

const RotationPlayersPositions = () => {
  return(
    <View style={styles.rotationPlayersPositionsWrapper}>
      <RotationPlayersPositionsSection subtitle="STARTERS"/>
      <RotationPlayersPositionsSection subtitle="BENCH"/>
    </View>
  )
}

const RotationHeader = () => {
  return(
    <View style={styles.rotationHeaderWrapper}>
      <View style={{flex: 0.7}}>
        <CustomizableSubTitle subtitle="HOW MANY PLAYERS?" color={Colors.SOLIDWHITECOLOR}/>
      </View>
      <View style={{flex: 0.3, ...ColumnCenter}}>
        <PickerComponent flex={1} margin={4}/>
      </View>
    </View>
  )
}

const Rotation = () => {
  return(
    <Provider>
    <View style={styles.container}>
      <View style={styles.rotationWrapper}>
        <RotationHeader/>
        <RotationPlayersPositions/>
        <RotationButtons/>
      </View>
    </View>
    </Provider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rotationWrapper: {
    flex: 1,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  rotationHeaderWrapper: {
    flex: 0.075,
    ...Alignment.RowCenterLeft,
    backgroundColor: Colors.DARKGREYCOLOR
  },
  rotationPlayersPositionsWrapper: {
    flex: 0.775,
    flexDirection: 'row'
  },
  rottaionPlayersPositionsSection: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 5
  },
  rotationButtonsWrapper: {
    flex: 0.15,
  },
  touchable: {
    flex: 0.5,
    ...Alignment.ColumnCenter
  },
  touchableText: {
    color: Colors.SOLIDWHITECOLOR,
    ...Typography.SmallFontBold
  }
})

export default Rotation