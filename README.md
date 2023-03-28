# MVC-Tech-Blog

## Description
The MVC-Tech Blog allows users to share ideas on all things tech.  As technology changes, users can edit and/or delete their posts.  Users can also add comments to others posts to share additional information or show appreciation for anothers work.

## Deployed Application
https://tech-talk-blog-mvc.herokuapp.com/

## Table of Contents
- [Installation Steps](#installation-steps)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Built With](#built-with)
- [Resources Used to Complete Project](#resources-used-to-complete-project)
- [License](#license)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Installation Steps
Before accessing the application locally, you must [install Node.js](https://nodejs.org/en/).

After installing Node.js, open the integrated terminal in VS Code and run `npm install`.  This will install all of the dependencies listed in the package.json file.  Following installation of all dependencies, you can see the database by running `npm run seed`.  

<u>Installation Resources</u>:
- [Install MySql2](https://www.npmjs.com/package/mysql2#installation)
- [Install Sequelize](https://sequelize.org/docs/v6/getting-started/)
- [Install Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Install bcrypt](https://www.npmjs.com/package/bcrypt)
- [Install dotenv](https://www.npmjs.com/package/dotenv)

## Usage

The application can be run locally or through the deployed link.  If you run the application locally, you will need to run steps 1-7 before accessing the application.

1. Before beginning make sure you have completed the [Installation Steps](#installation-steps)
2. Open integrated terminal in VS Code
3. Sign into your MySQL database by running `mysql -u root -p` then enter your password
4. From the Command Line run `SOURCE db/schema.sql;` 
5. Next run `USE ;`
6. Next you will need to seed your database.  Exit MySQL, open a new terminal, and run `npm run seed`
7. Once you database is seeded you can run `node server.js` to start your server.
8. The Home page will allow you to view current posts, but you cannot add, edit, or delete a post without creating an account or logging in with an existing account.
9. Once logged in, you will be taken to your Dashboard that shows all of your posts.  You can also add posts directly from the Dashboard.
10. Users can click on the post title to edit/delete the post or view comments for an single post.
11. From a single post you can click on the comment title to edit or delete a comment.
12. If you remain idle the application will have you login again before adding, editing, or deleting data.

## File Structure
The directory for this application is as follows:
- /config: configuration file for database
- /routes: routes for different requests in our application
- /db: database schema
- /models: Sequelize models used to create tables in database
- /public: includes the public css and javascript files
- /seeds: seed information for our database
- /utils: utility helper files
- /views: handlebars files for our html

## Built With:
[![Built With](https://skillicons.dev/icons?i=vscode,js,css,nodejs,bootstrap,express,heroku,mysql,sequelize&theme=dark)](https://skillicons.dev)

### Additional Technologies Used
 - Handlebars
 - dotenv
 - bcrypt

## Resources Used to Complete Project
 - [Handlebars Documentation](https://handlebarsjs.com/)

### Sequelize Documentation
 - [Model Querying Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
 - [Sub Queries](https://sequelize.org/docs/v7/core-concepts/validations-and-constraints/#note-about-allownull-implementation)
 - [Advanced M:N Associations](https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#through-tables-versus-normal-tables-and-the-super-many-to-many-association)
 - [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots

### Home Screen
<img width="800" alt="Screen Shot 2023-03-27 at 8 36 44 PM" src="https://user-images.githubusercontent.com/107971753/228104372-05a0b8c3-b81e-4548-9159-71677636f78d.png">

### Dashboard - Dashboard will show all posts for the user
<img width="800" alt="Screen Shot 2023-03-27 at 8 25 13 PM" src="https://user-images.githubusercontent.com/107971753/228103055-9ab23990-71aa-4637-9386-c45f815e61b3.png">

### Login and Register
<img width="800" alt="Screen Shot 2023-03-27 at 8 34 56 PM" src="https://user-images.githubusercontent.com/107971753/228104117-db16445f-5ccd-410f-92e1-32f3c020c14a.png">

<img width="800" alt="Screen Shot 2023-03-27 at 8 35 11 PM" src="https://user-images.githubusercontent.com/107971753/228104135-a27127b7-6e43-4990-9c81-6ecea6e4cd95.png">

### Single Post - From this page you can add a comment, delete a post, or navigate to the edit post view.
<img width="800" alt="Screen Shot 2023-03-27 at 8 22 01 PM" src="https://user-images.githubusercontent.com/107971753/228102365-fd47edec-1ece-435d-ae12-a57993b5b7c1.png">

#### Update Post
<img width="800" alt="Screen Shot 2023-03-27 at 8 23 39 PM" src="https://user-images.githubusercontent.com/107971753/228102944-fd20ecd9-1205-4368-af39-4450b8b17fe4.png">

### Update or Delete Comment
<img width="800" alt="Screen Shot 2023-03-27 at 8 24 10 PM" src="https://user-images.githubusercontent.com/107971753/228102991-9e1f4ec0-7b8f-43df-a842-a29c313ba3b8.png">

## Credits
Thank you to Jason Vissage, my T.A., Torre Taylor, our instructor, and Alexis Gonzales, my tutor to help me understand routes and assist with routing issues.

