import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Pages/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//We have to pass the styles we are writing using useAnimtedstyles to Our Animated View
