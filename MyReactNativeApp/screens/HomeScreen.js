// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import "react-native-gesture-handler";

// export default function HomeScreen({ navigation }) {
//   const onPressButton = (screen) => {
//     navigation.navigate(screen);
//   };

//   return (
//     <View
//       style={{
//         backgroundColor: "#4e5ba1",
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
//         QURAN PAK
//       </Text>

//       <View
//         style={{
//           backgroundColor: "#4e5ba1",
//           justifyContent: "center",
//           alignItems: "center",
//           flex: 0.35,
//           height: 100,
//           width: 400,
//           margin: 10,
//         }}
//       >
//         <Image
//           source={require("../assets/heading.jpeg")}
//           style={{ width: 100, height: 100 }}
//           resizeMode="contain"
//         />
//       </View>

//       <Text style={{ color: "#fff", fontWeight: "bold" }}>Features</Text>

//       <View style={styles.buttonContainer}>
//         {[
//           {
//             title: "Read Quran",
//             screen: "Quran",
//             image: require("../assets/quran.jpg"),
//           },
//           {
//             title: "Search",
//             screen: "Search",
//             image: require("../assets/images.png"),
//           },
//           {
//             title: "Bookmarks",
//             screen: "Bookmarks",
//             image: require("../assets/bookmark.png"),
//           },
//           {
//             title: "Settings",
//             screen: "Settings",
//             image: require("../assets/download.jpeg"),
//           },
//         ].map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => onPressButton(item.screen)}
//             style={styles.featureButton}
//           >
//             <Image
//               source={item.image}
//               style={{ width: 80, height: 80 }}
//               resizeMode="contain"
//             />
//             <Text style={styles.buttonText}>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     width: 380,
//     height: 400,
//     borderRadius: 40,
//     backgroundColor: "#f0f0f0",
//     padding: 20,
//   },
//   featureButton: {
//     backgroundColor: "#4e5ba1",
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 120,
//     height: 150,
//     margin: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 14,
//     marginTop: 5,
//   },
// });

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const [storedAyahs, setStoredAyahs] = useState([]);

  useEffect(() => {
    const loadStoredAyahs = async () => {
      try {
        const data = await AsyncStorage.getItem("ayahs");
        if (data) {
          setStoredAyahs(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error loading stored ayahs:", error);
      }
    };
    loadStoredAyahs();
  }, []);

  const onPressButton = (screen) => {
    navigation.navigate(screen, { ayahs: storedAyahs });
  };

  return (
    <View
      style={{
        backgroundColor: "#4e5ba1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        QURAN PAK
      </Text>

      <View
        style={{
          backgroundColor: "#4e5ba1",
          justifyContent: "center",
          alignItems: "center",
          flex: 0.35,
          height: 100,
          width: 400,
          margin: 10,
        }}
      >
        <Image
          source={require("../assets/heading.jpeg")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>

      <Text style={{ color: "#fff", fontWeight: "bold" }}>Features</Text>

      <View style={styles.buttonContainer}>
        {[
          {
            title: "Read Quran",
            screen: "Quran",
            image: require("../assets/quran.jpg"),
          },
          {
            title: "Search",
            screen: "Search",
            image: require("../assets/images.png"),
          },
          {
            title: "Bookmarks",
            screen: "Bookmarks",
            image: require("../assets/bookmark.png"),
          },
          {
            title: "Settings",
            screen: "Settings",
            image: require("../assets/download.jpeg"),
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressButton(item.screen)}
            style={styles.featureButton}
          >
            <Image
              source={item.image}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 380,
    height: 400,
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  featureButton: {
    backgroundColor: "#4e5ba1",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 150,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
});
