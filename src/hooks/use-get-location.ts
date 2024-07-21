import { useQuery } from "@tanstack/react-query";
import { Location } from "../interfaces";
import { getLocationById } from "../api";

export function useGetLocationById(id: string) {
  const { data, isLoading, isError, error } = useQuery<Location, Error>({
    queryKey: ["location", id],
    queryFn: () => getLocationById(id),
  });

  return {
    location: data,
    isLoading,
    isError,
    error,
  };
}
