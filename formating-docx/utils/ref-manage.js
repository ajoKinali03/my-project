const searchRef = (refData, txtData) => {
  let data = txtData.map((eTxtDt, i) => {
    let eTeks = eTxtDt.teks;
    let ePoint = eTxtDt.point;

    if (eTeks.length != 0) {
      for (let eTxt of eTeks) {
        for (let eRef of refData) {
          let refIdTemp = `-(footnote:${eRef.ID})-`;

          if (eTxt.includes(refIdTemp)) {
            eTxtDt.teks = eTeks.map((eT) => {
              // hasil dari teks yang saya harapkan!!!!!
              // eTxtDt.teks = [
              //   [
              //     { subTeks: tekssss, refID: x },
              //     { subTeks: tekssss, refID: x },
              //     { subTeks: tekssss, refID: x },
              //   ],
              //   [
              //     { subTeks: tekssss, refID: x },
              //     { subTeks: tekssss, refID: x },
              //   ],
              // ];
              return eT.split(refIdTemp)[0];
            });
          }
        }
      }
    }
    return eTxtDt;
  });

  return data;
};

module.exports = searchRef;
