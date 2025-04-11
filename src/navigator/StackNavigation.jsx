import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LikeScreen from "../screens/LikeScreen";
import PlayerScreen from "../screens/PlayerScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
      <Stack.Screen name="LIKE_SCREEN" component={LikeScreen} />
      <Stack.Screen name="PLAYER_SCREEN" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
