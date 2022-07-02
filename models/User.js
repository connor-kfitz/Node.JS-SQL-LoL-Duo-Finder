const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adc: {
            type: DataTypes.STRING,
        },
        support: {
            type: DataTypes.STRING,
        },
        mid: {
            type: DataTypes.STRING,
        },
        jungle: {
            type: DataTypes.STRING,
        },
        top: {
            type: DataTypes.STRING,
        },
        soloDuoRank: {
            type: DataTypes.STRING,
        },
        flexRank: {
            type: DataTypes.STRING,
        },
        userWinrate: {
            type: DataTypes.INTEGER,
        },
        gameName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;