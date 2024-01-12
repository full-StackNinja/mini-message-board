const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello there",
    user: "Imran",
    added: new Date(),
  },
  {
    text: "Hi, how are you?",
    user: "Ali",
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
