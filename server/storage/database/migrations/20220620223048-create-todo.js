"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("todos", {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("todos");
  },
};
