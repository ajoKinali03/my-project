// fungsi cek penomoran
const cekNmr = (arrTks) => {
  // console.log(arrTks)
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

module.exports = cekNmr;