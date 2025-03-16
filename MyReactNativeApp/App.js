// After navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import QuranScreen from "./screens/QuranScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Quran"
          component={QuranScreen}
          options={{ title: "Quran" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
