import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

const MealList = (props) => {
  const navigation = useNavigation();
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("mealDetail", {meal: itemData.item})
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
