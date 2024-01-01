// file kusus untuk menampung jenis data yang akan digunakan pada file pusat_pengolahan_data

// function cek penomoran
const cekNmr = (arrTks) => {
  // arrTks = arrTks.join(",").split(",");
  // console.log(arrTks);
  const ktgrNmr = arrObjNmr();
  let result = false;
  let tipe = null;
  let tingkatPenomoran = null;
  let count = 0;
  let arrKos = [];
  arrTks.forEach((e, i) => {
    e = e.join(",").split(",");
    console.log(e);
    if (e != "\t" && e != "") {
      count++;
    }
    ktgrNmr.forEach((cek, idx) => {
      console.log(arrTks[i][1]);
      if (cek.cekTipe(e) && arrTks[i][1] == cek.dot && count == 1) {
        count == 0;
        result = true;
        tipe = cek.tipe(e);
        tingkatPenomoran = cek.tingkat;
        // console.log({ cekNmr: true, tipe: cek.tipe(e), tingkat: cek.tingkat });
        // arrKos.push({ cekNmr: true, tipe: cek.tipe(e), tingkat: cek.tingkat });
      }
    });
  });
  return { cekNmr: result, tipe: tipe, tingkat: tingkatPenomoran };
  // return arrKos;
};

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
      tingkat: 1,
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
      tingkat: 2,
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
      tingkat: 3,
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
      tingkat: 4,
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
      tingkat: 5,
    },
  ];
}

module.exports = cekNmr;


// function cek paragraf

// function cek teksKhusus(ayat, hadis, terjemahan)