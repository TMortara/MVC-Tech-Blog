# MVC-Tech-Blog

## Description

## Table of Contents
- [Installation Steps](#installation-steps)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Built With](#built-with)
- [Resources Used to Complete Project](#resources-used-to-complete-project)
- [License](#license)
- [Recording](#recording)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Installation Steps
Before using this application you must [install Node.js](https://nodejs.org/en/).

After installing Node.js, open the integrated terminal in VS Code and run `npm install`.  This will install all of the dependencies listed in the package.json file. 

<u>Installation Resources</u>:
- [Install ]()
- [Install Sequelize](https://sequelize.org/docs/v6/getting-started/)


## Usage
1. Before beginning make sure you have completed the [Installation Steps](#installation-steps)
2. Open integrated terminal in VS Code
3. Sign into your MySQL database by running `mysql -u root -p` then enter your password
4. From the Command Line run `SOURCE db/schema.sql;` 
5. Next run `USE ;`
6. Next you will need to seed your database.  Exit MySQL and run `node seeds/index.js`
7. Once you database is seeded you can run `node server.js` to start your server.
8. 

## File Structure
The directory for this application is as follows:
- /config: configuration file for database
- /db: database schema
- /models: 
- /routes: 
- /seeds: 

## Built With:
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Resources Used to Complete Project
### Sequelize Documentation
 - [Model Querying Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
 - [Sub Queries](https://sequelize.org/docs/v7/core-concepts/validations-and-constraints/#note-about-allownull-implementation)
 - [Advanced M:N Associations](https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#through-tables-versus-normal-tables-and-the-super-many-to-many-association)
 - [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Recording

## Screenshots

## Credits


