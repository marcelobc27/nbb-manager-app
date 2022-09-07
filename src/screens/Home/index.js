import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native"
import { Card, Button } from "react-native-paper"

const Home = ({navigation}) => {
      return(
        <View style={styles.container}>
            <View style={styles.hero_wrapper}>
              <Text style={{color: "#ffffff"}}>Logo</Text>
            </View>
            <View style={styles.games_wrapper}>
                <View style={styles.games_highlighted}>
                  <Card.Actions style={{
                    flex: 1,
                    backgroundColor: '#f1c40f',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                  }}>
                    <Button onPress={() => navigation.navigate('StandingScreeen')}>Lineup</Button>
                    <Button>Play</Button>
                  </Card.Actions>
                </View>
                <View style={styles.game_next}>
                  <ScrollView horizontal={true}>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                    <View style={styles.games_next}>
                      <Text>Teste</Text>
                    </View>
                  </ScrollView>
                </View>
            </View>
            <View style={styles.additional_wrapper}>
              <Text>NBB MANAGER</Text>
            </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 0,
        backgroundColor: '#ffffff'
    },
    hero_wrapper: {
        height: 250,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    games_wrapper: {
        height: 650,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#bbb'
    },
    games_highlighted: {
        height: '60%',
        width: '100%',
        backgroundColor: '#ffffff'
    },
    game_next: {
      height: '40%',
      width: '100%',
      backgroundColor: '#ffffff'
    },
    games_next: {
      height: '80%',
      width: 250,
      margin: 5,
      backgroundColor: '#2c3e50'
    },
    additional_wrapper: {
        height: 100,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home