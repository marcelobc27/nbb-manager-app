import {useState} from 'react';
import {View, Text, Animated, Button, TouchableHighlight, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Colors } from '../../styles';
import CustomizableOverlay from '../CustomizableOverlay';

const TouchableTitle = ({title}) => {
  return(
    <TouchableOpacity 
      style={styles.overlayButton}
    >
      <Text style={styles.overlayButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const OverlayView = ({visible, setVisible}) => {
  return(
    <View>
    <CustomizableOverlay overlayVisible={visible} setOverlayVisible={setVisible} justify={'flex-end'} alignment={'flex-end'}>
    <View style={styles.overlay}>
      <TouchableTitle title="PlayBook"/>
      <TouchableTitle title="Game Style"/>
      <TouchableTitle title="Development"/>
      <TouchableTitle title="Rotation"/>
    </View>
    </CustomizableOverlay>
    </View>
  )
}

const FabComponent = () => {
  const [visibleOverlay, setVisibleOverlay] = useState(false)
  const [icon, setIcon] = useState('plus')

  const ToggleIcon = () => {
    {
      visibleOverlay === false 
      ? setIcon('minus') 
      : setIcon('plus')
    }
  }

  return(
    <View>
      <FAB
        mode="elevated"
        icon={icon}
        style={styles.fab}
        onPress={() => 
          setVisibleOverlay(!visibleOverlay) ||
          ToggleIcon()
        }
      />
      <OverlayView visible={visibleOverlay} setVisible={setVisibleOverlay}/>
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000',
  },
  overlayButton: {
    margin: 5,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },
  overlayButtonText: {
    color: 'white', 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end', 
    fontSize: 20
  }
})

export default FabComponent