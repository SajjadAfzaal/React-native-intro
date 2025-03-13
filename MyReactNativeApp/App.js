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

// import React from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import useFetchAyahs from "./useFetchAyahs"; // Importing custom hook

// const AyahItem = ({ arabicText, translation }) => (
//   <View style={styles.row}>
//     <View style={styles.column}>
//       <Text style={styles.translation}>{translation}</Text>
//     </View>
//     <View style={styles.column}>
//       <Text style={styles.arabic}>{arabicText}</Text>
//     </View>
//   </View>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();

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
//             arabicText={item.arabicText}
//             translation={item.translation}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

// import React, { useState } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import useFetchAyahs from "./useFetchAyahs"; // Importing custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedId, setSelectedId] = useState(null);

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
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedId === item.id}
//             onPress={() => setSelectedId(item.id)}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
// });

// export default App; Highlight item

// play button footer come up
// import React, { useState } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Button,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import useFetchAyahs from "./useFetchAyahs"; // Importing custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedAyah, setSelectedAyah] = useState(null);

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
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedAyah?.id === item.id}
//             onPress={() => setSelectedAyah(item)}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       {/* Footer for Play Audio Button */}
//       {selectedAyah && (
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedAyah.id}
//           </Text>
//           <Button
//             title="Play Audio"
//             onPress={() => console.log(`Playing Ayah ${selectedAyah.id}`)}
//           />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#fff",
//     padding: 15,
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: "bold",
//     color: "#2c3e50",
//   },
// });

// export default App;

// play icon and footer animation
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
// import useFetchAyahs from "./useFetchAyahs"; // Import custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedAyah, setSelectedAyah] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current; // Initial position below the screen

//   useEffect(() => {
//     if (selectedAyah) {
//       // Slide up when an ayah is selected
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       // Slide down when no ayah is selected
//       Animated.timing(slideAnim, {
//         toValue: 100,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [selectedAyah]);

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
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedAyah?.id === item.id}
//             onPress={() => setSelectedAyah(item)}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       {/* Footer with Slide Animation */}
//       {selectedAyah && (
//         <Animated.View
//           style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
//         >
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedAyah.id}
//           </Text>
//           <TouchableOpacity
//             style={styles.playButton}
//             onPress={() => console.log(`Playing Ayah ${selectedAyah.id}`)}
//           >
//             <Icon name="play" size={24} color="#fff" />
//             <Text style={styles.playButtonText}>Play Audio</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3498db",
//     padding: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   playButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#2ecc71",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   playButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
// });

// export default App;

// footer effect vanish when touch the highlighted item
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
// import useFetchAyahs from "./useFetchAyahs"; // Import custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedAyah, setSelectedAyah] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current; // Initial position below the screen

//   useEffect(() => {
//     if (selectedAyah) {
//       // Slide up when an ayah is selected
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       // Slide down when no ayah is selected
//       Animated.timing(slideAnim, {
//         toValue: 100,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [selectedAyah]);

//   const handleAyahPress = (ayah) => {
//     if (selectedAyah?.id === ayah.id) {
//       setSelectedAyah(null); // Deselect if the same ayah is tapped again
//     } else {
//       setSelectedAyah(ayah);
//     }
//   };

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
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedAyah?.id === item.id}
//             onPress={() => handleAyahPress(item)}
//           />
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       {/* Footer with Slide Animation */}
//       {selectedAyah && (
//         <Animated.View
//           style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
//         >
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedAyah.id}
//           </Text>
//           <TouchableOpacity
//             style={styles.playButton}
//             onPress={() => console.log(`Playing Ayah ${selectedAyah.id}`)}
//           >
//             <Icon name="play" size={24} color="#fff" />
//             <Text style={styles.playButtonText}>Play Audio</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3498db",
//     padding: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   playButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#2ecc71",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   playButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
// });

// export default App;

// Auto scroll flatlist
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
// import useFetchAyahs from "./useFetchAyahs"; // Import custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current;
//   const flatListRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (selectedIndex !== null) {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       // Start auto-scrolling & highlighting the next Ayah every 2 seconds
//       intervalRef.current = setInterval(() => {
//         setSelectedIndex((prevIndex) => {
//           let nextIndex = prevIndex + 1;
//           if (nextIndex >= ayahs.length) nextIndex = 0; // Loop back to start

//           // Scroll to next Ayah
//           flatListRef.current?.scrollToIndex({
//             index: nextIndex,
//             animated: true,
//           });

//           return nextIndex;
//         });
//       }, 2000);
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: 100,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       // Stop auto-scrolling when deselected
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [selectedIndex]);

