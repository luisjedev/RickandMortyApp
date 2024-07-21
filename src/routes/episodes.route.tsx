import { EpisodesList } from "../components";
import { useGetEpisodes } from "../hooks";
import { constantes } from "../utils";

export function EpisodesRoute() {
  const { data, isLoading, error, status, fetchNextPage, hasNextPage } =
    useGetEpisodes();

  if (isLoading) {
    return <p className="text-center mt-2">{constantes.states.LOADING}</p>;
  }

  if (status === "error") {
    return <p className="text-center mt-2">{error?.message}</p>;
  }

  if (!data) {
    return (
      <p className="text-center mt-2">{constantes.errors.EPISODES_NOT_FOUND}</p>
    );
  }

  return (
    <section className="flex flex-col gap-5 mb-4 items-center">
      {data.pages.map((page) => {
        return (
          <EpisodesList key={page.results[0].id} episodes={page.results} />
        );
      })}
      <button
        hidden={!hasNextPage}
        className="text-white px-4 py-2 bg-[#18186e] rounded-md m-auto shadow-md hover:shadow-lg"
        onClick={() => fetchNextPage()}
      >
        {constantes.literals.SHOW_MORE}
      </button>
    </section>
  );
}
