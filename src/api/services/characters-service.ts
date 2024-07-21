import { Character } from "../../interfaces";
import { rickandMortyApi } from "../config";
import { ApiCharacter } from "../interfaces";

export async function getMultipleCharactersById(characterIDs: string[]) {
  try {
    const characterPromises = characterIDs.map((id) =>
      rickandMortyApi.get<ApiCharacter>(`/character/${id}`)
    );

    const characterResponses = await Promise.all(characterPromises);

    const characters: Character[] = characterResponses.map(({ data }) => ({
      id: data.id,
      name: data.name,
      image: data.image,
    }));

    return characters;
  } catch (error) {
    console.error(error);
    throw new Error("Error during the retrieval of characters");
  }
}
