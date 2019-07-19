# Converting to Type Script

## Description
### Setup
For the task, **typescript** was installed by using `npm install -g typescript` in order for the conversion to be possible. Additional modules were required such as the clock which can be installed using `npm install tsc-watch`. The following file **tsconfig.json** needs to be created in order for typescript to work. 
### Task
To compile the program for the first time (without the watch), the following command `npm run compile` must be utilised. Multiple typescript files were created and the functions were moved to their respective file. This was done with the use of `export` and `import`. This greatly improves readability and maintainability of the code. Interfaces and the declaration of data types of variables, were implemented to satisfy typescript formats.

## Table

```markdown
| Task Name                   | Task Desc                  | Output                                                |
|-----------------------------|----------------------------|-------------------------------------------------------|
| `npm install -g typescript` | Typescript will install    |                                                       |
| `npm install tsc-watch`     | Watch will install         |                                                       |
| `npm run compile`           | Program will compile       | `tsc -p tsconfig.json`                                |
| `starwars`                  | Program will execute       | List of Spaceships will be displayed                  |
| Spaceship chosen            | User will pick a spaceship | List of Pilots of the chosen spaceship (if available) |
| Pilot chosen                | User will pick a pilot     | Properties of the chosen pilot will be displayed      |
```