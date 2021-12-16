'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      // userId
      this.belongsTo(User, {foreignKey: 'userId'})
    }

    toJSON(){     //это нужно чтобы скрыть индентификатор то есть id 
      return {...this.get(), id:undefined}
    }
  };
  ToDo.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false
  },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'not description'
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    priority:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    userId:{
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: '8c751d88-c6b1-491f-8fbb-6c96e0ae6326' //потом убрать
    },
  }, {
    sequelize,
    tableName: 'todos',
    modelName: 'ToDo',
  });
  return ToDo;
};