//   const handleAyahPress = (index) => {
//     if (selectedIndex === index) {
//       setSelectedIndex(null); // Deselect if tapped again
//     } else {
//       setSelectedIndex(index);
//     }
//   };

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
//       {console.log("hello sajjad")}
//       <FlatList
//         ref={flatListRef}
//         data={ayahs}
//         renderItem={({ item, index }) => (
//           <AyahItem
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedIndex === index}
//             onPress={() => handleAyahPress(index)}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         initialScrollIndex={0}
//         getItemLayout={(data, index) => ({
//           length: 80, // Approximate item height
//           offset: 80 * index,
//           index,
//         })}
//       />

//       {/* Footer with Slide Animation */}
//       {selectedIndex !== null && (
//         <Animated.View
//           style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
//         >
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedIndex + 1}
//           </Text>
//           <TouchableOpacity
//             style={styles.playButton}
//             onPress={() => console.log(`Playing Ayah ${selectedIndex + 1}`)}
//           >
//             <Icon name="play" size={24} color="#fff" />
//             <Text style={styles.playButtonText}>Play Audio</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3498db",
//     padding: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   playButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#2ecc71",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   playButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
// });

// export default App;

// autoscroll and highlighted item on top
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
// import useFetchAyahs from "./useFetchAyahs"; // Import custom hook

// const AyahItem = ({ arabicText, translation, isSelected, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current;
//   const flatListRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (selectedIndex !== null) {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       // Start auto-scrolling & highlighting the next Ayah every 2 seconds
//       intervalRef.current = setInterval(() => {
//         setSelectedIndex((prevIndex) => {
//           let nextIndex = prevIndex + 1;
//           if (nextIndex >= ayahs.length) nextIndex = 0; // Loop back to start

//           // Scroll to make next Ayah appear at the top
//           flatListRef.current?.scrollToIndex({
//             index: nextIndex,
//             animated: true,
//             viewPosition: 0, // Ensure item is at the top
//           });

//           return nextIndex;
//         });
//       }, 2000);
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: 100,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       // Stop auto-scrolling when deselected
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [selectedIndex]);

//   const handleAyahPress = (index) => {
//     if (selectedIndex === index) {
//       setSelectedIndex(null); // Deselect if tapped again
//     } else {
//       setSelectedIndex(index);
//       flatListRef.current?.scrollToIndex({
//         index,
//         animated: true,
//         viewPosition: 0, // Ensure item is at the top
//       });
//     }
//   };

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
//         ref={flatListRef}
//         data={ayahs}
//         renderItem={({ item, index }) => (
//           <AyahItem
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedIndex === index}
//             onPress={() => handleAyahPress(index)}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         initialScrollIndex={0}
//         getItemLayout={(data, index) => ({
//           length: 80, // Approximate item height
//           offset: 80 * index,
//           index,
//         })}
//       />

//       {/* Footer with Slide Animation */}
//       {selectedIndex !== null && (
//         <Animated.View
//           style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
//         >
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedIndex + 1}
//           </Text>
//           <TouchableOpacity
//             style={styles.playButton}
//             onPress={() => console.log(`Playing Ayah ${selectedIndex + 1}`)}
//           >
//             <Icon name="play" size={24} color="#fff" />
//             <Text style={styles.playButtonText}>Play Audio</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styling
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   column: {
//     flex: 1,
//     padding: 5,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#2c3e50",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#34495e",
//     textAlign: "left",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0", // Light green highlight for selected ayah
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3498db",
//     padding: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   playButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#2ecc71",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   playButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
// });

// export default App;

// highlighted item stays on top
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ActivityIndicator,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome";
// import useFetchAyahs from "./useFetchAyahs";

// const AyahItem = ({
//   arabicText,
//   translation,
//   isSelected,
//   onPress,
//   onLayout,
// }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.7} onLayout={onLayout}>
//     <View style={[styles.row, isSelected && styles.selectedItem]}>
//       <View style={styles.column}>
//         <Text style={styles.translation}>{translation}</Text>
//       </View>
//       <View style={styles.column}>
//         <Text style={styles.arabic}>{arabicText}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const App = () => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current;
//   const flatListRef = useRef(null);
//   const intervalRef = useRef(null);
//   const itemHeights = useRef({}); // Store dynamic heights
//   const totalOffsets = useRef([]); // Store cumulative offsets for each item

//   // Compute total offsets dynamically based on item heights
//   useEffect(() => {
//     let offsets = [];
//     let runningOffset = 0;
//     ayahs.forEach((_, index) => {
//       offsets[index] = runningOffset;
//       runningOffset += itemHeights.current[index] || 80; // Default height if unknown
//     });
//     totalOffsets.current = offsets;
//   }, [ayahs, itemHeights.current]);

//   useEffect(() => {
//     if (selectedIndex !== null) {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       // Start auto-scrolling every 2 seconds
//       intervalRef.current = setInterval(() => {
//         setSelectedIndex((prevIndex) => {
//           let nextIndex = prevIndex + 1;
//           if (nextIndex >= ayahs.length) nextIndex = 0; // Loop back to start

//           flatListRef.current?.scrollToOffset({
//             offset: totalOffsets.current[nextIndex] || 0,
//             animated: true,
//           });

//           return nextIndex;
//         });
//       }, 2000);
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: 100,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [selectedIndex]);

