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
            type: DataTypes.Strings,
            allowNull: false,
        },
        password: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        userRole: {
            type: DataTypes.Strings,
        },
        userChampions: {
            type: DataTypes.Strings,
        },
        userRank: {
            type: DataTypes.Strings,
        },
        userWinrate: {
            type: DataTypes.INTEGER,
        },
        gameName: {
            type: DataTypes.Strings,
            allowNull: false,
        },
    },
    {
        
    }
);