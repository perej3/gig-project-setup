import * as inquirer from "inquirer";

export function exitMessage(): inquirer.ConfirmQuestion<Record<string, any>> {
  let confirmation: inquirer.ConfirmQuestion<Record<string, any>> = {
    type: "confirm",
    name: "toClearTerminal",
    message: '"Do you want to clear the terminal?...(Y/N)"',
    default: false
  };

  return confirmation;
}
