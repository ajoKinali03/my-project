let express = require("express");
let router = express.Router();
let mentahanDataDb = require("./../model/mentahan");
const mentahanData = require("./../utils/pusat_pengolah_data");

require("./../utils/db_manage");

let app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "shortcut-docx", hello: "hello world" });
});

// router.get("/home", async function (req, res, next) {
//   res.render("home", { title: "shortcut-docx", hello: "hello world" });
// });

router.get("/home", async (req, res) => {
  const hslData = await mentahanDataDb.find();
  if (hslData.length != 0) {
    let teks = [];
    hslData.forEach((e) => {
      teks.push(e.teks.join(""));
    });
    res.render("home", {
      teks: teks.join(""),
      title: "shortcut-docx",
      hello: "hello world",
    });
  } else {
    res.render("home", { title: "shortcut-docx", hello: "hello world" });
  }
  // res.render("home", { title: "shortcut-docx", hello: "hello world" });
});

router.post("/home", async function (req, res) {
  if (req.body.postInput.length > 0) {
    let data = req.body.postInput;
    await mentahanData(data);
  }

  // mengirim data ke database melalui module db_manage.js

  res.redirect("/home");
});

router.post("/deleteDb", async function (req, res) {
  req.complete ? await mentahanDataDb.deleteMany() : false;
  res.redirect("/home");
});

module.exports = router;
