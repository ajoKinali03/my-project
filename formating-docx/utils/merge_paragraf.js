const mergeParagraf = (data) => {
  let rsltArr = [];
  let arrKos = [];
  data.forEach((e, i) => {
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
      return e.join("").replaceAll("\n",  ""  ) + "\n"
    }else{return e};
  });
};

module.exports = mergeParagraf;
