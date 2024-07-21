import { LocationsList } from "../components";
import { useGetLocations } from "../hooks";
import { constantes } from "../utils";

export function LocationsRoute() {
  const { data, isLoading, error, status, fetchNextPage, hasNextPage } =
    useGetLocations();

  if (isLoading) {
    return <p className="text-center mt-2">{constantes.states.LOADING}</p>;
  }

  if (status === "error") {
    return <p className="text-center mt-2">{error?.message}</p>;
  }

  if (!data) {
    return (
      <p className="text-center mt-2">
        {constantes.errors.LOCATIONS_NOT_FOUND}
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-5 mb-4 items-center">
      {data.pages.map((page) => {
        return (
          <LocationsList key={page.results[0].id} locations={page.results} />
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
