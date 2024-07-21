import { Episode, EpisodesMappedResponse } from "../../interfaces";
import { rickandMortyApi } from "../config";
import { ApiEpisode, EpisodesApiResponse } from "../interfaces";

export const getEpisodes = async (page: number) => {
  try {
    const url = `/episode?page=${page}`;
    const { data } = await rickandMortyApi.get<EpisodesApiResponse>(url);

    const episodes: Episode[] = data.results.map((episode: ApiEpisode) => ({
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      characters: episode.characters,
    }));

    const response: EpisodesMappedResponse = {
      info: data.info,
      results: episodes,
    };

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during the retrieval of episodes");
  }
};

export async function getEpisodeById(id: string) {
  try {
    const url = `/episode/${id}`;
    const { data } = await rickandMortyApi.get<ApiEpisode>(url);

    const episode: Episode = {
      id: data.id,
      name: data.name,
      air_date: data.air_date,
      episode: data.episode,
      characters: data.characters,
    };

    return episode;
  } catch (error) {
    console.log(error);
    throw new Error("Error during the retrieval of episode");
  }
}
