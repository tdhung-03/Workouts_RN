import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Card = ({ name, handleItemSelect }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const handleSelectPress = () => {
    setIsSelected(!isSelected);
    handleItemSelect(name);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Pressable style={styles.button} onPress={handleSelectPress}>
        <Text style={styles.textButton}>
          {isSelected ? "DESELECT" : "SELECT"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d3d9f2",
    marginBottom: 15,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
  },
  button: {
    backgroundColor: "#5c73db",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Card;
