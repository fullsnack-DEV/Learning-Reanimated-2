import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
