const api = module.exports = require('express').Router()
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

const Post = require('../db/models/post');
const Comment = require('../db/models/comment');
const User = require('../db/models/user');
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
  .post('/comments', function(req, res, next) {
      const user = req.body.user;
      const post_id = req.body.postId;
      const text = req.body.text;

      Comment.create({
        user: user,
        post_id: post_id,
        text: text
      })
          .then(result => {
              res.status(200).send(result);
          })
          .catch(next);
  })
  .delete('/comment/:id', (req, res) => {
      const id = req.params.id;

      Comment.destroy({
        where: { id: id }
      })
          .then(deletedComment => {
            res.json(deletedComment);
          })
  })
  .put('/post/:id', (req, res) => {
      const id = req.params.id;

      Post.find({
        where: { id: id }
      })
          .then(post => {
              const prevLikes = post.likes;

              return post.updateAttributes({
                  likes: prevLikes + 1
              })
          })
          .then(updatedPost => {
              res.json(updatedPost);
          })
  })
  // .use('/users', users)
  // .use('/posts', posts)
  // .use('/comments', comments)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
