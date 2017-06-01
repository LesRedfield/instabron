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
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
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
