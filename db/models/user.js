'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  username: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = User;
