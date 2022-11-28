import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomizableSubTitle from "../../../components/CustomizableSubTitle";
import SliderComponent from "../../../components/Slider";
import { Colors } from "../../../styles";

const JuniorLeagueModalContent = () => {
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
        <SliderComponent
          subtitle="YEARS OF CONTRACT"
          labelStart={0}
          labelEnd={5}
        />
        <SliderComponent subtitle="SALARY" labelStart={0} labelEnd="20MIL" />
      </View>
      <View style={styles.modalButtonWrapper}>
        <TouchableOpacity style={[{backgroundColor: Colors.VARIANTBLUE}, styles.makeOfferButton]}>
          <Text style={styles.makeOfferButtonText}>SIGN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor: Colors.VARIANTRED}, styles.makeOfferButton]}>
          <Text style={styles.makeOfferButtonText}>RELEASE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalViewWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  modalTitleWrapper: {
    flex: 0.15,
  },
  modalContentWrapper: {
    flex: 0.7,
  },
  modalButtonWrapper: {
    flex: 0.15,
    flexDirection: 'row'
  },
  makeOfferButton: {
    flex: 1,
    margin: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  makeOfferButtonText: {
    color: Colors.SOLIDWHITECOLOR,
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default JuniorLeagueModalContent;
