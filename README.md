# Creating a CLI with Inquirer and Node JS

## Description
### Setup
For the task, **Axios** and the **Inquirer** needs to be installed in the directory of the source files. Axios is utilised so that HTTP calls can be made to the API. Inquirer is utilised for the displaying of data in a list and the ability of the user to select from the list. The project was required to be executed with `starwars` rather than `npm start`. This was done by adding a `bin:{"starwars": pathOfIndex.js}` to the **package.json** file. Also a link is required to be made with the use of `npm link` to make all of this possible.
### Task
User will be greeted by a list featuring all of the spaceships that exist in the Starwars API :- **swapi**. After one is chosen, the pilots of the ship will be displayed. If none are found, a message will appear displaying as such. If the pilot exists and one is chosen, the details of the pilot will then be displayed to the user.


## Table

| Task Name        | Task Desc                  | Output                                                |   |   |
|------------------|----------------------------|-------------------------------------------------------|---|---|
| `starwars`       | Program will execute       | List of Spaceships will be displayed                  |   |   |
| Spaceship chosen | User will pick a spaceship | List of Pilots of the chosen spaceship (if available) |   |   |
| Pilot chosen     | User will pick a pilot     | Properties of the chosen pilot will be displayed      |   |   |