import { workouts } from "./data";
import { View, FlatList, Text, StyleSheet, ScrollView } from "react-native";
import Card from "./Card";

const Workouts = ({ handleItemSelect }) => {
  const renderItem = ({ item }) => {
    return <Card name={item.type} handleItemSelect={handleItemSelect} />;
  };
  return (
    <View>
      <FlatList
        style={styles.container}
        data={workouts}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 17,
    paddingTop: 0,
    marginTop: 10,
  },
});
export default Workouts;
