// fungsi pembersih teks
const clearPoint = (teksDt) => {
  console.log(teksDt.map((e, i) => {
    let arrKos = [];
    e.point.forEach((a, idx) => {
      console.log([...a]);
    });
    return e;
  }));
};

module.exports = clearPoint;
