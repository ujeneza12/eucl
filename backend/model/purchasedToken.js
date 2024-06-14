const { DataTypes } = require("sequelize");
const db = require("../db");

const PurchasedToken = db.define(
  "PurchasedToken",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    meter_number: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    token_status: {
      type: DataTypes.ENUM("USED", "NEW", "EXPIRED"),
      defaultValue: "NEW",
      allowNull: false,
    },
    token_value_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchased_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "purchased_token",
  }
);

module.exports = PurchasedToken;
