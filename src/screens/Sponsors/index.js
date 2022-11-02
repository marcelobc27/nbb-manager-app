import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"
import { Modal, Portal, Provider } from 'react-native-paper';
import sponsors from "../../data/sponsor"
import { Colors } from "../../styles"

const SponsorSection = ({name, income, years, type, showModal}) => {
  const [backgroundColor, setBackgroundColor] = useState('')

  const changeColor = () => {
    {
      type === 'Golden'
      ? setBackgroundColor('#F1C40F')
      : type === 'Silver'
      ? setBackgroundColor('#B7B7B7')
      : setBackgroundColor('#EFEFEF')
    }
  }

  useEffect(() => {
    changeColor()
  }, [backgroundColor])

  return(
    <View style={styles.sponsorWrapper}>
      <TouchableOpacity 
        style={[{backgroundColor: backgroundColor}, styles.sponsorInfoWrapper]}
        onPress={showModal}
      >
        <Text style={styles.sponsorNameText}>{name}</Text>
        <Text style={styles.contractYearText}>{`${years} YEARS`}</Text>
      </TouchableOpacity>
      <View style={styles.sponsorValueWrapper}>
        <Text style={styles.contractYearText}>{`${income}.000,00`}</Text>
      </View>
    </View>
  )
}

const SponsorModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return(
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainerStyle}>
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Break the Contract</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
      {sponsors.map((sponsor) => {
        return(
          <SponsorSection key={sponsor.id} name={sponsor.name} type={sponsor.type} years={sponsor.contractYears} income={sponsor.monthlyIncome} showModal={showModal}/>
        )
      })}
    </>
  )
}

const Sponsors = () => {
  return(
    <View style={styles.sponsorContainer}>
      <Provider>
        <SponsorModal/>  
      </Provider>
    </View>
  )   
}

const styles = StyleSheet.create({
  sponsorContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  sponsorWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  sponsorInfoWrapper: {
    flex: 0.7,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sponsorValueWrapper: {
    flex: 0.3,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  contractYearText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  sponsorNameText: {
    fontSize: 24
  },
  modalContainerStyle: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    margin: 20,
  },
  modalButtonWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.VARIANTRED
  },
  modalButtonText: {
    flex: 1,
    fontSize: 20,
    color: Colors.SOLIDWHITECOLOR
  }
})

export default Sponsors