export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodesMappedResponse {
  info: ResponseInfo;
  results: Episode[];
}

export interface CharactersMappedResponse {
  info: ResponseInfo;
  results: Character[];
}

export interface LocationsMappedResponse {
  info: ResponseInfo;
  results: Location[];
}

export interface Comment {
  name: string;
  email: string;
  description: string;
}
