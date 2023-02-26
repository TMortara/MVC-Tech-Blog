const sequelize = require('../config/connection');
const seedUsers = require('./userData.json');
const seedPosts = require('./blogData.json');
const seedComments = require('./commentData.json');

const seedAll = async () => {
    await sequelize.sync({ force:true });

    await seedUsers();
    await seedPosts();
    await seedComments();

    process.exit(0);
};

seedAll();