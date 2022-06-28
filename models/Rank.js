const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Solo extends Model {}
class Flex extends Model {}

Solo.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        iron: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        bronze: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        silver: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        gold: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        platinum: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        diamondPlus: {
            type: DataTypes.Strings,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'solo',
    }
);
Flex.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement,
        },
        iron: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        bronze: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        silver: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        gold: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        platinum: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        diamondPlus: {
            type: DataTypes.Strings,
            allowNull: false,
        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'flex',
    }
);

module.exports = Solo;
module.exports = Flex;