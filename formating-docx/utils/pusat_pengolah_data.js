const mentahanDataDb = require("../model/mentahan");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  console.log(lineTeks);
  
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
  return {teks: arrKos};
}

// memishkan bagian teks berdasarkan element "\n"

function bagianTeks(){

};




module.exports = mentahanData;
