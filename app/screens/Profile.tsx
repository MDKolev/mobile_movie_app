import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert
} from "react-native";
import FooterNav from "../components/FooterNav";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    name: "",
    picture: ""
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("@user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Failed to load user data", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      router.dismissAll();
      Alert.alert("Logout successful!")
    } catch (error) {
      console.error("Failed to log out", error);
      Alert.alert("Logout Error", "Failed to log out. Please try again.");
    }
  };

  if (!user.email) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <View style={styles.infos}>
          <Image
            source={user.picture ? { uri: user.picture } : require("../../assets/images/profile-pic.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{user.username || "<no-username>"}</Text>

          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>

        <View style={styles.logoutButton}>
          <CustomButton title="Logout" onPress={handleLogout} />
        </View>
      </View>
      <FooterNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: 30,
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 22,
    color: "#888",
    marginTop: 20,
  },
  value: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    width: "80%",
  },
  title: {
    color: "yellow",
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  infos: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Profile;
