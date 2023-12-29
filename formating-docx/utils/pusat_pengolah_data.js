const mentahanDataDb = require("../model/mentahan");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const arrInArr = bagianTeks(lineTeks);
  console.log(arrInArr);
  // await mentahanDataDb.insertMany(lineTeks);
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

// memishkan bagian teks berdasarkan element "\n"

function bagianTeks(arrInpt){
  let dummyArr = [];
  let arrKos = [];
  arrInpt.forEach( (e, i) => {
    if(e == "\n"){
      arrKos.push(dummyArr);
      dummyArr = [];
    }else{
    };
    dummyArr.push(e);
  });
  return arrKos;
};




module.exports = mentahanData;
