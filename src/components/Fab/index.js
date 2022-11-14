import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { FAB } from "react-native-paper";
import { Alignment, Colors, Spacing, Typography } from "../../styles";

const actions = [
  { 
    icon: "arrow-right",
    label: "Playbook"
  },
  {
    icon: "arrow-right",
    label: "Game Style",
    onPress: "GameStyleScreen",
  },
  {
    icon: "arrow-right",
    label: "Development",
    onPress: "DevelopmentScreen"
  },
  {
    icon: "arrow-right",
    label: "Rotation",
    onPress: "RotationScreen",
  },
];

const GetFabActions = (actions = []) => {
  const navigation = useNavigation()

  return(
    actions.map((item) => ({
      icon: item.icon,
      label: <Text style={styles.fabFontStyle}>{item.label}</Text>,
      onPress: () => navigation.navigate(item.onPress),
    }))
  )
};

const FabComponent = () => {
  const [open, setOpen] = useState(false);

  const onStateChange = () => setOpen(!open);

  return (
    <FAB.Group
      open={open}
      fabStyle={styles.fabStyle}
      icon={open ? "minus" : "plus"}
      style={styles.fab}
      onStateChange={onStateChange}
      actions={GetFabActions(actions)}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  fabStyle: {
    backgroundColor: Colors.SOLIDBLACKCOLOR
  },
  fabFontStyle: {
    fontSize: 20,
    color: Colors.SOLIDBLACKCOLOR, 
    fontWeight: "bold"
  }
});

export default FabComponent;
