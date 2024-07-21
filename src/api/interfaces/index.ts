export interface ApiEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

export interface ApiCharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: Origin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface ApiResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodesApiResponse {
  info: ApiResponseInfo;
  results: ApiEpisode[];
}

export interface CharactersApiResponse {
  info: ApiResponseInfo;
  results: ApiCharacter[];
}

export interface LocationsApiResponse {
  info: ApiResponseInfo;
  results: ApiLocation[];
}
