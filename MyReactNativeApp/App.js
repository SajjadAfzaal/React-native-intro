// // After navigation
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomeScreen";
// import QuranScreen from "./screens/QuranScreen";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: "Home" }}
//         />
//         <Stack.Screen
//           name="Quran"
//           component={QuranScreen}
//           options={{ title: "Quran" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

//Modified App.js to load cached ayahs
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./screens/HomeScreen";
import QuranScreen from "./screens/QuranScreen";

const Stack = createStackNavigator();

const App = () => {
  const [cachedAyahs, setCachedAyahs] = useState(null);

  useEffect(() => {
    const loadCachedData = async () => {
      try {
        const storedAyahs = await AsyncStorage.getItem("ayahs");
        if (storedAyahs) {
          setCachedAyahs(JSON.parse(storedAyahs));
        }
      } catch (error) {
        console.error("Error loading cached ayahs:", error);
      }
    };
    loadCachedData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Quran"
          component={QuranScreen}
          initialParams={{ ayahs: cachedAyahs }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
