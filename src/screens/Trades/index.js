import { StyleSheet, TouchableOpacity, View } from "react-native"
import PickerComponent from "../../components/Picker"
import CustomizableSubtitle from '../../components/CustomizableSubTitle'
import { Alignment, Colors, Typography } from "../../styles"
import TableComponent from "../../components/TableComponent"

const PickerSection = () => {
  return(
    <View style={styles.pickerWrapper}>
      <PickerComponent height={40} backgroundColor={Colors.PRIMARYORANGECOLOR}/>
      <PickerComponent height={40} backgroundColor={Colors.PRIMARYORANGECOLOR}/>
    </View>
  )
}

const OfferorTeam = () => {
  return(
    <View style={styles.offerorTeam}>
      <CustomizableSubtitle flex={0.15} subtitle="TEAM A NAME" backgroundColor={Colors.VARIANTBLUE} color={Colors.SOLIDWHITECOLOR}/>
      <TableComponent/>
      <View style={styles.ButtonsSection}>
        <TouchableOpacity style={[{backgroundColor: Colors.VARIANTGREEN},styles.offerorTeamButton]}>
          CHECK OFFERS
        </TouchableOpacity>
      </View>
    </View>
  )
}

const OffereeTeam = () => {
  return(
    <View style={styles.offereeTeam}>
      <CustomizableSubtitle flex={0.15} subtitle="TEAM B NAME" backgroundColor={Colors.VARIANTBLUE} color={Colors.SOLIDWHITECOLOR}/>
      <TableComponent/>
      <View style={styles.ButtonsSection}>
        <TouchableOpacity style={[{backgroundColor: Colors.VARIANTRED}, styles.offerorTeamButton]}>
          CANCEL
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor: Colors.VARIANTGREEN}, styles.offerorTeamButton]}>
          ACCEPT
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Trades = () => {
  return(
    <View style={styles.container}>
      <View style={styles.tradesWrapper}>
        <PickerSection/>
        <OfferorTeam/>
        <OffereeTeam/>
      </View>
    </View>
  )     
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SOLIDWHITECOLOR
  },
  tradesWrapper: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  pickerWrapper: {
    flex: 0.1,
    ...Alignment.RowCenter,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  offerorTeam: {
    flex: 0.45,
    marginBottom: 10,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  },
  ButtonsSection: {
    flex: 0.2,
    ...Alignment.RowBottomLeft
  },
  offerorTeamButton: {
    flex: 1,
    height: '100%',
    margin: 4,
    ...Alignment.ColumnCenter,
    color: Colors.SOLIDWHITECOLOR,
    ...Typography.MediumFontBold
  },
  offereeTeam: {
    flex: 0.45,
    marginBottom: 10,
    backgroundColor: Colors.NEUTRALGREYCOLOR
  }
})

export default Trades