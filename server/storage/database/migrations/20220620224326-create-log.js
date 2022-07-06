"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("logs", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      stack: {
        defaultValue: null,
        type: DataTypes.TEXT,
      },
      timestamp: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("logs");
  },
};
