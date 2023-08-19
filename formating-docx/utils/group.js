require("./db_manage");
const mentahanDataDb = require("../model/mentahan");
const { cekTab } = require("./cekTab");

const crtGrupId = async () => {
  let data = await mentahanDataDb.find();
  let arrGrupId = [],
    arrKos = [];
  let cekId = false,
    getId = null;
  data.forEach((e, i) => {
    // console.log(e.ktgr, e.id);
    let arrBanding = Object.values(e.ktgr);
    if (!arrGrupId.join().includes(e.id)) {
      arrKos.push(e.id);
      // const bndngNmr = cekNmr(e.teks);
      data.forEach((a, idx) => {
        if (!arrGrupId.join().includes(a.id) && a.id != e.id) {
          // const pmbndngNmr = cekNmr(a.teks);
          let arrPembanding = Object.values(a.ktgr);
          let hslBanding = cekBanding(arrBanding, arrPembanding, a, e);
          if (hslBanding) {
            arrKos.push(a.id);
          }
          // if (bndngNmr.cekNmr == pmbndngNmr.cekNmr) {
          //   arrKos.push(a.id);
          // }
        }
        if (idx == data.length - 1) {
          arrGrupId.push(arrKos);
          arrKos = [];
        }
      });
    }
  });
  console.log(arrGrupId);
  return arrGrupId;
};
crtGrupId();

function cekBanding(banding, pembanding, a, e) {
  let point = 0;
  let pointTarget = 0;
  let strPembanding = pembanding.join().replace(/\d/g, "");
  for (let i = 0; i < banding.length; i++) {
    return cekDataStatis(a, e);
  }
}

function cekDataStatis(a, e) {
  const bndngNmr = e.ktgr;
  const pmbndngNmr = a.ktgr;
  if (
    bndngNmr.cek_penomoran == pmbndngNmr.cek_penomoran &&
    bndngNmr.cek_penomoran == true &&
    pmbndngNmr.cek_penomoran == true
  ) {
    if (bndngNmr.tingkat_penomoran == pmbndngNmr.tingkat_penomoran) {
      return true;
    } else {
      return false;
    }
  } else {
    if (cekTab(e).exist && cekTab(a).exist) {
      if (cekTab(e).jum == cekTab(a).jum) {
        return true;
      } else {
        return false;
      }
    } else {
      // createTab(e, a);
      if (cekPanjangTeks()) {
        if (cekTitik() || cekKoma()) {
        } else {
          return false;
        }
      } else {
        return false;
      }
    }``
  }
}

function cekPanjangTeks() {}
function cekTitik() {}
function cekKoma() {}

function cekDataDinamis() {}