//   const handleAyahPress = (index) => {
//     if (selectedIndex === index) {
//       setSelectedIndex(null);
//     } else {
//       setSelectedIndex(index);
//       flatListRef.current?.scrollToOffset({
//         offset: totalOffsets.current[index] || 0,
//         animated: true,
//       });
//     }
//   };

//   const handleLayout = (event, index) => {
//     const { height } = event.nativeEvent.layout;
//     itemHeights.current[index] = height;
//   };

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
//       {console.log("working..")}
//       <FlatList
//         ref={flatListRef}
//         data={ayahs}
//         renderItem={({ item, index }) => (
//           <AyahItem
//             arabicText={item.arabicText}
//             translation={item.translation}
//             isSelected={selectedIndex === index}
//             onPress={() => handleAyahPress(index)}
//             onLayout={(event) => handleLayout(event, index)}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />

//       {/* Footer with Slide Animation */}
//       {selectedIndex !== null && (
//         <Animated.View
//           style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
//         >
//           <Text style={styles.footerText}>
//             Selected Ayah: {selectedIndex + 1}
//           </Text>
//           <TouchableOpacity style={styles.playButton}>
//             <Icon name="play" size={20} color="#fff" />
//             <Text style={styles.playButtonText}>Play Audio</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#f8f9f9",
//     paddingBottom: 70, // Space for the footer
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginVertical: 5,
//     padding: 15,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   column: {
//     flex: 1,
//   },
//   arabic: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "right",
//   },
//   translation: {
//     fontSize: 16,
//     color: "#333",
//   },
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItem: {
//     backgroundColor: "#d0f0c0",
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "#3498db",
//     padding: 15,
//     alignItems: "center",
//   },
//   footerText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   playButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#2ecc71",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//   },
//   playButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     marginLeft: 10,
//   },
// });

// export default App;

// re rendering of ayahs solved
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import useFetchAyahs from "./useFetchAyahs";

// ✅ Use React.memo to optimize FlatList rendering
const AyahItem = React.memo(
  ({ arabicText, translation, isSelected, onPress, onLayout }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        onLayout={onLayout}
      >
        <View style={[styles.row, isSelected && styles.selectedItem]}>
          <View style={styles.column}>
            <Text style={styles.translation}>{translation}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.arabic}>{arabicText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

const App = () => {
  const { ayahs, loading } = useFetchAyahs();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const slideAnim = useRef(new Animated.Value(100)).current;
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const itemHeights = useRef({});

  // ✅ Optimize useMemo using JSON.stringify
  const totalOffsets = useMemo(() => {
    console.log("Recomputing offsets...");
    let offsets = [];
    let runningOffset = 0;

    ayahs.forEach((_, index) => {
      offsets[index] = runningOffset;
      runningOffset += itemHeights.current[index] || 80;
    });

    return offsets;
  }, [ayahs, JSON.stringify(itemHeights.current)]);

  useEffect(() => {
    console.log("Rendering...");
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      intervalRef.current = setInterval(() => {
        setSelectedIndex((prevIndex) => {
          let nextIndex = prevIndex + 1;
          if (nextIndex >= ayahs.length) nextIndex = 0;

          flatListRef.current?.scrollToOffset({
            offset: totalOffsets[nextIndex] || 0,
            animated: true,
          });

          return nextIndex;
        });
      }, 2000);
    } else {
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start();
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [selectedIndex, totalOffsets]);

  const handleAyahPress = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      flatListRef.current?.scrollToOffset({
        offset: totalOffsets[index] || 0,
        animated: true,
      });
    }
  };

  // ✅ Prevent unnecessary updates in handleLayout
  const handleLayout = (event, index) => {
    const { height } = event.nativeEvent.layout;
    if (itemHeights.current[index] !== height) {
      itemHeights.current[index] = height;
    }
  };

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
        ref={flatListRef}
        data={ayahs}
        renderItem={({ item, index }) => (
          <AyahItem
            arabicText={item.arabicText}
            translation={item.translation}
            isSelected={selectedIndex === index}
            onPress={() => handleAyahPress(index)}
            onLayout={(event) => handleLayout(event, index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {selectedIndex !== null && (
        <Animated.View
          style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}
        >
          <Text style={styles.footerText}>
            Selected Ayah: {selectedIndex + 1}
          </Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={20} color="#fff" />
            <Text style={styles.playButtonText}>Play Audio</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f8f9f9",
    paddingBottom: 70, // Space for the footer
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  column: {
    flex: 1,
  },
  arabic: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  translation: {
    fontSize: 16,
    color: "#333",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: "#d0f0c0",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#3498db",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  playButtonText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default App;
