import chalk from "chalk";
import figlet from "figlet";

export function welcome() {
  figlet("Star Wars", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err.message);
      return;
    }
    console.log(chalk.green(data || "No Data"));
  });
}
