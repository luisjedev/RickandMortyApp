import { useGetMultipleCharacters } from "../hooks";
import { constantes, extractCharacterIds } from "../utils";
import { PeopleCarousel } from "./";

type DetailsProps = {
  title: string;
  subtitle: string;
  domain: string;
  domainItemID: number;
  characters: string[];
};

export function Details({
  title,
  subtitle,
  domain,
  domainItemID,
  characters,
}: Readonly<DetailsProps>) {
  const { characterList, isLoading } = useGetMultipleCharacters(
    domain,
    domainItemID,
    extractCharacterIds(characters)
  );

  return (
    <div className="mb-4">
      <header className="mb-5">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </header>
      {isLoading ? (
        <p className="text-center mt-2">{constantes.states.LOADING}</p>
      ) : (
        <PeopleCarousel
          title={
            domain === constantes.domains.EPISODES
              ? constantes.literals.CHARACTERS
              : constantes.literals.RESIDENTS
          }
          characterList={characterList ?? []}
        />
      )}
    </div>
  );
}
