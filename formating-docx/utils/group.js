const { cekTab } = require("./cekTab");
const spclChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\n\t]/gi;

const crtGrupId = async (data) => {
  let arrGrupId = [],
    arrKos = [];
    data.forEach((e, i) => {
      if (!arrGrupId.join().includes(e.id)) {
        arrKos.push(e.id);
        data.forEach((a, idx) => {
          if (!arrGrupId.join().includes(a.id) && a.id != e.id) {
          let hslBanding = cekDataStatis(e, a);
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
  return inptGrupId(arrGrupId, data);
};

function inptGrupId(arrId, data) {
  return data.map((e, i) => {
    arrId.forEach((a, idx) => {
      a.forEach((b, idxb) => {
        if (b == e.id) {
          e.grup_id = "grupId";
          e.grup_id = e.grup_id + idx;
        }
      });
    });
    return e;
  });
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
      jumlahKata(e, a);
      if (cekTab(e).jum == cekTab(a).jum) {
        // cek data dinamis
        if (cekPanjangTeks(e).lebih && cekPanjangTeks(a).lebih) {
          return true;
        }
        if (cekPanjangTeks(e).kurang && cekPanjangTeks(a).kurang) {
          if (jumlahKata(e, a)) {
            // console.log("ini masuk fungsi jumlahkata");
            // apakah jumlah kata nya sama
            if (kemiripanKata(e, a)) {
              return true;
            } else {
              return true;
            }
          } else if (kemiripanKata(e, a)) {
            // apakah ada kata yang mirip walaupun satu kata
          } else {
            return true;
          }
        }
      } else {
        return false;
      }
    } else if (!cekTab(e).exist && !cekTab(a).exist) {
      if (cekPanjangTeks(e).lebih && cekPanjangTeks(a).lebih) {
        return true;
      }
      if (cekPanjangTeks(e).kurang && cekPanjangTeks(a).kurang) {
        return kemiripanKata(e, a);
      }
    }
  }
}

function cekPanjangTeks(value) {
  let lebih = false;
  let kurang = false;
  let digit = value.ktgr.jumlah_huruf;
  if (digit >= 100) {
    if (value.ktgr.jumlah_titik > 1) {
      if (value.ktgr.jumlah_koma != 0) {
        lebih = true;
      } else {
        lebih = true;
      }
    }
    if (value.ktgr.jumlah_titik == 1) {
      lebih = true;
    }
  }
  if (digit < 100) {
    kurang = true;
  }
  return { lebih: lebih, kurang: kurang };
}

function kemiripanKata(e, a) {
  let rslt = false;
  let jumMirip = 0;
  let aTeks = a.teks.join("");
  e.teks.forEach((el, idx) => {
    if (aTeks.includes(el) && el != " " && !spclChar.test(el)) {
      jumMirip++;
    }
  });
  if (jumMirip > 1) {
    rslt = true;
  }
  return rslt;
}

function jumlahKata(e, a) {
  let eKat = e.teks.join("").replace(spclChar, "-");
  let aKat = a.teks.join("").replace(spclChar, "-");
  if (eKat.split("-").join("").length == aKat.split("-").join("").length) {
    return true;
  } else {
    return false;
  }
}

// function cekDataDinamis() {}
module.exports = crtGrupId;