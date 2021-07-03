import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TickeDetailScreen from "../Screens/TickeDetailScreen";

const Stack = createStackNavigator();

export default function TicketDetailNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="TicketScreen" component={TickeDetailScreen} />
    </Stack.Navigator>
  );
}
