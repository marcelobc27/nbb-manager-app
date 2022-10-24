import { View, TouchableOpacity, Modal, StyleSheet } from "react-native";

const CustomizableModal = ({modalVisible, setModalVisible, children}) => {
  return(
    <View style={styles.centeredViewModal}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <TouchableOpacity
        activeOpacity={1} 
        style={styles.outerTouchableView}
        onPressOut={() => setModalVisible(!modalVisible)}
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
  centeredViewModal: {
    flex: 1,
  },
  outerTouchableView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerTouchableView: {
    flex: 0.8,
    backgroundColor: 'red',
    width: '95%'
  }
})

export default CustomizableModal