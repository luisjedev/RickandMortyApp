import { useInfiniteQuery } from "@tanstack/react-query";
import { getEpisodes } from "../api";

export function useGetEpisodes() {
  const { data, isLoading, error, status, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["episodes"],
      queryFn: ({ pageParam }) => getEpisodes(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          return pages.length + 1;
        }
      },
    });

  return {
    data,
    isLoading,
    error,
    status,
    fetchNextPage,
    hasNextPage,
  };
}
