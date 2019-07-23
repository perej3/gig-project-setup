import { httpGet } from "./http.service";
import { getAnswers } from "./inquirer";
import { ShipModule, StarshipValue } from "./starwars.model";
import { welcome } from "./welcome.message";
import { loader } from "./loading.buffer";

export function main() {
  welcome();

  loader();

  getStarships().then(response => getAnswers(response));

  async function getStarships(): Promise<ShipModule<StarshipValue>[]> {
    let starshipUrl = `https://swapi.co/api/starships/`;
    let starShipResponse: ShipModule<StarshipValue>[] = [];

    while (starshipUrl != null) {
      const starShipsApi = await httpGet(starshipUrl);

      for (let i = 0; i < starShipsApi.data.results.length; i++) {
        let shipName: string = starShipsApi.data.results[i].name;
        let pilotUrls: string[] = starShipsApi.data.results[i].pilots;

        starShipResponse.push({
          name: shipName,
          value: {
            name: shipName,
            piloturls: pilotUrls
          }
        });
      }
      starshipUrl = starShipsApi.data.next;
    }

    return starShipResponse;
  }
}
main();
