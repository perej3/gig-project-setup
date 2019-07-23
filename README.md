# Converting to Type Script

## Description
### Setup
For the task, different modules are required namely:

 - Figlet : `npm install figlet`
 - Chalk : `npm install chalk`
 - Clui :  `npm install clui`
 - Clear : `npm install clear`
 - Inquirer : `npm install inquirer`

Figlet is used to generate ASCII art in the terminal, Chalk is used to give colour to text, Clui is used to incorporate animations for buffering purposes and Clear is used to clear the terminal.
 
### Task
**Figlet** and **Chalk** were used to display the  message star wars (with colour) to the user with ASCII art. Then the loading buffer will appear every time data is to be displayed with the help of the **Clui** module. When the user picks the pilot, the program will prompt a message to check if the user wants to clear the terminal. The **Inquirer** module was used to get the user input of that prompt. After the choice, the terminal will clear with the help of the **Clear** module (depending on the users' choice) and the program will start from the beginning.

## Table

| Task Name                    | Task Desc                                                 | Output                                     |
|------------------------------|-----------------------------------------------------------|--------------------------------------------|
| `npm install figlet`         | Figlet module will install                                |                                            |
| `npm install chalk`          | Chalk module will install                                 |                                            |
| `npm install clui`           | Clui module will install                                  |                                            |
| `npm install clear`          | Clear module will install                                 |                                            |
| Display StarWars with Figlet | The message starwars will be displayed                    | StarWars displayed                         |
| Colour is added to Starwars  | The message starwars will be displayed in a colour        | Starwars is displayed in Green             |
| Animation for buffer         | Buffer will appear before the data is displayed           | Loading animation with counter             |
| Inquiring user for terminal  | User will input his choice                                | Do you want to clear the terminal?...(Y/N) |
| Clearing the terminal        | Terminal will be cleared (depending on the users' choice) |                                            |