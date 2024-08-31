import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FooterNav from "../components/FooterNav";

interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  coverImage: any;
}

const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    coverImage: require("../../assets/images/inception.jpg"),
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    coverImage: require("../../assets/images/dark_knight.jpg"),
  },
  {
    id: "3",
    title: "Interstellar",
    year: 2014,
    genre: "Science Fiction",
    coverImage: require("../../assets/images/interstellar.jpg"),
  },
  {
    id: "4",
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    coverImage: require("../../assets/images/gladiator.jpg"),
  },
  {
    id: "5",
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    coverImage: require("../../assets/images/godfather.jpg"),
  },
  {
    id: "6",
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    coverImage: require("../../assets/images/pulp_fiction.jpg"),
  },
  {
    id: "7",
    title: "The Matrix",
    year: 1999,
    genre: "Science Fiction",
    coverImage: require("../../assets/images/matrix.jpg"),
  },
  {
    id: "8",
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    coverImage: require("../../assets/images/fight_club.jpg"),
  },
  {
    id: "9",
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    coverImage: require("../../assets/images/forest_gump.jpg"),
  },
  {
    id: "10",
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    coverImage: require("../../assets/images/shawshank.jpg"),
  },
];

const MoviesList: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styles.movieContainer}>
      <Image source={item.coverImage} style={styles.coverImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>
          {item.year} | {item.genre}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available movies</Text>
      </View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "yellow",
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: 'underline'
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
});

export default MoviesList;
