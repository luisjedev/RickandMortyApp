import { Location, LocationsMappedResponse } from "../../interfaces";
import { rickandMortyApi } from "../config";
import { ApiLocation, LocationsApiResponse } from "../interfaces";

export const getLocations = async (page: number) => {
  try {
    const url = `/location?page=${page}`;
    const { data } = await rickandMortyApi.get<LocationsApiResponse>(url);

    const locations: Location[] = data.results.map(
      (apiLocation: ApiLocation) => ({
        id: apiLocation.id,
        name: apiLocation.name,
        type: apiLocation.type,
        dimension: apiLocation.dimension,
        residents: apiLocation.residents,
      })
    );

    const response: LocationsMappedResponse = {
      info: data.info,
      results: locations,
    };

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error during the retrieval of episodes");
  }
};

export async function getLocationById(id: string): Promise<Location> {
  try {
    const url = `/location/${id}`;
    const { data } = await rickandMortyApi.get<ApiLocation>(url);

    const location: Location = {
      id: data.id,
      name: data.name,
      type: data.type,
      dimension: data.dimension,
      residents: data.residents,
    };

    return location;
  } catch (error) {
    console.log(error);
    throw new Error("Error during the retrieval of location");
  }
}
