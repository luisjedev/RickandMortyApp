import { useQuery } from "@tanstack/react-query";
import { getEpisodeById } from "../api";
import { Episode } from "../interfaces";

export function useGetEpisodeById(id: string) {
  const { data, isLoading, isError, error } = useQuery<Episode, Error>({
    queryKey: ["episode", id],
    queryFn: () => getEpisodeById(id),
  });

  return {
    episode: data,
    isLoading,
    isError,
    error,
  };
}
