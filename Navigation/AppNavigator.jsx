import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import FavNavigator from "./FavNavigator";
import TicketDetailNavigator from "./TicketDetailNavigator";
import ProfileNavigator from "./ProfileNavigator";
import HomeIcon from "../assets/Home.png";

const Tab = createBottomTabNavigator();

const Homeicon = ({ styles }) => {
  return (
    <Image
      style={[{ height: 25, width: 25 }]}
      source={require("../assets/Home1.png")}
    />
  );
};
const Notificationicon = ({ styles }) => {
  return (
    <Image
      style={[{ height: 25, width: 25 }]}
      source={require("../assets/Notification.png")}
    />
  );
};
const Ticketicon = ({ styles }) => {
  return (
    <Image
      style={[{ height: 25, width: 25 }]}
      source={require("../assets/Ticket.png")}
    />
  );
};
const Profileicon = ({ styles }) => {
  return (
    <Image
      style={[{ height: 27, width: 27 }]}
      source={require("../assets/Setting.png")}
    />
  );
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        //here we can set the Color and all for the tab bar
        showLabel: false,

        style: { color: "#000", backgroundColor: "#000", elevation: 0 },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Homeicon />,
        }}
      />
      <Tab.Screen
        name="fav"
        component={FavNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Notificationicon />,
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketDetailNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ticketicon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Profileicon />,
        }}
      />
    </Tab.Navigator>
  );
}
