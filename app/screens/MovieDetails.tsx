// File path: src/components/MovieDetails.tsx
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MovieDetails: React.FC = () => {
  const [isFavourite, setFavourite] = useState(false);

  const movie = {
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    coverImage: require("../../assets/images/inception.jpg"),
    resume:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    dateAdded: "2024-09-01",
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
          <Ionicons
            name="heart"
            size={30}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={movie.coverImage} style={styles.coverImage} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>
          {movie.year} | {movie.genre}
        </Text>
        <Text style={styles.resume}>{movie.resume}</Text>
        <Text style={styles.dateAdded}>Added on: {movie.dateAdded}</Text>
      </ScrollView>
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
  },
  coverImage: {
    width: "100%",
    height: 500,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  details: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
    textAlign: "center",
  },
  resume: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
  },
  dateAdded: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  header: {
    padding: 10,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default MovieDetails;
