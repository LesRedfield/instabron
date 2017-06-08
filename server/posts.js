const db = require('../db') //this is required
const Post = require('../db/models/post');
const Comment = require('../db/models/comment');

const router = require('express').Router()

// router.get('/posts', function(req, res, next) {
//     Post.findAll({
//             include: [Comment]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

// router.get('/:id', function(req, res, next) {
//     Post.findOne({
//             where:{id:req.params.id},
//             include: [Comment]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

module.exports = router
