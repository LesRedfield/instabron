const db = require('../db') //this is required
const Comment = require('../db/models/comment');
const Post = require('../db/models/post');

const router = require('express').Router()

// router.post('/', function(req, res, next) {
//     Comment.findAll({
//             include: [Post]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });
//
// router.get('/:id', function(req, res, next) {
//     Comment.findOne({
//             where:{id:req.params.id},
//             include: [Post]
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

module.exports = router;
