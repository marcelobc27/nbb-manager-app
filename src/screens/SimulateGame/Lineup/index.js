import { StyleSheet, Text, View } from "react-native";
import CustomizableSubTitle from "../../../components/CustomizableSubTitle";
import { Colors } from "../../../styles";
import FlatListComponent from '../../../components/FlatListComponent'
import players from '../../../data/players'

const LineupTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubTitle
          flex={1}
          subtitle="ON COURT"
          backgroundColor={Colors.VARIANTDARKPURPLE}
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.lineupStartersWrapper}>
        <View style={styles.lineupSectionWrapper}>
          <View style={styles.lineupSection}>
            <FlatListComponent data={players}/>
          </View>
          <View style={styles.lineupSection}>
            <FlatListComponent data={players}/>
          </View>
        </View>
      </View>
      <View style={styles.subtitleWrapper}>
        <CustomizableSubTitle
          flex={1}
          subtitle="BENCH"
          backgroundColor={Colors.VARIANTDARKPURPLE}
          color={Colors.SOLIDWHITECOLOR}
        />
      </View>
      <View style={styles.lineupBenchWrapper}>
        <View style={styles.lineupSectionWrapper}>
          <View style={styles.lineupSection}>
            <FlatListComponent data={players}/>
          </View>
          <View style={styles.lineupSection}>
            <FlatListComponent data={players}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8
  },
  subtitleWrapper: {
    flex: 1,
  },
  lineupStartersWrapper: {
    flex: 5,
    flexDirection: "column",
  },
  lineupSection: {
    flex: 1,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  lineupSectionWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  lineupBenchWrapper: {
    flex: 3,
  },
});

export default LineupTab;
