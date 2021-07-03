import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

//We have to pass the styles we are writing using useAnimtedstyles to Our Animated View
