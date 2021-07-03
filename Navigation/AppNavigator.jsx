import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import FavNavigator from "./FavNavigator";
import TicketDetailNavigator from "./TicketDetailNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeNavigator} />
      <Tab.Screen name="fav" component={FavNavigator} />
      <Tab.Screen name="Ticket" component={TicketDetailNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
