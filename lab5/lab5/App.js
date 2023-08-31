import React from "react";
import { StyleSheet,  } from "react-native";
import { NavigationContainer } from '@react-navigation/native'; // v.6.x
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();


export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return(
  <NavigationContainer>
    <MealsNavigator.Navigator initialRouteName="Categories">
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
      options={{
        title: "Meal Categories",
        headerStyle: { backgroundColor: "#4a148c", }, 
        headerTintColor: "white",
      }}
      />
      <MealsNavigator.Screen name="CategoryMeal" component={CategoryMealsScreen}
      options={({route}) =>({
        title: route.params.title,
        headerStyle: { backgroundColor: "#4a148c", }, 
        headerTintColor: "white",
      })}/>
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
      options={({route}) =>({
        title: route.params.title,
        headerStyle: { backgroundColor: "#4a148c", }, 
        headerTintColor: "white",
      })}/>
    </MealsNavigator.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
