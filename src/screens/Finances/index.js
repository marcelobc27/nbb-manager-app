import { StyleSheet, Text, View } from "react-native"
import finances from "../../data/finances"

const InitialBudget = () => {
  return(
    <View style={styles.initialBudgetWrapper}>
      Teste
    </View>
  )
}

const Incomes = () => {
  return(
    <View style={styles.incomesWrapper}>

    </View>
  )
}

const Expenses = () => {
  return(
    <View style={styles.incomesWrapper}>

    </View>
  )
}

const Balance = () => {
  return(
    <View style={styles.balanceWrapper}>
      Teste
    </View>
  )
}

const Finances = () => {
  return(
    <View style={styles.financesContainer}>
      <InitialBudget/>
      <Incomes/>
      <Expenses/>
      <Balance/>
    </View>
  )   
}

const styles = StyleSheet.create({
  financesContainer: {
    flex: 1
  },
  initialBudgetWrapper: {
    flex: 0.1
  },
  incomesWrapper: {
    flex: 0.4,
    margin: 4
  },
  expensesWrapper: {
    flex: 0.4,
    margin: 4
  },
  balanceWrapper: {
    flex: 0.1
  }
})

export default Finances