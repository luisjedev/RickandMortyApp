import { useParams } from "react-router-dom";
import { useGetLocationById } from "../hooks";
import { Details } from "../components";
import { constantes } from "../utils";

export function LocationDetails() {
  const { itemId } = useParams<{ itemId: string }>();

  const { location, isError, error, isLoading } = useGetLocationById(itemId!);

  if (isLoading) {
    return <p className="text-center mt-2">{constantes.states.LOADING}</p>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (!location) {
    return (
      <p className="text-center mt-2">
        {constantes.errors.LOCATIONS_NOT_FOUND}
      </p>
    );
  }

  return (
    <Details
      title={location.name}
      subtitle={location.dimension}
      domain={constantes.domains.LOCATIONS}
      domainItemID={location.id}
      characters={location.residents}
    />
  );
}
