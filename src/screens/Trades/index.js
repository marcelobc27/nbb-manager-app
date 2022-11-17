import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PickerComponent from "../../components/Picker";
import CustomizableSubtitle from "../../components/CustomizableSubTitle";
import { Alignment, Colors, Typography } from "../../styles";
import TradesTable from "../../components/Tables/TradesTable";

const header = ["name", "age", "contract", "salary"];
const contents = [
  {
    name: "Teste",
    age: 22,
    contract: 2,
    salary: 50000,
  },
  {
    name: "Teste2",
    age: 21,
    contract: 3,
    salary: 60000,
  },
];

const PickerSection = () => {
  return (
    <View style={styles.pickerWrapper}>
      <PickerComponent
        height={40}
        backgroundColor={Colors.PRIMARYORANGECOLOR}
      />
      <PickerComponent
        height={40}
        backgroundColor={Colors.PRIMARYORANGECOLOR}
      />
    </View>
  );
};

const OfferorTeam = () => {
  return (
    <View style={styles.offerorTeamWrapper}>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubtitle
          flex={1}
          subtitle="TEAM A NAME"
          backgroundColor={Colors.DARKGREYCOLOR}
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.contentWrapper}>
        <TradesTable header={header} contents={contents} />
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={[
            { backgroundColor: Colors.VARIANTGREEN },
            styles.offerorTeamButton,
          ]}
        >
          <Text style={styles.buttonsText}>CHECK OFFERS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OffereeTeam = () => {
  return (
    <View style={styles.offereeTeamWrapper}>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubtitle
          flex={1}
          subtitle="TEAM B NAME"
          backgroundColor={Colors.DARKGREYCOLOR}
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.contentWrapper}>
        <TradesTable header={header} contents={contents} />
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={[
            { backgroundColor: Colors.VARIANTRED },
            styles.offerorTeamButton,
          ]}
        >
          <Text style={styles.buttonsText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            { backgroundColor: Colors.VARIANTGREEN },
            styles.offerorTeamButton,
          ]}
        >
          <Text style={styles.buttonsText}>ACCEPT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Trades = () => {
  return (
    <View style={styles.container}>
      <PickerSection />
      <OfferorTeam />
      <OffereeTeam />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    backgroundColor: Colors.SOLIDWHITECOLOR,
  },
  pickerWrapper: {
    flex: 0.1,
    ...Alignment.RowCenter,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  offerorTeamWrapper: {
    flex: 0.45,
    justifyContent: "center",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  subtitleWrapper: {
    flex: 0.2,
    justifyContent: "center",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsWrapper: {
    flex: 0.2,
    ...Alignment.RowBottomLeft,
  },
  buttonsText: {
    ...Typography.SmallFontBold,
    color: Colors.SOLIDWHITECOLOR
  },
  offerorTeamButton: {
    flex: 1,
    height: "100%",
    margin: 4,
    ...Alignment.ColumnCenter,
    color: Colors.SOLIDWHITECOLOR,
    ...Typography.MediumFontBold,
  },
  offereeTeamWrapper: {
    flex: 0.45,
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
});

export default Trades;
