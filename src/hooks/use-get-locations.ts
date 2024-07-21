import { useInfiniteQuery } from "@tanstack/react-query";
import { getLocations } from "../api";

export function useGetLocations() {
  const { data, isLoading, error, status, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["locations"],
      queryFn: ({ pageParam }) => getLocations(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          console.log(pages);
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
