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

router.get("/home", async (req, res) => {
  res.render("home", { title: "shortcut-docx" });
});

router.post("/deleteDb", async function (req, res) {
  req.complete ? await mentahanDataDb.deleteMany() : false;
  res.redirect("/home");
});

router.post("/home", async function (req, res) {
  let data = req.body.postInput;
  if (data.length > 0) {
    await mentahanData(data);
  }

  // mengirim data ke database melalui module db_manage.js

  res.redirect("/home");
});

router.get("/setting", async function (req, res) {
  const hslData = await mentahanDataDb.find();
  if (hslData.length != 0) {
    res.render("setting", {
      teks: JSON.stringify(hslData),
      title: "shortcut-docx",
    });
  } else {
    res.render("setting", { title: "shortcut-docx" });
  }
});

module.exports = router;
