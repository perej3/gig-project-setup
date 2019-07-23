import * as inquirer from "inquirer";
import * as CLI from "clui";

const Spinner = CLI.Spinner;

export function loader(): void {
  let countdown = new Spinner("Loading....  ", [
    "⣾",
    "⣽",
    "⣻",
    "⢿",
    "⡿",
    "⣟",
    "⣯",
    "⣷"
  ]);

  countdown.start();

  let number = 2;
  setInterval(function() {
    number--;
    countdown.message("Loading in " + number + " seconds...  ");
    if (number === 0) {
      process.stdout.write("\n");
      countdown.stop();
    }
  }, 1000);
}
