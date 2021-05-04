const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  imageUrl: { type: DataTypes.STRING, allowedNull: false },
  name: { type: DataTypes.STRING, allowedNull: false, unique: true },
  count: { type: DataTypes.INTEGER, allowNull: false },
  weight: { type: DataTypes.INTEGER, allowNull: false },
});

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.DATE, allowedNull: false },
});
const Size = sequelize.define("size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  width: { type: DataTypes.INTEGER, allowNull: false },
  height: { type: DataTypes.INTEGER, allowNull: false },
});

Product.hasMany(Comment);
Comment.belongsTo(Product);
Product.hasOne(Size)
Size.belongsTo(Product)
module.exports = { Product, Comment,Size };
