var express = require("express");
var router = express.Router();
let app = express();



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "shortcut-docx", hello: "hello world" });
});

router.get("/home", function (req, res, next) {
  res.render("home", { title: "shortcut-docx", hello: "hello world" });
});

router.post("/home", function(req, res){
  let data = req.body.postInput;
  // mengirim data ke database melalui module db_manage.js

  res.redirect("/home");
});

module.exports = router;
