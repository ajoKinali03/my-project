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
    if (!arrGrupId.join().includes(e.id)) {
      arrKos.push(e.id);
      data.forEach((a, idx) => {
        if (!arrGrupId.join().includes(a.id) && a.id != e.id) {
          let hslBanding = cekBanding(a, e);
          if (hslBanding) {
            arrKos.push(a.id);
          }
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

function cekBanding(e, a) {
  return cekDataStatis(e, a);
}

function cekDataStatis(e, a) {
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
  } else if (
    bndngNmr.cek_penomoran == false &&
    pmbndngNmr.cek_penomoran == false
  ) {
    if (cekTab(e).exist && cekTab(a).exist) {
      if (cekTab(e).jum == cekTab(a).jum) {
        if (cekPanjangTeks(e) && cekPanjangTeks(a)) {
          return true;
        }
      } else {
        return false;
      }
    } else if (!cekTab(e).exist && !cekTab(a).exist) {
      if (cekPanjangTeks(e) && cekPanjangTeks(a)) {
      }
    }
  }
}

function cekPanjangTeks(value) {
  let digit = value.ktgr.jumlah_huruf;
  if (digit >= 100) {
    if (value.ktgr.jumlah_titik > 1) {
      if (value.ktgr.jumlah_koma != 0) {
        return true;
      }else{return true}
    }
    if (value.ktgr.jumlah_titik == 1) {
      return true;
    }
  } else if (digit < 100) {
    jumlahKata();
    kemiripanKata();
    return;
  }
}
function kemiripanKata() {}
function jumlahKata() {}

function cekDataDinamis() {}
