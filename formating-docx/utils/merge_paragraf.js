require("./db_manage");
const mentahanDataDb = require("../model/mentahan");

const mergeParagraf = async () => {
  const data = await mentahanDataDb.find();
  console.log(data)
  data.forEach((e, i) => {
    let enter = !cekEnter(e) == false;
    let paragraf = pemisahParagraf(enter, data, e, i);
  });
};
mergeParagraf();

function cekEnter(e) {
  let teks = e.teks.join("");
  if (
    teks.includes("\n") &&
    !/[a-z]/gi.test(teks.toLowerCase()) &&
    !/\d/gi.test(teks)
  ) {
    return true;
  };
};

function pemisahParagraf(enter, data, e, i) {
  console.log(data)
};
// module.exports = mergeParagraf;
