import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";
import TickeDetailScreen from "../Screens/TickeDetailScreen";
import Payment from "../Screens/Payment";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Ticket" component={TickeDetailScreen} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}
