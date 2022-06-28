const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedRole = require('./roleData');
const seedRank = require('./rankData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUser();

    await seedRole();

    await seedRank();
  
    process.exit(0);
  };
  
seedAll();