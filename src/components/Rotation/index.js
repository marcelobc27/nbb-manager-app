import { useState } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View, Text } from "react-native";
import { Alignment, Colors, Typography } from "../../styles";
import CustomizableSubTitle from "../CustomizableSubTitle";
import StandardOrangeSubTitle from "../StandardOrangeSubTitle";
import PickerComponent from "../Picker";
import FlatListComponent from "../FlatListComponent";

const RotationButtons = () => {
  return(
    <View style={styles.rotationButtonsWrapper}>
      <TouchableOpacity 
        style={[{backgroundColor: Colors.VARIANTBLUE}, styles.touchable]}
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
      <StandardOrangeSubTitle subtitle={subtitle}/>
      <FlatListComponent/>
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
        <CustomizableSubTitle subtitle="HOW MANY PLAYERS?" color={Colors.SOLIDWHITECOLOR}/>
        <PickerComponent width={80} height={50}/>
    </View>
  )
}

const Rotation = () => {
  return(
    <View style={styles.container}>
      <View style={styles.rotationWrapper}>
        <RotationHeader/>
        <RotationPlayersPositions/>
        <RotationButtons/>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...Alignment.ColumnCenter
  },
  rotationWrapper: {
    flex: 0.8,
    width: '95%',
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  rotationHeaderWrapper: {
    flex: 0.1,
    padding: 2,
    ...Alignment.RowCenterLeft,
    backgroundColor: Colors.VARIANTBLUE
  },
  rotationPlayersPositionsWrapper: {
    flex: 0.75,
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