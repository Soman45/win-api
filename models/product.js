// models/product.js
'use strict';

// models/product.js
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {});
  
    Product.associate = function(models) {
      Product.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Product;
  };
  
