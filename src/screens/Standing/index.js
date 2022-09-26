import { View, Text } from "react-native"
import { DataTable, Button } from 'react-native-paper'
import leagues from '../../data/contents'

const TableRow = ({name, victories, defeats, plus, minus, navigation}) => {
  return(
    <DataTable.Row onPress={() => navigation.navigate('LineupScreen')}>
      <DataTable.Cell>{name}</DataTable.Cell>
      <DataTable.Cell>{victories}</DataTable.Cell>
      <DataTable.Cell>{defeats}</DataTable.Cell>
      <DataTable.Cell>{plus}</DataTable.Cell>
      <DataTable.Cell>{minus}</DataTable.Cell>
    </DataTable.Row>
  )
}

const Standing = ({navigation}) => {
  return(
    <View style={{
      alignItems: 'stretch',
      justifyContent: 'center'
    }}>
      <DataTable.Header>
        <DataTable.Title>Team</DataTable.Title>
        <DataTable.Title>Victories</DataTable.Title>
        <DataTable.Title>Defeats</DataTable.Title>
        <DataTable.Title>Plus</DataTable.Title>
        <DataTable.Title>Minus</DataTable.Title>
      </DataTable.Header>
        {leagues.map((item, index) => {
          return(
           item.teams.map((newitem, index) => {
            return(
                <TableRow
                  key={index}
                  navigation={navigation}
                  name={newitem.name} 
                  victories={newitem.victories} 
                  defeats={newitem.defeats}
                  plus={newitem.plus}
                  minus={newitem.minus}
                />
            )
           })
          )
        })}
    </View>
  )
}

export default Standing