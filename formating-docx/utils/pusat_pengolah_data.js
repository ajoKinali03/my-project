const mentahanDataDb = require("../model/mentahan");
const spclChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\n\t]/;
const mergeParagraf = require("./merge_paragraf");

// code runner
const mentahanData = async (teks) => {
  teks = JSON.parse(teks);
  teks = teks.teks;
  const lineTeks = filterEnter(teks);
  const paragrah = mergeParagraf(lineTeks);
  const arrLineTeks = filterSpasi(paragrah);
  const idntKtgr = identifikasiKategori(arrLineTeks);
  console.log(idntKtgr);
  await mentahanDataDb.insertMany(idntKtgr);

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
  let arrOfObjKtgr = [];

  arrTksLn.forEach((e, i) => {
    const teks = e.join("");

    let jumSpasi = Array.from(teks.matchAll(" ")).length,
      jumTab = Array.from(teks.matchAll("\t")).length,
      jumTitik = [...teks].filter((e) => e == ".").length,
      jumKoma = Array.from(teks.matchAll(",")).length;

    arrOfObjKtgr.push({
      id: "teks" + i,
      teks: e,
      grup_id: "grupId",
      ktgr: {
        jumlah_huruf: teks.length,
        tanda_enter: teks.includes("\n"),
        tanda_spasi: teks.includes(" "),
        jumlah_spasi: jumSpasi,
        tanda_tab: teks.includes("\t"),
        jumlah_tab: jumTab,
        jumlah_titik: jumTitik,
        jumlah_koma: jumKoma,
        cek_penomoran: cekNmr(e).cekNmr,
        jenis_penomoran: cekNmr(e).tipe,
        sentence_case: sentanceCase(e),
      },
    });
  });
  return arrOfObjKtgr;
}

function sentanceCase(e) {
  let up = 0;
  let down = 0;
  let uppercase = null;
  e.forEach((a) => {
    if (/^[A-Z]/.test(a) && /[a-z]$/.test(a)) {
      up++;
    }
    if (/^[a-z]/.test(a)) {
      down++;
    }
    if (/[A-Z]/gi.test(a)) {
      uppercase = "uppercase";
    }
  });
  if (up > down) {
    return "capitalize each word";
  }
  if (/^[A-Z]/.test(e[0]) && down > up) {
    return "capitalize first word";
  }
  if (down > up) {
    return "lower case";
  }
  if (uppercase != null) {
    return uppercase;
  }
}

// fungsi cek penomoran
function cekNmr(arrTks) {
  const ktgrNmr = arrObjNmr();
  let result = false;
  let tipe = null;
  let count = 0;
  arrTks.forEach((e, i) => {
    if (e != "\t" && e != "") {
      count++;
    }
    ktgrNmr.forEach((cek, idx) => {
      if (cek.cekTipe(e) && arrTks[i + 1] == cek.dot && count == 1) {
        count == 0;
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

module.exports = mentahanData;
