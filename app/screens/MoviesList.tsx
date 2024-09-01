import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import FooterNav from "../components/FooterNav";

interface Movie {
  id: string;
  name: string;
  year: number;
  genre: string;
  cover_photo_url: string;
  resume: string;
}

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://10.0.2.2:8000/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePress = (movieId: string) => {
    navigation.navigate("screens/MovieDetails", { id: movieId });
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.movieContainer}>
        <Image
          source={{ uri: item.cover_photo_url }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.details}>
            {item.year} | {item.genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available movies</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />

      <FooterNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 30,
  },
  headerTitle: {
    color: "yellow",
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  list: {
    padding: 10,
  },
  movieContainer: {
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#222",
    elevation: 3,
  },
  coverImage: {
    width: 100,
    height: 150,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    color: "#ccc",
  },
  loaderContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
});

export default MoviesList;
