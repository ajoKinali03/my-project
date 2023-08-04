const inpt = document.getElementById("form-input");
const spclChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// code runner
document.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    const lineTeks = filterEnter(inpt.value);
    const arrLineTeks = filterSpasi(lineTeks);
    const idntKtgr = identifikasiKategori(arrLineTeks);
    // console.log(arrLineTeks);
    console.log(idntKtgr);
    // lineTeks.forEach((e, i) => console.log(`${i}, ${e.length}`));
  }
});

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

// fungsi memisahkan kalimat berdasrkan spasi
function filterSpasi(arrKal) {
  let arr = [];
  arrKal.forEach((e, i) => {
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
    arr.push(arrKos);
  });
  return arr;
}

// fungsi akhir, yiatu memberi identifikasi dan menjadikan ke objek sesuai kategori
function identifikasiKategori(arrTksLn) {
  let objKtgr = {
    id: null,
    teks: null,
    ktgr: {
      jumlah_huruf: 0,
      bahasa: null,
      tanda_enter: false,
      tanda_spasi: false,
      jumlah_spasi: 0,
      tanda_tab: false,
      jumlah_tab: 0,
      jumlah_titik: 0,
      jumlah_koma: 0,
      cek_penomoran: false,
      jenis_penomoran: null,
      sentence_case: null,
    },
  };

  let arrOfObjKtgr = [];
  arrTksLn.forEach((e, i) => {
    const teks = e.join("");
    let jumSpasi = Array.from(teks.matchAll(" ")).length,
      jumTab = Array.from(teks.matchAll("\t")).length,
      jumTitik = [...teks].filter( e => e == ".").length,
      jumKoma = Array.from(teks.matchAll(",")).length,
      objKtgr = {
        id: "teks" + i,
        teks: e,
        ktgr: {
          jumlah_huruf: teks.length,
          bahasa: null,
          tanda_enter: teks.includes("\n"),
          tanda_spasi: teks.includes(" "),
          jumlah_spasi: jumSpasi,
          tanda_tab: teks.includes("\t"),
          jumlah_tab: jumTab,
          jumlah_titik: jumTitik,
          jumlah_koma: jumKoma,
          cek_penomoran: cekNmr(e).cekNmr,
          jenis_penomoran: cekNmr(e).tipe,
          sentence_case: null,
        },
      };
    arrOfObjKtgr.push(objKtgr);
  });
  return arrOfObjKtgr;
}

// fungsi memeriksa sentece case
function cekCase(arrKal) {
  let result = null;
  let kdsi = kondisi();
  arrKal.forEach((e, i) => {
    if (e.length > 1) {
      let word = [...e];
      word.forEach((a, idx) => {
        kdsi.forEach((b, idxb) => {
          if (b.kdsi(a, idx, i, e)) {
            result = b.case;
          }
        });
      });
    }
  });
  return result;
}

// fungsi untuk kondisi cekCase [MASIH ADA BUG]
function kondisi() {
  return [
    {
      kdsi: function (a, idx, i) {
        if (a == a.toUpperCase() && idx == 0) {
          return true;
        }
      },
      case: "capitalize each word",
    },
    {
      kdsi: function (a, idx, i) {
        if (a == a.toUpperCase() && idx == 0 && i == 0) {
          return true;
        }
      },
      case: "sentence case",
    },
    {
      kdsi: function (a, idx, i, e) {
        if (a == a.toUpperCase() && idx == e.length) {
          return true;
        }
      },
      case: "upppercase",
    },
    {
      kdsi: function (a, idx, i) {
        if (a == a.toLowerCase() && idx == 0) {
          return true;
        }
      },
      case: "lowercase",
    },
  ];
}

// fungsi cek penomoran
function cekNmr(arrTks) {
  const ktgrNmr = arrObjNmr();
  let result = false;
  let tipe = null;
  arrTks.forEach((e, i) => {
    ktgrNmr.forEach((cek, idx) => {
      if (cek.cekTipe(e) && arrTks[i + 1] == cek.dot) {
        result = true;
        tipe = cek.tipe(e);
      }
    });
  });
  return { cekNmr: result, tipe: tipe };
}

