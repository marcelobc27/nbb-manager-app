import { FlatList, View, Text, StyleSheet } from "react-native"
import { Alignment, Colors, Typography } from "../../styles"

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Third Item',
  },
]

const Item = ({title}) => {
  return(
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  )
}

const FlatListComponent = () => {
  const renderItem = ({item}) => (
    <Item title={item.title}/>
  )
  
  return(
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.ColumnCenter,
    height: 50,
    borderWidth: 2,
    margin: 4,
    marginBottom: 0
  },
  itemText: {
    color: Colors.VARIANTDARKPURPLE,
    ...Alignment.ColumnCenter,
    ...Typography.MediumFontBold
  }
})

export default FlatListComponent