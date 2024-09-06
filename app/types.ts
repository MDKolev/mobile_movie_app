export type RootStackParamList = {
  index: undefined;
  MoviesList: undefined;
  MovieDetails: { movie: Movie }; 
};

export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string;
  coverImage: any;
  resume: string;
  addedOn: string;
}