'use strict';

const { Sequelize } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      tittle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId:{
        type: DataTypes.UUID,
        allowNull: false
      },
       isCompleted: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false
       },
       priority:{
         type: DataTypes.INTEGER,
         allowNull: false
       },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('todos');
  }
};