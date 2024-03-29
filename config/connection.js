const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, 
        {
            host: 'localhost',
             //CHANGE TO localhost before deployment to Heroku
            dialect: 'mysql',
            port: 3306,
        });

module.exports = sequelize;