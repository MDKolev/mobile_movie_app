import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import FooterNav from "../components/FooterNav";
import CustomButton from "../components/CustomButton";

const Profile: React.FC = () => {
  // Dummy user data
  const user = {
    email: "johndoe@example.com",
    username: "johndoe",
    fullName: "John Doe",
  };

  const handleLogout = () => {
    // Logic for logging out the user (e.g., clearing tokens, navigating to the login screen, etc.)
    console.log("User logged out");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Profile</Text>
        <View style={styles.infos}>
          <Image
            source={require("../../assets/images/profile-pic.jpeg")}
            style={styles.profileImage}
          ></Image>
          <Text style={styles.label}> Email:</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{user.username}</Text>

          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{user.fullName}</Text>
        </View>

        <View style={styles.logoutButton}>
          <CustomButton title="Logout" onPress={handleLogout}></CustomButton>
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
    padding: 20,
    alignItems: "center",
    marginTop: 30,
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
    marginTop: 80,
    marginBottom: 30,
    width: "80%",
  },
  title: {
    color: "yellow",
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 50,
  },
  infos: {
    alignItems: "center",
  },
  profileImage: {
    borderRadius: 30,
  },
});

export default Profile;
