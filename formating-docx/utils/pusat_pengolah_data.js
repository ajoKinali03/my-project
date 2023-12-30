const mentahanDataDb = require("../model/mentahan");
const cekNmr = require("./data_tipe_teks");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const arrInArr = bagianTeks(lineTeks);
  const objTeks = tagging(arrInArr);
  await mentahanDataDb.insertMany(objTeks);
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
function tagging(arrInpt){
  let test = cekNmr(arrInpt);
  if(test){
    console.log("point terdeteksi", test);
  };
};

module.exports = mentahanData;
