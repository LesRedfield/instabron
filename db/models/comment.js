'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const User = require('./user');
const Post = require('./post');

const Comment = db.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
  	allowNull: false
  }

});

module.exports = Comment;