// fungsi menampung arr objek cek penomoran
function arrObjNmr() {
  return [
    {
      cekTipe: (e) => {
        if (e.length == 1) {
          return /[A-Z]/.test(e);
        }
      },
      dot: ".",
      tipe: function (e) {
        return e + this.dot;
      },
    },
    {
      cekTipe: function (e) {
        if (e.length == 1) {
          return /\d/.test(e);
        }
      },
      dot: ".",
      tipe: function (e) {
        return e + this.dot;
      },
    },
    {
      cekTipe: function (e) {
        if (e.length == 1) {
          return /[a-z]/.test(e);
        }
      },
      dot: ".",
      tipe: function (e) {
        return e + this.dot;
      },
    },
    {
      cekTipe: function (e) {
        if (e.length == 1) {
          return /\d/.test(e);
        }
      },
      dot: ")",
      tipe: function (e) {
        return e + this.dot;
      },
    },
    {
      cekTipe: function (e) {
        if (e.length == 1) {
          return /[a-z]/.test(e);
        }
      },
      dot: ")",
      tipe: function (e) {
        return e + this.dot;
      },
    },
  ];
}

/*
const bts = " -bts-\n-bts-";
const arrObjInput = [];
const dummyObj = {tag: undefined, txt: undefined}
const tag = [
  "jb",
  "text",
  "num0",
  "num1",
  "num2",
  "num3",
  "num4",
  "arab",
  "arti",
];


document.addEventListener("keydown", (event) => {
  const textInput = document.getElementById("textInput"); 
  console.log([textInput.value]);
  let text = textInput.value;

  // membuat dan mengatur cursor ketika di Enter
  if (event.code == "Enter") {
    getCodeTag(text, textInput);
    //mendeteksi teks apabila panjang teks kurang dari 15 maka pindahkan cursor
    if (text.length < 15) {
      setCursor(event, text);
    }
  }
  // menyimpan teks sementara sebelum di kirim ke backend
  if (text.length >= 15) {
    dummySaveInput(event, text, textInput);
  }
});

// membuat tag  -bts-
const getCodeTag = (txt, inptText) => {
  tag.forEach((e, i) => {
    if (txt.endsWith(e) == true) {
      inptText.value += bts;
      // dummyObj.tag = e;
    }
  });
};

// fungsi untuk memposisikan kursor
const setCursor = (ev, txt) => {
  let index = txt.length + 6;
  textInput.selectionStart = index;
  textInput.selectionEnd = index;
  focus();
};

// menyimpan sementara hasil input ke array dan menampilkan nya
const dummySaveInput = (ev, txt, txtInpt) => {
  if (ev.keyCode == 16) {
    let start = txt.indexOf("-bts-") + 6;
    let end = txt.lastIndexOf("-bts-") - 1;
    tag.forEach((e) => {
      if (txt.search(e) == 0) {
        arrObjInput.push({ tag: e, txt: txt.substring(start, end)});
        dummyObj.tag = e;
       dummyObj.txt = txt.substring(start, end);
        console.log(dummyObj.txt + " ok");
      }
    });
    textInput.value = "";
    createTagHtml();
    txtInpt.focus();
    renderInput();
  }
};

// create tag html untuk list data
const createTagHtml = () => {
  const ulIndexList = Array.prototype.slice.call(
    document.getElementById("costume-list").children
  ).length;
  const list = document.getElementById("costume-list");

  let li = document.createElement("li");
  li.setAttribute("id", `list-data${ulIndexList}`);

  let p = document.createElement("p");
  p.setAttribute("class", "mb-0 costume-list-data-p");
  li.appendChild(p);

  let button = document.createElement("button");
  button.setAttribute("class", "btn costume-btn-list-data");
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", `#collapse${ulIndexList}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `collapse${ulIndexList}`);
  button.appendChild(document.createTextNode(dummyObj.tag));
  p.appendChild(button);

  let div = document.createElement("div");
  div.setAttribute("id", `collapse${ulIndexList}`);
  div.setAttribute("class", "mt-1 collapse costume-list-data-div");
  div.appendChild(document.createTextNode(dummyObj.txt));
  li.appendChild(div);

  list.appendChild(li);
};


// menyimpan hasil inputan dan kirim ke backend
const renderInput = () => {
  let postInput = document.getElementById("input-post");  
  postInput.value = JSON.stringify(arrObjInput);
};


const getBtnDownload = () => {

};

window.onunload = () => {
  const btnPost = document.getElementById("btn-post");
  btnPost.disabled = true;
};
*/
