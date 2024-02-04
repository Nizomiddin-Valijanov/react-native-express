import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
// Screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrdersSreen";
import ProfileScreen from "./screens/ProfileScreen";
const Tab = createBottomTabNavigator(); // Add this line

const homeName = "Home";
const searchName = "Search";
const cartName = "Cart";
const orderName = "Order";
const profileName = "Profile";
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconsName;
            let rn = route.name;

            if (rn === homeName) {
              iconsName = <Octicons name={"home"} size={size} color={color} />;
            } else if (rn === searchName) {
              iconsName = (
                <Ionicons name={"search"} size={size} color={color} />
              );
            } else if (rn === cartName) {
              iconsName = (
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (rn === orderName) {
              iconsName = (
                <Ionicons
                  name={focused ? "list" : "list-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (rn === profileName) {
              iconsName = (
                <EvilIcons name={"user"} size={size} color={color}></EvilIcons>
              );
            }

            return iconsName;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "grey",
          labelStyle: { fontSize: 12, paddingTop: 2 },
          tabStyle: {
            paddingTop: 2,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={cartName} component={CartScreen} />
        <Tab.Screen name={orderName} component={OrderScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
