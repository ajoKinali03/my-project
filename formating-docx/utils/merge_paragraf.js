const cekNmr = require("./cek_nmr");


const mergeParagraf = (data) => {
  // console.log(data)
  let rsltArr = [];
  let arrKos = [];
  data.forEach((e, i) => {
    // console.log(cekNmr(e.split(" ")))
    // console.log(e.split(" "))
    let teks = e;
    let enter = cekEnter(e);
    if(enter){
      rsltArr.push(arrKos);
      rsltArr.push(teks)
      arrKos = []; 
    }if(!enter){
      arrKos.push(teks)
    }if(i == data.length-1){
      rsltArr.push(arrKos);
      arrKos = [];
    };
  });
  const arrParagraf = arrParagrafParse(rsltArr);
  // console.log(arrParagraf);
  return arrParagraf;
};


function cekEnter(e) {
  let teks = e;
  if (
    teks.includes("\n") &&
    !/[a-z]/gi.test(teks.toLowerCase()) &&
    !/\d/gi.test(teks)
  ) {
    return true;
  };
};

function arrParagrafParse(arrTeks) {
  return arrTeks.map((e, i) => {
    if(typeof e == "object"){
      // masih ada bug: yaitu pada teks seperti bab seharusya teks tersebut tidak di hilangkan "\n"-nya
      return e.join("").replaceAll("\n",  ""  ) + "\n"
    }else{return e};
  });
};

module.exports = mergeParagraf;
