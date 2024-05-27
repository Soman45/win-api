'use strict';
const bcrypt = require('bcryptjs');

// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Product, { foreignKey: 'userId' });
  };

  return User;
};

