import { Location } from "../interfaces";
import { constantes } from "../utils/";
import { ListItem } from "./";

type LocationListProps = {
  locations: Location[] | undefined;
};

export function LocationsList({ locations }: Readonly<LocationListProps>) {
  return (
    <section className="w-full grid gap-2 gap-x-4 grid-cols-1 xs:grid-cols-2">
      {locations && locations.length > 0 ? (
        locations.map((location) => (
          <ListItem
            key={location.id}
            id={location.id}
            domain={constantes.domains.LOCATIONS}
            header={location.type}
            title={location.name}
            footer={location.dimension}
          />
        ))
      ) : (
        <h2>{constantes.errors.LOCATIONS_NOT_FOUND}</h2>
      )}
    </section>
  );
}
