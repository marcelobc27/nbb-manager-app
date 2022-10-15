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
      <TouchableOpacity activeOpacity={1} style={styles.innerTouchableView}>
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
    position: 'absolute',
    marginBottom: 82,
    marginRight: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    width: '50%',
    alignItems: 'flex-end'
  }
})

export default CustomizableOverlay