import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <Ionicons name="film-outline" size={32} style={styles.icon} />
        <Text style={styles.title}>Movie Mobile App</Text>
      </View>
      <View>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/background.jpg")}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            {/* Centered text */}
            <Text style={styles.text}>
              Watch your favourite movies {"\n"}
              <Text style={styles.textSecondary}>Anywhere, anytime</Text>
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/screens/MoviesList")}
            >
              <Text style={styles.buttonText}>Sign in with your </Text>
              <Image
                source={require("../../assets/images/facebook_logo.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}> account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "95%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  textSecondary: {
    color: "yellow",
  },
  icon: {
    marginRight: 10,
    color: "yellow",
  },
  devider: {
    fontSize: 2,
    backgroundColor: "yellow",
    width: "100%",
    height: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 22,
    color: "white",
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});
export default LoginScreen;
