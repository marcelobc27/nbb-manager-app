import { View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Alignment } from "../../styles";

const CustomizableOverlay = ({overlayVisible, setOverlayVisible, justify, alignment,children}) => {
  return(
    <View style={styles.centeredViewOverlay}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={overlayVisible}
        onRequestClose={() => {
          setOverlayVisible(!overlayVisible);
        }}
      >
      <TouchableOpacity
        activeOpacity={1}
        style={[{justifyContent: justify, alignItems: alignment}, styles.outerTouchableView]}
        onPressOut={() => setOverlayVisible(!overlayVisible)}
      >
      <TouchableOpacity 
        activeOpacity={1} 
        style={[{justifyContent: justify, alignItems: alignment}, styles.innerTouchableView]}
        onPress={() => setOverlayVisible(!overlayVisible)}
        >
        {children}
      </TouchableOpacity>
      </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredViewOverlay: {
    flex: 1,
  },
  outerTouchableView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerTouchableView: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    alignItems: 'flex-end'
  }
})

export default CustomizableOverlay