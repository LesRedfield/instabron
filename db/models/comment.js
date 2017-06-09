'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const User = require('./user');
const Post = require('./post');

const Comment = db.define('comments', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  post_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
  	allowNull: false
  }

});

module.exports = Comment;
