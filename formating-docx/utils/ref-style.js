const refStyled = (listRef, ref) => {
  let refCalled = [];
  let ftNt = listRef.map((e, i) => {
    i++;
    for (let v of ref) {
      if (e.ftn == `-(footnote:${v.ID})-`) {
        refCalled.push(v);
        refCalled.push(e);
      } else {
      }
    }
  });

  let dfPstk = ref.map((e, i) => {
    return daftarPustakaStyle(e, i, e.type);
  });
  let hsl = [];
  let count = 0;
  let aftrCkSmeRf = cekSameRef(refCalled, ref);
  aftrCkSmeRf.forEach((e, i) => {
    if (i % 2 == 0) {
      count++;
      hsl.push(footnoteStyle(e, count, e.type, aftrCkSmeRf[i + 1], i));
    }
  });
  
  
  return { ftNt: `footnotes:{ ${hsl.join(",")}},`, dfPstk: dfPstk.join(",") };
  // return { ftNt: `footnotes:{ },`, dfPstk: "" };
};

function pembalikNama(nama) {
  if (nama.includes(" ")) {
    nama = nama.split(" ");
    let namaBelakang = nama.pop();
    let namaDepan = nama.join(" ");
    let hslNama = `${namaBelakang}, ${namaDepan}`;
    return hslNama;
  } else {
    return nama;
  }
}

function sortingRef(data) {
  data = data.map((e, i) => {
    e.Penulis = pembalikNama(e.Penulis);
    return e;
  });
  data.sort((a, b) =>
    a.Penulis.toLowerCase().localeCompare(b.Penulis.toLowerCase())
  );
  return data;
}

function cekSameRef(refCalled, ref) {
  let idxRef = {};
  let refCalledCode = [];
  refCalled.forEach((e, i) => {
    refCalledCode.push(refCalled[2*i-1]);
  });

  refCalled = refCalled.filter((e, i) => {
    if (i % 2 == 0) {
      return e;
    }
  });
  
  for (let i = 1; i <= ref.length; i++) {
    idxRef["idx" + i] = [];
    refCalled.forEach((e, ie) => {
      if (e.ID === i) {
        idxRef["idx" + i].push(ie);
      }
    });
  }

  // console.log(refCalled.length);
  // console.log(refCalledCode);
  let keyRefSame = [];
  refCalled.forEach((e, i) => {
    if (e.ID) {
      let ftnCode = refCalledCode[i];
      let idxPositionRef = idxRef["idx" + e.ID];
      for (let [idx, idxEl] of idxPositionRef.entries()) {
        // console.log(i, idxEl);
        if (i == idxEl) {
          keyRefSame.push(e);
          if (idx == 0) {
            keyRefSame.push({ tipe: "normal", newHal: "" });
          } else {
            if (idxEl - idxPositionRef[idx - 1] == 1) {
              if (ftnCode.hal) {
                keyRefSame.push({ tipe: "ibid", newHal: ftnCode.hal });
              } else {
                keyRefSame.push({ tipe: "ibid", newHal: "" });
              }
            } else {
              if (ftnCode.hal) {
                keyRefSame.push({ tipe: "opcit", newHal: ftnCode.hal });
              } else {
                keyRefSame.push({ tipe: "loccit", newHal: "" });
              }
            }
          }
        }
      }
    }
  });
  // console.log(keyRefSame);
  return keyRefSame;
}

function footnoteStyle(data, idx, type, recall, trueIdx) {
  // if(recall[2*trueIdx-1] != undefined){
  //   recall = recall[2*trueIdx-1]
  // }

  if (recall.tipe == "normal") {
    if (type == "jurnal") {
      return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, \\"${data.Judul}\\", ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                      new TextRun({
                        text: "${data.Nama}, ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                        italics: true,
                      }),
                      new TextRun({
                        text: "Vol. ${data.Volume}, No. ${data.Nomor} (${data.Tahun}), Hal. ${data.Halaman}.",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
    }
    if (type == "buku") {
      let tst = () => {
        if (data.Penterjemah.length != 0) {
          return { ok: `Terj. ${data.Penterjemah}, `, cek: true };
        } else {
          return false;
        }
      };
      return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                      new TextRun({
                        text: "${data.Judul}, ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                        italics: true,
                      }),
                      new TextRun({
                        text: "${tst().cek ? tst.ok : ""}(${data.Kota}: ${
        data.Penerbit
      }, ${data.Tahun}), Hal. ${data.Halaman}.",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
    }
    if (type == "tesis") {
      return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, ${data.Tipe}: \\"${data.Judul}\\" (${data.Kota}: ${data.Universitas}, ${data.Tahun}), Hal. ${data.Halaman}.",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
    }
    if (type == "website") {
      return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, \\"${data.Judul}\\" (${data.Link}, diakses tanggal ${data.Tanggal} pukul ${data.Waktu}).",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
    }
  }
  if (recall.tipe == "ibid") {
    return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "Ibid.,",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                      new TextRun({
                        text: "${
                          recall.hal ? "Hal. " + recall.newHal : recall.newHal
                        }",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
  }
  if (recall.tipe == "opcit") {
    return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                      new TextRun({
                        text: "Op.Cit., ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                        italics: true,
                      }),
                      new TextRun({
                        text: "Hal. ${recall.newHal}.",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
  }
  if (recall.tipe == "loccit") {
    return `${idx}: {
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "${data.Penulis}, ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                      }),
                      new TextRun({
                        text: "Loc.Cit., ",
                        size: 20,
                        color: "000000",
                        font: "Times New Roman",
                        italics: true,
                      }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                      line: 240,
                    },
                  }),
                ],
              }`;
  }
}

function daftarPustakaStyle(data, idx, type) {
  if (type == "jurnal") {
    return `
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "${data.Penulis}. ${data.Tahun}. \\"${data.Judul}\\". ",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                    new TextRun({
                      text: "${data.Nama}, ",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                      italics: true,
                    }),
                    new TextRun({
                      text: "Vol. ${data.Volume}, No. ${data.Nomor}.",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: {
                    line: 360,
                  },
                })`;
  }
  if (type == "buku") {
    let penterjemah = () => {
      if (data.Penterjemah.length != 0) {
        return { ok: `Terj. ${data.Penterjemah}. `, cek: true };
      } else {
        return false;
      }
    };
    return ` 
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "${data.Penulis}. ${data.Tahun}. ",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                    new TextRun({
                      text: "${data.Judul}. ",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                      italics: true,
                    }),
                    new TextRun({
                      text: "${penterjemah().cek ? penterjemah.ok : ""} ${
      data.Kota
    }: ${data.Penerbit}.",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: {
                    line: 360,
                  },
                })`;
  }
  if (type == "tesis") {
    return ` 
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "${data.Penulis}. ${data.Tahun}. ${data.Tipe}: \\"${data.Judul}\\". ${data.Kota}: ${data.Universitas}.",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: {
                    line: 360,
                  },
                })`;
  }
  if (type == "website") {
    return ` 
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "${data.Penulis}. ${data.Tahun}. \\"${data.Judul}\\" (${data.Link}, diakses tanggal ${data.Tanggal} pukul ${data.Waktu}).",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: {
                    line: 360,
                  },
                })`;
  }
}

module.exports = refStyled;