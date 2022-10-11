import { useState } from "react"
import { Text, View, Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import CustomizableModal from "../../components/CustomizableModal"
import { PlayerBasicSkillsModalContent } from "../../components/PlayerBasicSkillsModal"

const ModalTest = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return(
    <View>
      <Button title="Teste" onPress={() => setModalVisible(!modalVisible)}/>
        <CustomizableModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <PlayerBasicSkillsModalContent/>
        </CustomizableModal>
    </View>
  ) 
}

export default ModalTest