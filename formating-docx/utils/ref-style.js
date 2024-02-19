const refStyled = (listRef, ref) => {
  // let sampel = `1: { children: [new Paragraph("Foo")}`

  let tst = listRef.map((e, i) => {
    i++;
    for (let v of ref) {
      console.log(v);
      if (e == `-(footnote:${v.ID})-`) {
        return (e = styleRef(v, i, v.type));
      }
    }
  });
  return `footnotes:{ ${tst.join(",")}},`;
};

function styleRef(data, idx, type) {
  console.log(data);
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
        return {ok: `Terj. ${data.Penterjemah}, `, cek: true};
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
                      text: "${tst().cek ? tst.ok : ""}(${data.Kota}: ${data.Penerbit}, ${data.Tahun}), Hal. ${data.Halaman}.",
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
}

module.exports = refStyled;
