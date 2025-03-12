// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   onPressLearnMore,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import "react-native-gesture-handler";

// export default function App() {
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
//           source={require("./assets/heading.jpeg")}
//           style={{ width: 100, height: 100 }} // Adjust image size
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={{ color: "#fff", fontWeight: "bold" }}>Features</Text>
//       <View
//         style={{
//           flexDirection: "row",
//           flexWrap: "wrap", // Ensures 2 per row
//           justifyContent: "space-evenly", // Distributes evenly
//           alignItems: "center",
//           width: 380, // Keep width as needed
//           height: 400, // Adjust height to fit buttons
//           borderRadius: 40,
//           backgroundColor: "#f0f0f0", // Optional background
//           padding: 20, // Adds spacing
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => onPressButton("Quran")}
//           style={{
//             backgroundColor: "#4e5ba1",
//             padding: 10,
//             borderRadius: 10,
//             alignItems: "center",
//             justifyContent: "center",
//             width: 120, // Set fixed width
//             height: 150, // Set fixed height
//             margin: 10,
//           }}
//         >
//           <Image
//             source={require("./assets/quran.jpg")}
//             style={{ width: 80, height: 80 }} // Adjust image size
//             resizeMode="contain"
//           />
//           <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
//             Read Quran
//           </Text>
//         </TouchableOpacity>

//         {/* Button 2 */}
//         <TouchableOpacity
//           onPress={() => onPressButton("Hadith")}
//           style={{
//             backgroundColor: "#4e5ba1",
//             padding: 10,
//             borderRadius: 10,
//             alignItems: "center",
//             justifyContent: "center",
//             width: 120,
//             height: 150,
//             margin: 10,
//           }}
//         >
//           <Image
//             source={require("./assets/images.png")}
//             style={{ width: 80, height: 80 }}
//             resizeMode="contain"
//           />
//           <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
//             Search
//           </Text>
//         </TouchableOpacity>

//         {/* Button 3 */}
//         <TouchableOpacity
//           onPress={() => onPressButton("Dua")}
//           style={{
//             backgroundColor: "#4e5ba1",
//             padding: 10,
//             borderRadius: 10,
//             alignItems: "center",
//             justifyContent: "center",
//             width: 120,
//             height: 150,
//             margin: 10,
//           }}
//         >
//           <Image
//             source={require("./assets/bookmark.png")}
//             style={{ width: 80, height: 80 }}
//             resizeMode="contain"
//           />
//           <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
//             Bookmarks
//           </Text>
//         </TouchableOpacity>

//         {/* Button 4 */}
//         <TouchableOpacity
//           onPress={() => onPressButton("Tasbeeh")}
//           style={{
//             backgroundColor: "#4e5ba1",
//             padding: 10,
//             borderRadius: 10,
//             alignItems: "center",
//             justifyContent: "center",
//             width: 120,
//             height: 150,
//             margin: 10,
//           }}
//         >
//           <Image
//             source={require("./assets/download.jpeg")}
//             style={{ width: 80, height: 80 }}
//             resizeMode="contain"
//           />
//           <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
//             Settings
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import React from "react";
// import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// // importing data from ayah.json file
// // const DATA = require('./ayah.json');
// import DATA from "./ayah.json";

// const AyahItem = ({ number, Translation }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{number}</Text>
//     <Text style={styles.translation}>{Translation}</Text>
//   </View>
// );

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <FlatList
//       data={DATA}
//       renderItem={({ item }) => (
//         <AyahItem
//           number={item.AyahTextMuhammadi}
//           Translation={item.Translation}
//         />
//       )}
//       keyExtractor={(item) => item.Id.toString()} // Ensure it's a string
//     />
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   translation: {
//     fontSize: 30,
//     backgroundColor: "black",
//     color: "#f9c2ff", // Fixed capitalization
//     padding: 10, // Added padding for better readability
//     borderRadius: 8, // Slightly rounded corners
//     textAlign: "center", // Centers text
//   },
// });

// export default App;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const API_URL = "https://api.alquran.cloud/v1/quran/en.asad";

// const AyahItem = ({ number, text, surah }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>Ayah: {number}</Text>
//     <Text style={styles.surah}>Surah: {surah}</Text>
//     <Text style={styles.translation}>{text}</Text>
//   </View>
// );

// const App = () => {
//   const [ayahs, setAyahs] = useState([]); // Store API data
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         const verses = [];
//         data.data.surahs.forEach((surah) => {
//           surah.ayahs.forEach((ayah) => {
//             verses.push({
//               id: ayah.number,
//               ayahNumber: ayah.numberInSurah,
//               text: ayah.text,
//               surah: surah.englishName,
//             });
//           });
//         });
//         setAyahs(verses);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#3498db" />
//         <Text>Loading Quranic verses...</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={ayahs}
//         renderItem={({ item }) => (
//           <AyahItem
//             number={item.ayahNumber}
//             text={item.text}
//             surah={item.surah}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//   },
//   item: {
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//   },
//   surah: {
//     fontSize: 16,
//     fontStyle: "italic",
//     color: "#7f8c8d",
//   },
//   translation: {
//     fontSize: 18,
//     backgroundColor: "black",
//     color: "#f9c2ff",
//     padding: 10,
//     borderRadius: 8,
//     textAlign: "center",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchAyahs from "./useFetchAyahs"; // Importing custom hook

const AyahItem = ({ arabicText, translation }) => (
  <View style={styles.row}>
    <View style={styles.column}>
      <Text style={styles.translation}>{translation}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.arabic}>{arabicText}</Text>
    </View>
  </View>
);

const App = () => {
  const { ayahs, loading } = useFetchAyahs();

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text>Loading Quranic verses...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ayahs}
        renderItem={({ item }) => (
          <AyahItem
            arabicText={item.arabicText}
            translation={item.translation}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  column: {
    flex: 1,
    padding: 5,
  },
  arabic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "right",
  },
  translation: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "left",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
