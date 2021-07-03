import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Screens/HomeScreen";
import FavScreen from "./Screens/FavScreen";
import TickeDetailScreen from "./Screens/TickeDetailScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BootomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="fav" component={FavScreen} />
      <Tab.Screen name="Ticket" component={TickeDetailScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BootomTabs />
    </NavigationContainer>
  );
}

//We have to pass the styles we are writing using useAnimtedstyles to Our Animated View
