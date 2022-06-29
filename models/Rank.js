const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rank extends Model {}

Rank.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        soloDuoRank: {
            type: DataTypes.STRING,
        },
        flexRank: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'rank',
    }
);

module.exports = Rank;