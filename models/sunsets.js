"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sunsets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sunsets.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Sunsets.init(
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      location: DataTypes.STRING,
      desc: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sunsets",
    }
  );
  return Sunsets;
};
