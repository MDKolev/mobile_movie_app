import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

interface Movie {
  id: string;
  name: string;
  year: number;
  genre: string;
  cover_photo_url: string;
  resume: string;
  added_on: string;
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavourite, setFavourite] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:8000/api/movies/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json(); 
        setMovie(data); 
        console.log(data); 
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </SafeAreaView>
    );
  }

  if (!movie) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.error}>Movie not found</Text>
      </SafeAreaView>
    );
  }

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
        <Image
          source={{ uri: movie.cover_photo_url }}
          style={styles.coverImage}
        />
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.details}>
          {movie.year} | {movie.genre}
        </Text>
        <Text style={styles.resume}>{movie.resume}</Text>
        <Text style={styles.addedOn}>Added on: {movie.added_on}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  addedOn: {
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
  error: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default MovieDetails;
