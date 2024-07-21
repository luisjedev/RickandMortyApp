import { useParams } from "react-router-dom";
import { useGetEpisodeById } from "../hooks";
import { CommentsForm, Details } from "../components";
import { constantes } from "../utils";

export function EpisodeDetails() {
  const { itemId } = useParams<{ itemId: string }>();

  const { episode, isError, error, isLoading } = useGetEpisodeById(itemId!);

  if (isLoading) {
    return <p className="text-center mt-2">{constantes.states.LOADING}</p>;
  }

  if (isError) {
    return <p className="text-center mt-2">{error?.message}</p>;
  }

  if (!episode) {
    return (
      <p className="text-center mt-2">{constantes.errors.EPISODES_NOT_FOUND}</p>
    );
  }

  return (
    <>
      <Details
        title={`${episode.episode}: ${episode.name}`}
        subtitle={episode.air_date}
        domain={constantes.domains.EPISODES}
        domainItemID={episode.id}
        characters={episode.characters}
      />
      <CommentsForm />
    </>
  );
}
