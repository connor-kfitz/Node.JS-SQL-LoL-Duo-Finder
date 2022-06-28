const { Role } = require('../models');

const roleData = [
    {

    },
];

const seedRole = () => Role.bulkCreate(roleData);

module.exports = seedRole;