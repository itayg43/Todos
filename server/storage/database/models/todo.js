"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {}
  Todo.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      isCompleted: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      isDeleted: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      completedAt: {
        defaultValue: null,
        type: DataTypes.DATE,
      },
      deletedAt: {
        defaultValue: null,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Todo",
      tableName: "todos",
      timestamps: false,
    }
  );
  return Todo;
};
