export interface EpisodeInfo {
  Title: string;
  Year: number;
  Rated: string;
  Released: Date;
  Season: number;
  Episode: number;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [{ Source: string; Value: string }];
  Metascore: string;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  seriesID: string;
  Type: string;
  Response: boolean;
}
