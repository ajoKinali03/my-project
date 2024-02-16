//
const mainManageRef = (refData, txtData) => {
  let data = txtData.map((eTxtDt, i) => {
    let cekId;
    let eTeks = eTxtDt.teks;
    let ePoint = eTxtDt.point;

    if (eTeks.length != 0) {
      eTxtDt.teks = eTeks.map((eT) => {
        return findAndSplit(eT);
      });
    }
    if (ePoint.length != 0) {
      eTxtDt.point = ePoint.map((eT) => {
        return findAndSplit(eT);
      });
    }

    if (
      /-\(footnote:(\d+)\)-/g.test(eTxtDt.teks.join(" ")) ||
      /-\(footnote:(\d+)\)-/g.test(eTxtDt.point.join(" "))
    ) {
      if (/-\(footnote:(\d+)\)-/g.test(eTxtDt.teks.join(" "))) {
        eTxtDt.cekIdRef = "txt";
      }
      if (/-\(footnote:(\d+)\)-/g.test(eTxtDt.point.join(" "))) {
        eTxtDt.cekIdRef = "pnt";
      }
      if (
        /-\(footnote:(\d+)\)-/g.test(eTxtDt.teks.join(" ")) &&
        /-\(footnote:(\d+)\)-/g.test(eTxtDt.point.join(" "))
      ) {
        eTxtDt.cekIdRef = "both";
      }
    } else if (
      !/-\(footnote:(\d+)\)-/g.test(eTxtDt.teks.join(" ")) &&
      !/-\(footnote:(\d+)\)-/g.test(eTxtDt.point.join(" "))
    ) {
      eTxtDt.cekIdRef = false;
    }

    return eTxtDt;
  });
  data = createObjTeksFootnote(refData, data);
  let arrCodeFtNt = data.ttlFtNt;
  // console.log(arrCodeFtNt);

  return data.txt;
};

// Fungsi untuk mencari dan memisahkan kecocokan teks yang memiliki tanda footnote
function findAndSplit(input) {
  const regex = /-\(footnote:(\d+)\)-/g;
  const matches = input.match(regex);
  if (matches) {
    const result = input.split(regex);

    for (let i = 1; i < result.length; i += 2) {
      result[i] = matches.shift();
    }
    return result;
  } else {
    // Jika tidak ada kecocokan, kembalikan array dengan string asli
    return input;
  }
}

// fungsi untuk membuat objek teks dan footnote
function createObjTeksFootnote(ref, txt) {
  let ttlFootNote = [];
  txt = txt.map((e, i) => {
    let subArrTks;
    let subArrPnt;
    let arrTks = [];
    let arrPnt = [];
    if (e.cekIdRef) {
      if (e.cekIdRef == "txt") {
        e.teks.forEach((subEl) => {
          subArrTks = [];
          for (let vT of subEl) {
            for (let vRef of ref) {
              let temp = `-(footnote:${vRef.ID})-`;
              if (vT == temp) {
                ttlFootNote.push(vT);
                // arrTks.push(subEl[subEl.indexOf(temp) - 1]);
                subArrTks.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrTks.push({
                // subArrTks.push(subEl[subEl.indexOf(temp) - 1]);
                //   refID: vRef.ID,
                // });
              }
            }
          }
          arrTks.push(subArrTks);
        });
        e.teks = arrTks;
      }
      if (e.cekIdRef == "pnt") {
        e.point.forEach((subEl) => {
          subArrPnt = [];
          for (let vT of subEl) {
            for (let vRef of ref) {
              let temp = `-(footnote:${vRef.ID})-`;
              if (vT == temp) {
                ttlFootNote.push(vT);
                arrPnt.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrPnt.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrPnt.push({
                //   txt: subEl[subEl.indexOf(temp) - 1],
                //   refID: vRef.ID,
                // });
              }
            }
          }
          // arrPnt.push(subArrPnt);
        });
        e.point = arrPnt;
      }
      if (e.cekIdRef == "both") {
        e.point.forEach((subEl) => {
          subArrPnt = [];
          for (let vT of subEl) {
            for (let vRef of ref) {
              let temp = `-(footnote:${vRef.ID})-`;
              if (vT == temp) {
                ttlFootNote.push(vT);
                arrPnt.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrPnt.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrPnt.push({
                //   txt: subEl[subEl.indexOf(temp) - 1],
                //   refID: vRef.ID,
                // });
              }
            }
          }
          // arrPnt.push(subArrPnt);
        });
        e.point = arrPnt;

        e.teks.forEach((subEl) => {
          subArrTks = [];
          for (let vT of subEl) {
            for (let vRef of ref) {
              let temp = `-(footnote:${vRef.ID})-`;
              if (vT == temp) {
                ttlFootNote.push(vT);
                // arrTks.push(subEl[subEl.indexOf(temp) - 1])
                subArrTks.push(subEl[subEl.indexOf(temp) - 1]);
                // subArrTks.push({
                //   txt: subEl[subEl.indexOf(temp) - 1],
                //   refID: vRef.ID,
                // });
              }
            }
          }
          arrTks.push(subArrTks);
        });
        e.teks = arrTks;
      }
    }
    // console.log(e.teks, e.point);
    return e;
  });
  return { txt: txt, ttlFtNt: ttlFootNote };
}

const extractTxt = (txt, temp) => {
  return txt.teks;
};

module.exports = { mainManageRef, extractTxt };
