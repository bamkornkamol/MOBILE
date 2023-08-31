import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({navigation, route}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const {title, steps} = route.params;

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>Dish:{" "}{title}</Text>
      <Text>steps:{" "}{steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // console.log("🌚");1
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
