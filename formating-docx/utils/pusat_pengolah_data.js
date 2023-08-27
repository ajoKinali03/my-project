const mentahanDataDb = require("../model/mentahan");
const { createTab } = require("./cekTab");
const cekNmr = require("./cek_nmr");
const filterSpasi = require("./filter_spasi");
const crtGrupId = require("./group");
const mergeParagraf = require("./merge_paragraf");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const paragrah = mergeParagraf(lineTeks);
  const arrLineTeks = filterSpasi(paragrah);
  const idntKtgr = identifikasiKategori(arrLineTeks);
  const addTab = createTab(idntKtgr)
  const createGrupId = await crtGrupId(addTab)
  await mentahanDataDb.insertMany(createGrupId);
  return;
};

// fungsi memisahkan kalimat berdasrkan enter
function filterEnter(teks) {
  const arrWord = [...teks];
  const arrKos = [];
  let dummyArr = [];
  arrWord.forEach((e, i) => {
    dummyArr.push(e);
    if (e == "\n" || i == arrWord.length - 1) {
      arrKos.push(dummyArr.join("").replaceAll("\u0002", "-"));
      dummyArr = [];
    }
  });
  return arrKos;
}

// fungsi akhir, yiatu memberi identifikasi dan menjadikan ke objek sesuai kategori
function identifikasiKategori(arrTksLn) {
  let arrOfObjKtgr = [];

  arrTksLn.forEach((e, i) => {
    const teks = e.join("");

    let jumSpasi = Array.from(teks.matchAll(" ")).length,
      jumTab = Array.from(teks.matchAll("\t")).length,
      jumTitik = [...teks].filter((e) => e == ".").length,
      jumKoma = Array.from(teks.matchAll(",")).length;

    arrOfObjKtgr.push({
      id: "teks" + i,
      teks: e,
      grup_id: "grupId",
      ktgr: {
        jumlah_huruf: teks.length,
        tanda_enter: teks.includes("\n"),
        tanda_spasi: teks.includes(" "),
        jumlah_spasi: jumSpasi,
        tanda_tab: teks.includes("\t"),
        jumlah_tab: jumTab,
        jumlah_titik: jumTitik,
        jumlah_koma: jumKoma,
        cek_penomoran: cekNmr(e).cekNmr,
        tingkat_penomoran: cekNmr(e).tingkat,
        jenis_penomoran: cekNmr(e).tipe,
        sentence_case: sentanceCase(e),
      },
    });
  });
  return arrOfObjKtgr;
};

function sentanceCase(e) {
  let up = 0;
  let down = 0;
  let uppercase = null;
  e.forEach((a) => {
    if (/^[A-Z]/.test(a) && /[a-z]$/.test(a)) {
      up++;
    }
    if (/^[a-z]/.test(a)) {
      down++;
    }
    if (/[A-Z]/gi.test(a)) {
      uppercase = "uppercase";
    }
  });
  if (up > down) {
    return "capitalize each word";
  }
  if (/^[A-Z]/.test(e[0]) && down > up) {
    return "capitalize first word";
  }
  if (down > up) {
    return "lower case";
  }
  if (uppercase != null) {
    return uppercase;
  }
}

module.exports = mentahanData;
