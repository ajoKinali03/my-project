const cekNmr = require("./data_tipe_teks");
// fungsi pembersih teks
const clearPoint = (teksDt) => {
  return teksDt.map((e, i) => {
    let arrKos = [];
    e.point = e.point.map((a, idx) => {
      let arrKal = [...a];
      a = arrKal.splice(3, arrKal.length - 1).join("");
      return a;
    });
    return e;
  });
};

module.exports = clearPoint;