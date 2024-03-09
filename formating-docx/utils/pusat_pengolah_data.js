const mentahanDataDb = require("../model/mentahan");
const clearPoint = require("./clearPoint");
const cekNmr = require("./data_tipe_teks");
const { pointStyle, teksStyle } = require("./inner-docx");
const { mainManageRef, extractTxt } = require("./ref-manage");
const refStyled = require("./ref-style");
const { runDocx } = require("./run");

// code runner
const mentahanData = async (data) => {
  data = JSON.parse(data);
  teks = data.teks;
  ref = data.ref;

  // kelola data text input
  const lineTeks = filterEnter(teks);
  const arrInArr = bagianTeks(lineTeks);
  const arrHuruf = filterSpasi(arrInArr);
  const objCkNmr = cekNomor(arrHuruf);
  let grPnt = groupPoint(arrInArr, objCkNmr);
  
  if(ref){
    // kelola data input referensi
    let mergeRefAndTxt = mainManageRef(ref, grPnt);

    grPnt = mergeRefAndTxt.txt;
  
     listRef = refStyled(mergeRefAndTxt.ttlFtNt, ref)
  }else{
    listRef = {ftNt: "", dfPstk: ""};
    grPnt = extractTxt(grPnt);
  };
  // membuat file
  const teksStyled = getTextStyle(grPnt, pointStyle, teksStyle);
  
  return runDocx(teksStyled.join(","), listRef);
  // return;
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
        obj.point.push(e.join("").replaceAll("\n", "").replaceAll('"', '\\"'));
      } else if (btsPnt[idx].arrMark == i && !btsPnt[idx].cekNmr) {
        obj.teks.push(e.join("").replaceAll("\n", "").replaceAll('"', '\\"'));
      }
    });
    if (obj.id_tingkat != null) {
      arrObj.push(obj);
    }
  }
  return arrObj;
}

// penggabungan data dengan style teks
function getTextStyle(teksDt, pntStyle, tksStyle) {
  teksDt = clearPoint(teksDt);
  // console.log(teksDt)
  let arrKos = [];
  let count = 0;
  // DISINI ADA BUG: footonte diberikan secara berlebihan
  // opsi solve: menggunakan cekIdRef untuk mendeteksi posisi footnote
  let tempStyle = (txt, ftNt) => {
    return {
      txt: `new TextRun({
              text: "${txt}",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            })`,
      ftNt: `new FootnoteReferenceRun(${ftNt})`,
    };
  };
  teksDt.forEach((e) => {
    console.log(e)
    if (e.cekIdRef) {
      let cekPoint = false;
      let cekTeks = false;
      if (e.point.length != 0) {
        cekPoint = true;
      }
      if (e.teks.length != 0) {
        cekTeks = true;
      }
      for (let i = 0; i <= pntStyle().length; i++) {
        if (e.id_tingkat == i) {
          if (e.id_tingkat == 0) {
            e.teks.forEach((a) => {
              let arrStyl = [];
              a.forEach((c) => {
                count += 1;
                arrStyl.push(tempStyle(c).txt);
                arrStyl.push(`new FootnoteReferenceRun(${count})`);
              });
              arrKos.push(pntStyle(`[${arrStyl}]`)[i].style);
            });
          } else {
            if (cekPoint) {
              let arrStyl = [];
              e.point.forEach((a) => {
                count += 1;
                arrStyl.push(tempStyle(a).txt);
                arrStyl.push(`new FootnoteReferenceRun(${count})`);
              });
              arrKos.push(pntStyle(`[${arrStyl}]`)[i].style);
            }
            if (cekTeks) {
              e.teks.forEach((a) => {
                let arrStyl = [];
                a.forEach((c) => {
                  count += 1;
                  arrStyl.push(tempStyle(c).txt);
                  arrStyl.push(`new FootnoteReferenceRun(${count})`);
                });
                arrKos.push(
                  tksStyle(`[${arrStyl}]`, pntStyle()[i].leftValue).style
                );
              });
            }
          }
        }
      }
    } else {
      let cekPoint = false;
      let cekTeks = false;
      if (e.point.length != 0) {
        cekPoint = true;
      }
      if (e.teks.length != 0) {
        cekTeks = true;
      }
      for (let i = 0; i <= pntStyle().length; i++) {
        if (e.id_tingkat == i) {
          if (e.id_tingkat == 0) {
            e.teks.forEach((a) => {
              arrKos.push(pntStyle(`[${tempStyle(a).txt}]`)[i].style);
            });
          } else {
            if (cekPoint) {
              e.point.forEach((a) => {
                arrKos.push(pntStyle(`[${tempStyle(a).txt}]`)[i].style);
              });
            }
            if (cekTeks) {
              e.teks.forEach((a) => {
                arrKos.push(
                  tksStyle(`[${tempStyle(a).txt}]`, pntStyle()[i].leftValue)
                    .style
                );
              });
            }
          }
        }
      }
    }
  });
  return arrKos;
}

module.exports = mentahanData;
