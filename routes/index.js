const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello there",
    user: "Ali",
    added: new Date(),
  },
  {
    text: "Hi, how are you?",
    user: "Imran",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  const newUser = req.body.user;
  const newText = req.body.text;
  messages.push({ text: newText, user: newUser, added: new Date() });
  res.redirect("/");
});
module.exports = router;
