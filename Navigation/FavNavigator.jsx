import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavScreen from "../Screens/FavScreen";

const Stack = createStackNavigator();

export default function FavNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Fav" component={FavScreen} />
    </Stack.Navigator>
  );
}
