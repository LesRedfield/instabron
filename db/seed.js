const db = require('../db')

const seedUsers = () => db.Promise.map([
  { id: 1, username: "JBinder919" },
  { id: 2, username: "Otto-P" },
  { id: 3, username: "kingjames23" },
  { id: 4, username: "brdmn" },
], user => db.model('users').create(user));

const seedPosts = () => db.Promise.map([
  { id: 1, caption: "Play it like a song!", likes: 56, display_src: "https://lh6.googleusercontent.com/-24-N4DZIl-o/AAAAAAAAAAI/AAAAAAAAHVk/0MHWykKAbbQ/s0-c-k-no-ns/photo.jpg" },
  { id: 2, caption: "Pound it!", likes: 59, display_src: "https://media.tenor.co/images/8cbb6538ffae107647ed0c5ba52961c1/raw" },
  { id: 3, caption: "Hi, Gibbles.", likes: 79, display_src: "https://usatftw.files.wordpress.com/2017/02/usatsi_9863193_168380427_lowres.jpg" },
  { id: 4, caption: "Bad Offense", likes: 47, display_src: "https://usatthebiglead.files.wordpress.com/2014/02/lebron-james-game-winning-3-against-golden-state.gif" },
  { id: 5, caption: "What goes up...", likes: 66, display_src: "http://fansided.com/files/2016/01/lebron-james-nba-cleveland-cavaliers-philadelphia-76ers-3.jpg" },
  { id: 6, caption: "...must come down.", likes: 33, display_src: "https://usatthebiglead.files.wordpress.com/2014/02/lebron-james-celebrates-game-winning-3-against-golden-state.gif?w=640&h=369" }
], post => db.model('posts').create(post));

const seedComments = () => db.Promise.map([
 { id: 1, user: "JBinder919", post_id :1, text: "You're doing it wrong." },
 { id: 2, user: "Otto-P", post_id :3, text: "Did that even go in?" },
 { id: 3, user: "kingjames23", post_id :5, text: "Bet your ass it did!" },
 { id: 4, user: "brdmn", post_id :5, text: "He's a Warrior killer!" },
 { id: 5, user: "kingjames23", post_id :5, text: "Sucks to be those fans." }
 ], comment => db.model('comments').create(comment));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedPosts)
   .then(posts => console.log(`Seeded ${posts.length} posts OK`))
   .then(seedComments)
   .then(comments => console.log(`Seeded ${comments.length} comments OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
