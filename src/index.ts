import * as axs from "./axiosAPI";
import { InquirerQ } from "./inquirer";
import { ShipModule, Value } from "./interfaces";

getAPI().then(response => InquirerQ(response));

async function getAPI() {
  let StarshipUrl: string = `https://swapi.co/api/starships/`;
  let starShipResponse: ShipModule<Value>[] = [];

  while (StarshipUrl != null) {
    const starShipsApi = await axs.GetAPIData(StarshipUrl);

    for (let i = 0; i < starShipsApi.data.results.length; i++) {
      let ShipName: string = starShipsApi.data.results[i].name;
      let PilotUrls: string[] = starShipsApi.data.results[i].pilots;

      starShipResponse.push({
        name: ShipName,
        value: {
          name: ShipName,
          url: PilotUrls
        }
      });
    }
    StarshipUrl = starShipsApi.data.next;
  }

  return starShipResponse;
}
