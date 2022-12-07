import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { FAB } from "react-native-paper";
import { Alignment, Colors, Spacing, Typography } from "../../styles";

const getActions = (actions = []) => {
  const navigation = useNavigation()

  return(
    actions.map((item) => ({
      icon: item.icon,
      label: <Text style={styles.fabFontStyle}>{item.label.toUpperCase()}</Text>,
      labelStyle: styles.labelStyle,
      onPress: () => navigation.navigate(item.onPress),
    }))
  )
};

const FabComponent = ({actions = []}) => {
  const [open, setOpen] = useState(false);

  const onStateChange = () => setOpen(!open);

  return (
    <FAB.Group
      open={open}
      fabStyle={styles.fabStyle}
      icon={open ? "minus" : "plus"}
      style={styles.fab}
      onStateChange={onStateChange}
      actions={getActions(actions)}
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
    backgroundColor: Colors.DARKGREYCOLOR
  },
  fabFontStyle: {
    ...Typography.SmallFontBold,
    color: Colors.SOLIDWHITECOLOR, 
  },
  labelStyle: {
    backgroundColor: Colors.DARKGREYCOLOR
  }
});

export default FabComponent;
