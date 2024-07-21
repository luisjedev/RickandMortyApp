import { useQuery } from "@tanstack/react-query";
import { Character } from "../interfaces";
import { getMultipleCharactersById } from "../api/services";

export function useGetMultipleCharacters(
  domain: string,
  domainItemID: number,
  charactersIDs: string[]
) {
  const { data, isLoading, isError, error } = useQuery<Character[], Error>({
    queryKey: ["characters", domain, domainItemID],
    queryFn: () => getMultipleCharactersById(charactersIDs),
  });

  return {
    characterList: data,
    isLoading,
    isError,
    error,
  };
}
