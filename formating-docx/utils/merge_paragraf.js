const cekNmr = require("./cek_nmr");
const filterSpasi = require("./filter_spasi");

const mergeParagraf = (data) => {
  let rsltArr = [];
  let arrKos = [];
  data = filterSpasi(data);
  data.forEach((e, i) => {
    const cekNmrExist = cekNmr(e).cekNmr;
    e = e.join("");
    let teks = e;
    let enter = cekEnter(e);
    if (enter) {
      rsltArr.push(arrKos);
      rsltArr.push(teks);
      arrKos = [];
    }
    if (cekNmrExist) {
      rsltArr.push(teks);
    }
    if (!enter && !cekNmrExist) {
      arrKos.push(teks);
    }
    if (i == data.length - 1) {
      rsltArr.push(arrKos);
      arrKos = [];
    }
  });
  const arrParagraf = arrParagrafParse(rsltArr);
  // console.log(arrParagraf);
  return arrParagraf;
};

function cekEnter(e) {
  let teks = e;
  if (
    teks.includes("\n") &&
    !/[a-z]/gi.test(teks.toLowerCase()) &&
    !/\d/gi.test(teks)
  ) {
    return true;
  }
}
function arrParagrafParse(arrTeks) {
  return arrTeks.map((e, i) => {
    if (typeof e == "object") {
      if (e.join("").length < 100) {
        return e.join("");
      } else {
        return e.join("").replaceAll("\n") + "\n";
      }
    } else {
      return e;
    }
  });
}

module.exports = mergeParagraf;
