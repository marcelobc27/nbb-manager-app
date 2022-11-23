import { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Alignment, Colors, Typography } from "../../styles";
import * as Progress from 'react-native-progress';

const Item = ({ title, energy }) => {
  const [backgroundColor, setBackgroundColor] = useState();

  const toggleColor = () => (
    energy < 40
      ? setBackgroundColor(Colors.VARIANTRED)
      : setBackgroundColor(Colors.VARIANTGREEN)
  )

  useEffect(() => {
    toggleColor()
  }, [])

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title.toUpperCase()}</Text>
      <Progress.Bar style={styles.itemEnergyBar} color={backgroundColor} progress={energy} width={`${energy}%`} />
    </View>
  );
};

const FlatListComponent = ({data}) => {
  const renderItem = ({ item }) => (
    <Item title={item.name} energy={item.energy} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.NEUTRALGREYCOLOR,
    ...Alignment.ColumnCenter,
    height: 50,
    borderWidth: 1,
    margin: 4,
    marginBottom: 0,
  },
  itemEnergyBar: {
    flex: 0.1,
    alignSelf: "flex-start",
  },
  itemText: {
    flex: 0.9,
    color: Colors.VARIANTDARKPURPLE,
    ...Alignment.ColumnCenter,
    ...Typography.SmallFontBold,
  },
});

export default FlatListComponent;
