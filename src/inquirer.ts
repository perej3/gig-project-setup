import * as inquirer from "inquirer";
import { httpGet }from "./http.service";

import clear from "clear";
import { loader } from "./loading.buffer";
import { main } from ".";

import {
  ShipModule,
  StarshipValue,
  PilotValue,
  StarshipAnswer,
  PilotAnswer
} from "./starwars.model";

import { exitMessage } from "./console.clear";

export function getAnswers(
  starShipResponse: ShipModule<StarshipValue>[]
): void {
  inquirer.prompt(Questions(starShipResponse)).then(answers => {
    console.info("Ship Selected:", answers.starship.name);
    console.info("Pilot Selected:", answers.pilot.name);
    console.info("Pilot Details", answers.pilot);

    inquirer.prompt(exitMessage()).then(answers => {
      if (answers.toClearTerminal === true) {
        clear();
        main();
      } else {
        main();
      }
    });
  });
}

export function Questions(
  starShipResponse: ShipModule<StarshipValue>[]
): inquirer.ListQuestion<StarshipAnswer & PilotAnswer>[] {
  let ship: inquirer.Question<PilotAnswer> = {
    type: "list",
    name: "starship",
    message: "Select a Starship",
    choices: starShipResponse
  };

  let pilot: inquirer.Question<StarshipAnswer> = {
    type: "list",
    name: "pilot",
    message: "Select Pilot",
    choices(answers) {
      return GetPilots(answers.starship.pilotUrls);
    }
  };
  return [ship, pilot];
}

async function GetPilots(
  pilotUrls: string[]
): Promise<ShipModule<PilotValue>[]> {
  let array: ShipModule<PilotValue>[] = [];
  loader();
  if (!pilotUrls.length) {
    array.push({
      name: "No Pilots",
      value: {
        name: "No Details found",
        height: 0
      }
    });
    return array;
  }

  for (let i = 0; i < pilotUrls.length; i++) {
    const pilot = await httpGet(pilotUrls[i]);

    array.push({
      name: pilot.data.name,
      value: {
        name: pilot.data.name,
        height: pilot.data.height
      }
    });
  }
  return array;
}
