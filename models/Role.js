const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        adc: {
            type: DataTypes.BOOLEAN,
        },
        support: {
            type: DataTypes.BOOLEAN,
        },
        mid: {
            type: DataTypes.BOOLEAN,
        },
        jungle: {
            type: DataTypes.BOOLEAN,
        },
        top: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'role',
    }
);

module.exports = Role;