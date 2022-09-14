import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Modal, Animated } from "react-native"
import { Card, Button, List } from "react-native-paper"
import contents from "../../data/contents"
import PlayerModal from "../PlayerModal"

const Lineup = () => {
  const [modalVisible, setModalVisible] = useState(false);
    return(
      <View style={{flex: 1}}>
        <Card style={{flex: 1}}>
          <Card.Title title="Line-up"/>
          <Card.Cover source={{uri: 'https://media.istockphoto.com/photos/basketball-court-picture-id1147483843?k=20&m=1147483843&s=612x612&w=0&h=gZ7Q1ozC0-Bhypz7Q6S7rdGdDAFKcne16SSR7sT9UFg='}}></Card.Cover>
          <Card.Content style={{flex: 1}}>
            {contents.map(team => {
              return(
                team.league.teams.map((players, index) => {
                  if(players.name === 'Paraná'){
                    return(
                      players.players.map((player, index) => {
                        return(
                          <List.Section>
                            <List.Item onPress={() => {
                              setModalVisible(!modalVisible)
                              }} title={player.name}/>
                          </List.Section>
                        ) 
                      })
                    )}
                })
              )
            })}
          </Card.Content>
          <Card.Actions>
            <Button>Statistics</Button>
            <Button>Evolution</Button>
            <Button>Rotation</Button>
            <Button>Game Style</Button>
          </Card.Actions>
        </Card>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            console.log("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
          >
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.5,
            }}>
              <View style={{
                margin: 20,
                backgroundColor: "black",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5
              }}>
                <Text style={{color: 'white'}} onPress={() => setModalVisible(!modalVisible)}>Teste</Text>
              </View>
            </View>
          </Modal>
      </View>
    )
}

export default Lineup