import {useEffect, useState} from 'react';
import {View, Text, Animated, Button, TouchableHighlight, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Alignment, Colors, Spacing, Typography } from '../../styles';
import CustomizableOverlay from '../CustomizableOverlay';

const TouchableTitle = ({title, pageName, navigation, visible, setVisible}) => {
  return(
    <TouchableOpacity 
      style={styles.overlayButton}
      onPress={() => {
        navigation.navigate(pageName)
        setVisible(!visible)
      }}
    >
      <Text style={styles.overlayButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const OverlayView = ({visible, setVisible, navigation}) => {
  return(
    <View>
    <CustomizableOverlay overlayVisible={visible} setOverlayVisible={setVisible} justify={'flex-end'} alignment={'flex-end'}>
    <View style={styles.overlay}>
      <TouchableTitle title="PlayBook"/>
      <TouchableTitle title="Game Style" pageName="GameStyleScreen" navigation={navigation} visible={visible} setVisible={setVisible}/>
      <TouchableTitle title="Development"/>
      <TouchableTitle title="Rotation"/>
    </View>
    </CustomizableOverlay>
    </View>
  )
}

const FabComponent = ({navigation}) => {
  const [visibleOverlay, setVisibleOverlay] = useState(false)
  const [icon, setIcon] = useState('')

  const ToggleIcon = () => {
    {
      visibleOverlay === false
      ? setIcon('plus') 
      : setIcon('minus')
    }
  }

  useEffect(() => {
    ToggleIcon()
  }, [visibleOverlay])

  return(
    <View>
      <FAB
        mode="elevated"
        icon={icon}
        style={styles.fab}
        onPress={() => {
          setVisibleOverlay(!visibleOverlay)
        }}
      />
      <OverlayView visible={visibleOverlay} setVisible={setVisibleOverlay} navigation={navigation}/>
    </View>
  )  
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: Colors.VARIANTBLUE,
    margin: 16,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    ...Alignment.ColumnBottomRight,
    marginRight: 16,
    marginBottom: 82
  },
  overlayButton: {
    width: '100%',
    ...Spacing.ButtonSpacing,
    ...Alignment.ColumnTopRight,
  },
  overlayButtonText: {
    color: Colors.SOLIDWHITECOLOR, 
    ...Alignment.ColumnBottomRight,
    ...Typography.SmallFont
  }
})

export default FabComponent