var express = require("express");
const { manageText } = require("./../utils/pusat_pengolah_data");
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
  manageText(data)

  res.redirect("/home");
});

module.exports = router;
