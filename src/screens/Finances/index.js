import { ScrollView, StyleSheet, Text, View } from "react-native";
import StandardOrangeSubTitle from "../../components/StandardOrangeSubTitle";
import ContractsTable from "../../components/Tables/ContractsTable";
import finances from "../../data/finances";
import players from "../../data/players";
import { Alignment, Colors, Typography } from "../../styles";

const InitialBudget = () => {
  return (
    <View style={styles.initialBudgetWrapper}>
      <View style={styles.initialBudgetContent}>
        <View style={styles.textSubtitle}>
          <Text style={styles.initialBudgetTextStyle}>INITIAL BUDGET</Text>
        </View>
        <View style={styles.textNumber}>
          <Text style={styles.initialBudgetNumberStyle}>500.000</Text>
        </View>
      </View>
      <View style={[{ marginTop: 0 }, styles.initialBudgetContent]}>
        <View style={styles.textSubtitle}>
          <Text style={styles.initialBudgetTextStyle}>TOTAL INCOMES</Text>
        </View>
        <View style={styles.textNumber}>
          <Text style={styles.initialBudgetNumberStyle}>500.000</Text>
        </View>
      </View>
    </View>
  );
};

const Contracts = () => {
  const header = [
    "year 01",
    "year 02",
    "year 03",
    "year 04",
    "year 05",
    "year 06",
  ]; 
  return (
    <View style={styles.contractWrapper}>
      <View style={styles.subtitleWrapper}>
        <StandardOrangeSubTitle subtitle="CONTRACTS"/>
      </View>
      <ScrollView horizontal="true" style={styles.contractsTableWrapper}>
        <ContractsTable header={header} contents={players}/>
      </ScrollView>
    </View>
  );
};

const Finances = () => {
  return (
    <View style={styles.financesContainer}>
      <InitialBudget />
      <Contracts />
    </View>
  );
};

const styles = StyleSheet.create({
  financesContainer: {
    flex: 1,
  },
  initialBudgetWrapper: {
    flex: 0.2,
    backgroundColor: Colors.DARKGREYCOLOR,
  },
  contractWrapper: {
    flex: 0.8,
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  initialBudgetContent: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    backgroundColor: Colors.NEUTRALGREYCOLOR,
  },
  textSubtitle: {
    flex: 7,
    ...Alignment.ColumnCenter,
  },
  textNumber: {
    flex: 3,
    ...Alignment.ColumnCenter,
    backgroundColor: Colors.SOLIDWHITECOLOR,
  },
  initialBudgetTextStyle: {
    ...Typography.SmallFontBold,
  },
  initialBudgetNumberStyle: {
    ...Typography.SmallFontBold,
  },
  subtitleWrapper: {
    flex: 0.08,
    marginBottom: 4
  },
  contractsTableWrapper: {
    flex: 0.90
  }
});

export default Finances;
