import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons'; 
// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

// สร้าง navigator ตามโจทย์กำหนด
const MealNavigator = createNativeStackNavigator();
const MealFavTabNavigator = createBottomTabNavigator();
const FabNavigator = createNativeStackNavigator();
const FilterStack = createNativeStackNavigator();
const MainDrawer = createDrawerNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MealsNavigator() {
  return (
    <MealNavigator.Navigator initialRouteName="categories">
      <MealNavigator.Screen 
        name="categories" 
        component={CategoriesScreen} 
        options={{title:"Meal Category", headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
      </MealNavigator.Screen>
      <MealNavigator.Screen 
        name="categoryMeals" 
        component={CategoryMealsScreen} 
        options={({route}) => ({title: route.params.title, headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"})}>
      </MealNavigator.Screen>
      <MealNavigator.Screen 
        name="mealDetail" 
        component={MealDetailScreen} 
        options={({route}) => ({title: route.params.meal.title, headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"})}>
      </MealNavigator.Screen>
    </MealNavigator.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    <MealFavTabNavigator.Navigator initialRouteName="t">
      <MealFavTabNavigator.Screen 
        name="Meals" 
        component={MealsNavigator} 
        options={{tabBarIcon:()=>{return <Ionicons name="ios-restaurant" size={24} color="black" />}, tabBarActiveTintColor: "black",}} />
      <MealFavTabNavigator.Screen 
        name="Favorites" 
        component={FavNavigator}
        options={{tabBarIcon:()=>{return <Ionicons name="ios-star" size={24} color="black" />}, tabBarActiveTintColor: "black",}}>
      </MealFavTabNavigator.Screen>
    </MealFavTabNavigator.Navigator>
  );
}

function FavNavigator() {
  return (
    <FabNavigator.Navigator >
      <FabNavigator.Screen
        name="Favorites" 
        component={FavoritesScreen}>
      </FabNavigator.Screen>
      <FabNavigator.Screen
        name="mealDetail"
        component={MealDetailScreen}>
      </FabNavigator.Screen>
    </FabNavigator.Navigator>
  )
}

function FiltersNavigator(){
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen
        name="Filter"
        component={FiltersScreen}/>
    </FilterStack.Navigator>
  )
}

function MainNavigator(){
  return (
    <MainDrawer.Navigator
    screenOptions={{ drawerActiveTintColor: "orange", drawerInactiveTintColor: "orange", }} >
      <MainDrawer.Screen 
        name="MealsFav"
        component={MealsFavTabNavigator}
        options={{drawerLabel: "Meals"}}/>
      <MainDrawer.Screen
        name="Filters"
        component={FiltersNavigator} />
    </MainDrawer.Navigator>
  )
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <MainNavigator />
    </NavigationContainer>
  );
}
