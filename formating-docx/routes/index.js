var express = require("express");
// const { uploadDataToObjData } = require("../utils/file-manage");
// const { runDocx } = require("../utils/run");
var router = express.Router();
let app = express();



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "shortcut-docx", hello: "hello world" });
});

router.get("/home", function (req, res, next) {
  res.render("home", { title: "shortcut-docx", hello: "hello world" });
});

// router.post("/home", async function(req, res){
//   // uploadDataToObjData(req.body.postInput);
//   // runDocx();

//   // console.log(req.body.postInput)
//   await res.redirect("/home");
// });

module.exports = router;
