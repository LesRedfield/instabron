const api = module.exports = require('express').Router()
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

const Post = require('../db/models/post');
const Comment = require('../db/models/comment');
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .get('/posts', function(req, res, next) {
      Post.findAll({
              include: [Comment]
          })
          .then(result => {
              res.status(200).send(result);
          })
          .catch(next);
  })
  .use('/users', users)
  // .use('/posts', posts)
  .use('/comments', comments)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
