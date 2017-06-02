'use strict';

const User = require('./user')
const Post = require('./post')
const Comment = require('./comment');

// User.hasMany(Comment);
// Comment.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
// Post.belongsToMany(User, {through: 'Comment'});
// User.belongsToMany(Post, {through: 'Comment'});

module.exports = {User, Post, Comment};
