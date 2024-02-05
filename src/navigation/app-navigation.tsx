import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/welcome-screen";
import ChatDetailsScreen from "../screens/chat/chat-screen";
import ProfileScreen from "../screens/profile-screen";
import HomeScreen from "../screens/home-screen";
import { HomeTabParamList, RootStackParamList } from "../types";
import { Ionicons } from "@expo/vector-icons";
import ChatDetails from "../screens/chat/chat-details-screen";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

const AppNavigation = () => {
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap; // Ensure iconName is a valid key
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            } else {
              iconName = "ellipse-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={25}
                color={focused ? "#3B82F6" : "gray"}
              />
            );
          },
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Chat" component={ChatDetailsScreen} />
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
          component={ChatDetails}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
