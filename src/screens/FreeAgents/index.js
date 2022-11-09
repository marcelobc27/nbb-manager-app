import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";
import { Modal, Portal, Provider } from "react-native-paper";
import { Colors } from "../../styles";
import CustomizableSubTitle from "../../components/CustomizableSubTitle";

const mock = {
  header: ["id", "name", "type", "value"],
  items: [
    {
      id: 1,
      name: "financeName01",
      type: "expenses",
      value: 60.0,
    },
    {
      id: 1,
      name: "financeName01",
      type: "expenses",
      value: 60.0,
    },
  ],
};

const FreeAgentsTable = ({showModal, header = [], items = []}) => {

  return (
    <View style={styles.tableWrapper}>
      <DataTable.Header>
        {header.map((h) => (
          <DataTable.Title onPress={showModal}>{h}</DataTable.Title>
        ))}
      </DataTable.Header>
      {
        items.map(i => (
          <DataTable.Row>
            {mock.header.map((c) => (
              c === Object.keys(i).toString()
              ?
              console.log("worked")
              : console.log(Object.keys(i))
            ))}
          </DataTable.Row>
        ))
      }
    </View>
  );
};

const ModalContent = () => {
  return (
    <View style={styles.modalViewWrapper}>
      <View style={styles.modalTitleWrapper}>
        <CustomizableSubTitle
          flex={1}
          subtitle="PLAYER NAME"
          alignment="center"
          color={Colors.SOLIDWHITECOLOR}
          backgroundColor={Colors.VARIANTDARKPURPLE}
        />
      </View>
      <View style={styles.modalContentWrapper}>
        <CustomizableSubTitle subtitle="YEARS OF CONTRACT" />
        <CustomizableSubTitle subtitle="PLAYER NAME" />
        <CustomizableSubTitle subtitle="SALARY" />
        <CustomizableSubTitle subtitle="PLAYER NAME" />
      </View>
      <View style={styles.modalButtonWrapper}>
        <TouchableOpacity style={styles.makeOfferButton}>
          <Text style={styles.makeOfferButtonText}>MAKE AN OFFER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FreeAgentsModal = ({content}) => {
  const [visible, setVisible] = useState(false);

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
            {content}
          </Modal>
        </Portal>
        <FreeAgentsTable showModal={showModal} header={mock.header} items={mock.items}/>
      </Provider>
    </>
  );
};

const FreeAgents = () => {
  return (
    <View style={styles.container}>
      <FreeAgentsModal content={<ModalContent />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  tableWrapper: {
    flex: 1,
  },
  modalContainerStyle: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "red",
  },
  modalViewWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  modalTitleWrapper: {
    flex: 0.15
  },
  modalContentWrapper: {
    flex: 0.7
  },
  modalButtonWrapper: {
    flex: 0.15
  },
  makeOfferButton: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: Colors.VARIANTGREEN
  },
  makeOfferButtonText: {
    color: Colors.SOLIDWHITECOLOR,
    fontSize: 20
  }
});

export default FreeAgents;
