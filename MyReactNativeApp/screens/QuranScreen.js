// import React, { useState, useRef, useEffect, useMemo } from "react";
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
// import useFetchAyahs from "../useFetchAyahs";

// const AyahItem = React.memo(
//   ({ arabicText, translation, isSelected, onPress, onLayout }) => {
//     return (
//       <TouchableOpacity
//         onPress={onPress}
//         activeOpacity={0.7}
//         onLayout={onLayout}
//       >
//         <View style={[styles.row, isSelected && styles.selectedItem]}>
//           <View style={styles.column}>
//             <Text style={styles.translation}>{translation}</Text>
//           </View>
//           <View style={styles.column}>
//             <Text style={styles.arabic}>{arabicText}</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// );

// const QuranScreen = ({ navigation }) => {
//   const { ayahs, loading } = useFetchAyahs();
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const slideAnim = useRef(new Animated.Value(100)).current;
//   const flatListRef = useRef(null);
//   const intervalRef = useRef(null);
//   const itemHeights = useRef({});

//   const totalOffsets = useMemo(() => {
//     let offsets = [];
//     let runningOffset = 0;

//     ayahs.forEach((_, index) => {
//       offsets[index] = runningOffset;
//       runningOffset += itemHeights.current[index] || 80;
//     });

//     return offsets;
//   }, [ayahs, JSON.stringify(itemHeights.current)]);

//   useEffect(() => {
//     if (selectedIndex !== null) {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       intervalRef.current = setInterval(() => {
//         setSelectedIndex((prevIndex) => {
//           let nextIndex = prevIndex + 1;
//           if (nextIndex >= ayahs.length) nextIndex = 0;

//           flatListRef.current?.scrollToOffset({
//             offset: totalOffsets[nextIndex] || 0,
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
//   }, [selectedIndex, totalOffsets]);

//   const handleAyahPress = (index) => {
//     if (selectedIndex === index) {
//       setSelectedIndex(null);
//     } else {
//       setSelectedIndex(index);
//       flatListRef.current?.scrollToOffset({
//         offset: totalOffsets[index] || 0,
//         animated: true,
//       });
//     }
//   };

//   const handleLayout = (event, index) => {
//     const { height } = event.nativeEvent.layout;
//     if (itemHeights.current[index] !== height) {
//       itemHeights.current[index] = height;
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
//             onLayout={(event) => handleLayout(event, index)}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />

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
//     paddingBottom: 70,
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

// export default QuranScreen;

import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetchAyahs from "../useFetchAyahs";

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

const QuranScreen = ({ navigation, route }) => {
  const { ayahs: passedAyahs } = route.params || {};
  const { ayahs: fetchedAyahs, loading } = useFetchAyahs();
  const [ayahs, setAyahs] = useState(passedAyahs || []);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const slideAnim = useRef(new Animated.Value(100)).current;
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const itemHeights = useRef({});

  useEffect(() => {
    const storeAyahs = async () => {
      try {
        if (fetchedAyahs.length > 0) {
          setAyahs(fetchedAyahs);
          await AsyncStorage.setItem("ayahs", JSON.stringify(fetchedAyahs));
        }
      } catch (error) {
        console.error("Error storing ayahs:", error);
      }
    };

    if (!passedAyahs && fetchedAyahs.length > 0) {
      storeAyahs();
    }
  }, [fetchedAyahs, passedAyahs]);

  const totalOffsets = useMemo(() => {
    let offsets = [];
    let runningOffset = 0;

    ayahs.forEach((_, index) => {
      offsets[index] = runningOffset;
      runningOffset += itemHeights.current[index] || 80;
    });

    return offsets;
  }, [ayahs, JSON.stringify(itemHeights.current)]);

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

  const handleLayout = (event, index) => {
    const { height } = event.nativeEvent.layout;
    if (itemHeights.current[index] !== height) {
      itemHeights.current[index] = height;
    }
  };

  if (loading && ayahs.length === 0) {
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
    paddingBottom: 70,
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

export default QuranScreen;
