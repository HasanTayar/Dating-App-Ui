import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/welcome-screen";
import CHatDetailsScreen from "../screens/chat/chat-details-screen";
import ChatScreen from "../screens/chat/chat-screen";
import ProfileScreen from "../screens/profile-screen";
import HomeScreen from "../screens/home-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="ChatDetails"
          component={CHatDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
