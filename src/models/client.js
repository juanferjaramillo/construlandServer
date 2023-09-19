const { DataTypes } = require("sequelize");

const clientmodel = (sequelize) => {
  sequelize.define(
    "client",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { timeStamps: false }
  );
};
module.exports = clientmodel;
