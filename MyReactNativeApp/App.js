import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  onPressLearnMore,
  TouchableOpacity,
  Image,
} from "react-native";
import "react-native-gesture-handler";

export default function App() {
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
          source={require("./assets/heading.jpeg")}
          style={{ width: 100, height: 100 }} // Adjust image size
          resizeMode="contain"
        />
      </View>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Features</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap", // Ensures 2 per row
          justifyContent: "space-evenly", // Distributes evenly
          alignItems: "center",
          width: 380, // Keep width as needed
          height: 400, // Adjust height to fit buttons
          borderRadius: 30,
          backgroundColor: "#f0f0f0", // Optional background
          padding: 20, // Adds spacing
        }}
      >
        <TouchableOpacity
          onPress={() => onPressButton("Quran")}
          style={{
            backgroundColor: "#4e5ba1",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 120, // Set fixed width
            height: 150, // Set fixed height
            margin: 10,
          }}
        >
          <Image
            source={require("./assets/quran.jpg")}
            style={{ width: 80, height: 80 }} // Adjust image size
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
            Read Quran
          </Text>
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity
          onPress={() => onPressButton("Hadith")}
          style={{
            backgroundColor: "#4e5ba1",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 150,
            margin: 10,
          }}
        >
          <Image
            source={require("./assets/images.png")}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
            Search
          </Text>
        </TouchableOpacity>

        {/* Button 3 */}
        <TouchableOpacity
          onPress={() => onPressButton("Dua")}
          style={{
            backgroundColor: "#4e5ba1",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 150,
            margin: 10,
          }}
        >
          <Image
            source={require("./assets/bookmark.png")}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
            Bookmarks
          </Text>
        </TouchableOpacity>

        {/* Button 4 */}
        <TouchableOpacity
          onPress={() => onPressButton("Tasbeeh")}
          style={{
            backgroundColor: "#4e5ba1",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 150,
            margin: 10,
          }}
        >
          <Image
            source={require("./assets/download.jpeg")}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
