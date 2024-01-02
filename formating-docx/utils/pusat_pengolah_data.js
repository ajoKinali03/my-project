const mentahanDataDb = require("../model/mentahan");
const cekNmr = require("./data_tipe_teks");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const arrInArr = bagianTeks(lineTeks);
  const arrHuruf = filterSpasi(arrInArr);
  const objCkNmr = cekNomor(arrHuruf);
  const grPnt = groupPoint(arrInArr, objCkNmr);
  console.log(grPnt);
  // await mentahanDataDb.insertMany(objTeks);
  return;
};
// fungsi memisahkan kalimat berdasrkan enter
function filterEnter(teks) {
  const arrWord = [...teks];
  const arrKos = [];
  let dummyArr = [];
  arrWord.forEach((e, i) => {
    dummyArr.push(e);
    if (e == "\n") {
      arrKos.push(dummyArr.join("").replaceAll("\u0002", "-"));
      dummyArr = [];
    };
    if (i == arrWord.length -1) {
      arrKos.push(dummyArr.join("").replaceAll("\u0002", "-"));
      dummyArr = [];
    };
  });
  return arrKos;
}

// memishkan bagian teks berdasarkan element "\n"
function bagianTeks(arrInpt){
  let dummyArr = [];
  let arrKos = [];
  arrInpt.forEach( (e, i) => {
    if(e == "\n" || i == arrInpt.length -1){
      arrKos.push(dummyArr);
      dummyArr = [];
    }else{
      dummyArr.push(e);
    };
  });
  return arrKos;
};


// membuat dan pemberian tag
const spclChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\n\t]/;

// fungsi memisahkan kalimat berdasrkan spasi
const filterSpasi = (arrKal) => {
  let arr = [];
  arrKal.forEach((e, i) => {
    e = e.join("");
    let kal = [...e];
    let arrKos = [];
    let dummyArr = [];
    kal.forEach((a, idx) => {
      if (spclChar.test(a) || idx == kal.length - 1) {
        arrKos.push(dummyArr.join(""));
        arrKos.push(a);
        dummyArr = [];
      } else {
        dummyArr.push(a);
      }
    });
    if (!arrKos.length == 0 && !arrKos == false) {
      arr.push(arrKos);
    }
  });
  return arr;
};

// memeriksa penomoran untuk batas teks
function cekNomor(arrInpt){
  let arrKos = [];
  arrInpt.forEach((e, i) => {
    let hsl = cekNmr(e);
    hsl.index = i;
    arrKos.push(hsl);
    // if(hsl.cekNmr){
    // };
  });
  console.log(arrKos)
  return arrKos;
};

// memisahkan batas teks berdasarkan nomor dan dijadikan ke dalam array
function groupPoint(arrTeks, batasPoint){
  let arrKos = [];
  let dummyObj = null;
  let netralObj = {};
  let indexOn = -1;
  arrTeks.forEach((e, i) => {
    batasPoint.forEach((a, idx) => {
      if(a.index == i && a.cekNmr){ // BUG: point terakhir tidak terdeteksi
        if(a.index != indexOn && indexOn != -1){
          arrKos.push(dummyObj)
        };
        if(Object.keys(netralObj).length != 0){
          arrKos.push(netralObj);
        };
        indexOn = a.index;
        dummyObj = {};
        dummyObj.id = a.tingkat;
        dummyObj.point = e;
      };
      if(a.index == i && !a.cekNmr && a.index > indexOn){ // BUG: teks hanya terdeteksi satu kali
        dummyObj.teks = e;
      };
      if(indexOn == -1){ // BUG: teks tidak dapat terdeteksi dan server terjadi crash
        netralObj.id = indexOn;
        netralObj.point = e;
      };
    });
  });
  console.log(arrKos);
};

module.exports = mentahanData;
