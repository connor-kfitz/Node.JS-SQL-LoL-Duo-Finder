const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ranked extends Model {}

Ranked.init(
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
        modelName: 'ranked',
    }
);

module.exports = Ranked;