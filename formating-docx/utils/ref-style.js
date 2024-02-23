const refStyled = (listRef, ref) => {
  // let sampel = `1: { children: [new Paragraph("Foo")}`
  let ftNt = listRef.map((e, i) => {
    i++;
    for (let v of ref) {
      if (e == `-(footnote:${v.ID})-`) {
        return (e = footnoteStyle(v, i, v.type));
      }
    }
  });
  ref = sortingRef(ref);
  let dfPstk = ref.map((e, i) => {
    return daftarPustakaStyle(e, i, e.type);
  });
  return { ftNt: `footnotes:{ ${ftNt.join(",")}},`, dfPstk: dfPstk.join("") };
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

function sortingRef(data){
  data = data.map((e, i) => {
    e.Penulis = pembalikNama(e.Penulis);
    return e
  });
  data.sort((a, b) => a.Penulis.toLowerCase().localeCompare(b.Penulis.toLowerCase()));
  return data;
};

function footnoteStyle(data, idx, type) {
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
                }), `;
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
                      text: "${penterjemah().cek ? penterjemah.ok : ""} ${data.Kota}: ${data.Penerbit}.",
                      size: 24,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: {
                    line: 360,
                  },
                }), `;
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
                }), `;
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
                }), `;
  }
}

module.exports = refStyled;
