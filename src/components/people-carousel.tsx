import { Character } from "../interfaces";
import { constantes } from "../utils";

type PeopleCarouselProps = {
  title: string;
  characterList: Character[];
};

export function PeopleCarousel({
  title,
  characterList,
}: Readonly<PeopleCarouselProps>) {
  return (
    <main className="w-full">
      <h1 className="font-semibold mb-3">{title}</h1>
      <section className="flex gap-5 justify-start items-start overflow-x-scroll no-scrollbar">
        {characterList && characterList.length > 0 ? (
          characterList.map((character) => (
            <article
              className="w-[60px] h-auto flex flex-col justify-start items-center gap-1"
              key={character.id}
            >
              <div className="w-[50px]">
                <img
                  className="object-cover rounded-full"
                  src={character.image}
                  alt={character.name}
                />
              </div>
              <p className="text-xs text-center line-clamp-3">
                {character.name}
              </p>
            </article>
          ))
        ) : (
          <p>{constantes.errors.CHARACTERS_NOT_FOUND}</p>
        )}
      </section>
    </main>
  );
}
