'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Post = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  caption: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  likes: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  display_src: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = Post;
