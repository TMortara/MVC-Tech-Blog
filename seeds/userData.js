const { User } = require('../models');

const userdata = [
    {
        "username": "Master",
        "password": "Password0987"
    },
    {
        "username": "Username",
        "password": "Passw0d123"
    },
    {
        "username": "General",
        "password": "123Password"
    },
    {
        "username": "Corporal",
        "password": "P123assword"
    },
    {
        "username": "Halliday",
        "password": "Pass12098word"
    },
    {
        "username": "Scholars",
        "password": "Passw0123rd"
    },
    {
        "username": "Private",
        "password": "Pass1230987"
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;