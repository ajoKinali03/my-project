require("./db_manage");
const mentahanDataDb = require("../model/mentahan");

const crtGrupId = async () => {
  let data = await mentahanDataDb.find();
  let arrGrupId = [],
    arrKos = [];
  let cekId = false,
    getId = null;
  data.forEach((e, i) => {
    console.log(e.ktgr, e.id);
    let arrBanding = Object.values(e.ktgr);
    if (!arrGrupId.join().includes(e.id)) {
      arrKos.push(e.id);
      data.forEach((a, idx) => {
        if (!arrGrupId.join().includes(a.id) && a.id != e.id) {
          let arrPembanding = Object.values(a.ktgr);
          let hslBanding = cekBanding(arrBanding, arrPembanding, a, e);
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
  return arrGrupId;
};
crtGrupId();

function cekBanding(banding, pembanding, a, e) {
  for (let i = 0; i < banding.length; i++) {
    //kondisi ini kurang tepat, yang tepat adalah point data yang hampir mendekati
    if (banding[i] == pembanding[i]) {
      if (i == banding.length - 1) { 
        return true;
      }
    } else {
      return false;
    }
  }
}
