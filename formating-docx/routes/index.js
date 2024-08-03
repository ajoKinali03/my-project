let express = require("express");
let router = express.Router();
const mentahanData = require("./../utils/pusat_pengolah_data");
const spclChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\n\t]/;
// let mentahanDataDb = require("./../model/mentahan");
// require("./../utils/db_manage");

let app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "shortcut-docx", hello: "hello world" });
});

// api
// router.get("/home/api", async function (req, res, next) {
//   const hslData = await mentahanDataDb.find();
//   res.send(hslData);
// });

router.get("/home", (req, res) => {
  res.render("home", {
    title: "shortcut-docx",
  });
  // let data = await mentahanDataDb.find();

  // if(data[0] != undefined){
  //   res.render("home", {
  //     title: "shortcut-docx",
  //     teks: data.map((e) => e.teks.join("")).join(""),
  //     teks: data[0].teks.join(""),
  //   });
  // }else{
  // };
  // res.render("home", {
  //   title: "shortcut-docx",
  // });
});

// router.post("/deleteDb", async function (req, res) {
//   req.complete ? await mentahanDataDb.deleteMany() : false;
//   res.redirect("/home");
// });

router.post("/home", async function (req, res) {
  let data = req.body.postInput;
  if (data.length > 0) {
    data = JSON.parse(data);
    if (spclChar.test(data.teks) && /[a-zA-Z\d]/.test(data.teks)) {
      try {
        let docxBuffer = await mentahanData(data);
        res.set({
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "Content-Disposition": "attachment; filename=Makalah.docx",
        });
        return res.send(docxBuffer);
      } catch (error) {
        console.error(error);
        return res.status(500).send("Error processing data");
      }
    }else{
      return res.redirect("/home");
    }
  } else {
    return res.redirect("/home");
  }
});

// router.get("/setting", async function (req, res) {
//   const hslData = await mentahanDataDb.find();
//   if (hslData.length != 0) {
//     res.render("setting", {
//       teks: JSON.stringify(hslData),
//       title: "shortcut-docx",
//     });
//   } else {
//     res.render("setting", { title: "shortcut-docx"});
//   }
// });

// router.get("/about", async function (req, res) {
//   res.render("about", {
//     title: "shortcut-docx",
//   });

// const hslData = await mentahanDataDb.find();
// if (hslData.length != 0) {
//   res.render("setting", {
//     teks: JSON.stringify(hslData),
//     title: "shortcut-docx",
//   });
// } else {
//   res.render("setting", { title: "shortcut-docx"});
// }
// });

router.get("/referensi", async function (req, res) {
  res.render("referensi", {
    title: "shortcut-docx",
  });

  // const hslData = await mentahanDataDb.find();
  // if (hslData.length != 0) {
  //   res.render("setting", {
  //     teks: JSON.stringify(hslData),
  //     title: "shortcut-docx",
  //   });
  // } else {
  //   res.render("setting", { title: "shortcut-docx"});
  // }
});

module.exports = router;
