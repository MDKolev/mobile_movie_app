import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
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
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging'; 

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "73835811828-1ih1iigdobq9qsoecmb33egdee2kmgus.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const getFcmToken = async () => {
    try {
      await messaging().requestPermission();
      const token = await messaging().getToken();
      return token;
    } catch (error) {
      console.error('Error fetching FCM token:', error);
      return null;
    }
  };

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      if (response?.type === "success") {
        const token = response.authentication?.accessToken;
        if (token) {
          await getUserInfo(token);
          router.push("/screens/MoviesList");
        }
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;

    try {
      const userResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await userResponse.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);

      const fcmToken = await getFcmToken();

      await fetch('http://localhost:8000/api/google-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          googleUser: user,
          fcmToken: fcmToken
        }),
      });

      console.log('User and FCM token successfully sent to the backend');
    } catch (e) {
      console.log(e);
    }
  };

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
          source={require("@/assets/images/background.jpg")}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.text}>
              Watch your favourite movies {"\n"}
              <Text style={styles.textSecondary}>Anywhere, anytime</Text>
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => promptAsync()}
            >
              <Text style={styles.buttonText}>Sign in with your </Text>
              <Image
                source={require("@/assets/images/google_logo.png")}
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
    height: 90,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 10,
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
