import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import DrawerNavigator from './src/components/DrawerNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
