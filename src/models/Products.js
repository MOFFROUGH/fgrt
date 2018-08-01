const uuid = require('uuid/v4'); // ES5
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid()
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    src: DataTypes.STRING,
    color: DataTypes.STRING
  })

  Product.associate = function (models) {
  }

  return Product
}
