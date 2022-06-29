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
        Top: {
            type: DataTypes.BOOLEAN,
        },
        Jungler: {
            type: DataTypes.BOOLEAN,
        },
        Middle: {
            type: DataTypes.BOOLEAN,
        },
        ADC: {
            type: DataTypes.BOOLEAN,
        },
        Support: {
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

module.exports = new Role;