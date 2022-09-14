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
                          <List.Section style={{flex: 1, height: '100%'}}>
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
        <PlayerModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
    )
}

export default Lineup