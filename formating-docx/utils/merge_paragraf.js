require("./db_manage");
const mentahanDataDb = require("../model/mentahan");

const mergeParagraf = async () => {
  const data = await mentahanDataDb.find();
  data.forEach((e, i) => {
    let enter = !cekEnter(data, e, i) == false;
    console.log(enter);
  });
};
mergeParagraf();

function cekEnter(data, e, i) {
  let teks = e.teks.join("");
  if (
    teks.includes("\n") &&
    !/[a-z]/gi.test(teks.toLowerCase()) &&
    !/\d/gi.test(teks)
  ) {
    return true;
  };
}
// module.exports = mergeParagraf;
