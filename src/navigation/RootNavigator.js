import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Screen imports
import Homescreen from "../screens/Homescreen";
import Details from "../screens/Details";
import ThanksScreen from "../screens/ThanksScreen";
import Privacy from "../screens/Privacy";
import Header from "../components/Header";
//Navigation imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeLanding" component={Homescreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thanks Screen"
        component={ThanksScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Draw Comps
const Drawer = createDrawerNavigator();

const Mydrawer = () => {
  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="App" component={MyTabs} />
      <Drawer.Screen name="Special Thanks" component={ThanksScreen} />
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
    </Drawer.Navigator>
  );
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Mydrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
