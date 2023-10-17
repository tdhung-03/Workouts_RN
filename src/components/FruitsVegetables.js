import { fruits_vegetables } from "./data";
import { View, StyleSheet, Text, SectionList, Image } from "react-native";
import Card from "./Card";

const FruitsVegetables = ({ handleItemSelect }) => {
  const renderItem = ({ item }) => {
    return <Card name={item} handleItemSelect={handleItemSelect} />;
  };
  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Image source={{ uri: section.url }} style={styles.headerIcon} />
      </View>
    );
  };
  return (
    <View>
      <SectionList
        sections={fruits_vegetables}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        style={styles.container}
      ></SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 17,
    paddingTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default FruitsVegetables;
