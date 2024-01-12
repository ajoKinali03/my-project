const mentahanDataDb = require("../model/mentahan");
const cekNmr = require("./data_tipe_teks");
const { innerDocx } = require("./inner-docx");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const arrInArr = bagianTeks(lineTeks);
  const arrHuruf = filterSpasi(arrInArr);
  const objCkNmr = cekNomor(arrHuruf);
  const grPnt = groupPoint(arrInArr, objCkNmr);
  const teksStyled = getTextStyle(grPnt, innerDocx);
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
    }
    if (i == arrWord.length - 1) {
      if (e != "\n") {
        arrKos.push(dummyArr.join("").replaceAll("\u0002", "-") + "\n");
        arrKos.push("\n");
      } else {
        arrKos.push(dummyArr.join("").replaceAll("\u0002", "-"));
      }

      dummyArr = [];
    }
  });
  return arrKos;
}

// memishkan bagian teks berdasarkan element "\n"
function bagianTeks(arrInpt) {
  let dummyArr = [];
  let arrKos = [];
  arrInpt.forEach((e, i) => {
    if (e == "\n" || i == arrInpt.length - 1) {
      if (dummyArr.length != 0) {
        arrKos.push(dummyArr);
      }
      dummyArr = [];
    } else {
      dummyArr.push(e);
    }
  });
  return arrKos;
}

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
function cekNomor(arrInpt) {
  let arrKos = [];
  let cekPoint = 0;
  arrInpt.forEach((e, i) => {
    let hsl = cekNmr(e);
    hsl.index = i;
    if (hsl.cekNmr) {
      cekPoint = i;
      hsl.arrMark = cekPoint;
    }
    if (!hsl.cekNmr) {
      hsl.arrMark = cekPoint;
    }
    arrKos.push(hsl);
  });
  return arrKos;
}

// memisahkan batas teks berdasarkan nomor dan dijadikan ke dalam array
function groupPoint(arrTeks, btsPnt) {
  let nilaiLoop = btsPnt[btsPnt.length - 1].arrMark;
  let arrObj = [];
  for (let i = 0; i <= nilaiLoop; i++) {
    let tskDt = btsPnt[i];
    let obj = {};
    obj.id_tingkat = null;
    obj.point = [];
    obj.teks = [];

    if (tskDt.cekNmr) {
      obj.id_tingkat = tskDt.tingkat.toString();
    } else if (!tskDt.cekNmr && tskDt.index == 0) {
      obj.id_tingkat = "0";
    }

    arrTeks.forEach((e, idx) => {
      if (btsPnt[idx].arrMark == i && btsPnt[idx].cekNmr) {
        obj.point.push(e.join("").replaceAll("\n", " ") + "\n");
      } else if (btsPnt[idx].arrMark == i && !btsPnt[idx].cekNmr) {
        // console.log(e.join("").replaceAll("\n") + "\n");
        obj.teks.push(e.join("").replaceAll("\n", " ") + "\n");
      }
    });
    if (obj.id_tingkat != null) {
      arrObj.push(obj);
    }
  }
  return arrObj;
}

// fungsi untuk memberikan style pada teks
function getTextStyle(teksDt, inStyleDt) {
  let arrKos = [];
  let cekPoint = false;
  let cekTeks = false;
  teksDt.forEach((e, i) => {
    let styleDt = inStyleDt(e.teks.join("\n"), e.point.join("\n"));
    if (e.point.length != 0) {
      cekPoint = true;
    }
    if (e.teks.length != 0) {
      cekTeks = true;
    }
    styleDt.forEach((a, idx) => {
      if (cekPoint && e.id_tingkat == a.id) {
        console.log("ini di point");
      }
      if (cekTeks && "teks" == a.id) {
        console.log("ini di teks", a.id);
      }
    });
  });
}

module.exports = mentahanData;
