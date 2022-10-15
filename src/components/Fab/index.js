import {useState} from 'react';
import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FabComponent = () => {
  return(
    <View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Teste")}
      />
    </View>
  )  
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default FabComponent