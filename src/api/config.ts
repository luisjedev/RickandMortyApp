import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const rickandMortyApi = axios.create({
  baseURL: API_URL,
});
