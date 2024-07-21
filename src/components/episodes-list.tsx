import { Episode } from "../interfaces";
import { constantes } from "../utils/constants";
import { ListItem } from "./";

type EpisodeListProps = {
  episodes: Episode[] | undefined;
};

export function EpisodesList({ episodes }: Readonly<EpisodeListProps>) {
  return (
    <section className="w-full grid gap-2 gap-x-4 grid-cols-1 xs:grid-cols-2">
      {episodes && episodes.length > 0 ? (
        episodes.map((episode: any) => (
          <ListItem
            key={episode.id}
            id={episode.id}
            domain={constantes.domains.EPISODES}
            header={episode.episode}
            title={episode.name}
            footer={episode.air_date}
          />
        ))
      ) : (
        <h2>{constantes.errors.EPISODES_NOT_FOUND}</h2>
      )}
    </section>
  );
}
