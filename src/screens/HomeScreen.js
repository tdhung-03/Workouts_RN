import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import Workouts from "../components/Workouts";
import FruitsVegetables from "../components/FruitsVegetables";
import React, { useState } from "react";

const HomeScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (itemName) => {
    // Check if the item is already in the selectedItems array.
    if (selectedItems.includes(itemName)) {
      // If it's already selected, remove it from the array.
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else {
      // If it's not selected, add it to the array.
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  return (
    <>
      <Text style={styles.header}>FlatList - Workouts</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        <ImageBackground
          source={require("../assets/gym-workout-plan-for-gaining-muscle_header.jpg")}
        >
          <Workouts handleItemSelect={handleItemSelect} />
        </ImageBackground>
      </ScrollView>

      <Text style={styles.header}>SectionList - Fruits & Vegetables</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        <ImageBackground source={require("../assets/fruit2.jpg")}>
          <FruitsVegetables handleItemSelect={handleItemSelect} />
        </ImageBackground>
      </ScrollView>

      <Text style={[styles.header, { color: "red" }]}>
        SELECTED EXERCIES of Tran Duy Hung 21522126
      </Text>
      <View style={styles.selectedContainer}>
        {selectedItems.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
            {","}
          </Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  selectedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  item: {
    fontSize: 20,
  },
  view: {
    paddingRight: 15,
    paddingLeft: 15,
  },
});

export default HomeScreen;
