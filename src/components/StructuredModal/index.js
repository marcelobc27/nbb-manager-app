import { StyleSheet } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { Colors } from "../../styles";

const StructuredModal = ({modalContent, viewContent, state}) => {
  const {visible, setVisible} = state

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainerStyle}
          >
            {modalContent}
          </Modal>
        </Portal>
          {viewContent}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainerStyle: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
})

export default StructuredModal