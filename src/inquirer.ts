import * as inquirer from "inquirer";
import * as axs from "./axiosAPI";
import {
  ShipModule,
  Value,
  PilotAnswerValue,
  StarshipAnswer,
  PilotAnswer
} from "./interfaces";

export function InquirerQ(starShipResponse: ShipModule<Value>[]) {
  inquirer.prompt(Questions(starShipResponse)).then(answers => {
    //console.log("FFF", answers.Starships);
    // answers.Pilots.name
    console.info("Ship Selected:", answers.Starship.name);
    console.info("Pilot Selected:", answers.Pilot.name);
    console.info("Pilot Details", answers.Pilot);
  });
}

export function Questions(
  starShipResponse: ShipModule<Value>[]
): inquirer.ListQuestion<StarshipAnswer & PilotAnswer>[] {
  let Ship: inquirer.Question<PilotAnswer> = {
    type: "list",
    name: "Starship",
    message: "Select a Starship",
    choices: starShipResponse
  };

  let Plot: inquirer.Question<StarshipAnswer> = {
    type: "list",
    name: "Pilot",
    message: "Select Pilot",
    choices(answers) {
      // console.log(answers);
      return GetPilots(answers.Starship.url);
    }
  };
  return [Ship, Plot];
}

async function GetPilots(StarshipKey: string[]) {
  const PilotUrls = StarshipKey;

  let array: ShipModule<PilotAnswerValue>[] = [];

  if (PilotUrls.length === 0) {
    array.push({
      name: "No Pilots",
      value: {
        name: "No Details found",
        height: 0
      }
    });
    return array;
  }

  for (let i = 0; i < PilotUrls.length; i++) {
    const pilot = await axs.GetAPIData(PilotUrls[i]);

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
