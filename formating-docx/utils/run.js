const runDocx = async (data, refData) => {
  const fs = require("fs");
  const {
    BorderStyle,
    Document,
    Packer,
    Paragraph,
    TextRun,
    Underline,
    UnderlineType,
    convertInchesToTwip,
    LevelFormat,
    AlignmentType,
    Header,
    Footer,
    Spacing,
    convertMillimetersToTwip,
    PageOrientation,
    PageSize,
    page,
    FootnoteReferenceRun,
    PageBreak,
    PageNumber,
    NumberFormat,
    SectionType,
    PageNumberSeparator,
  } = require("docx");

  // let strInnerDocx = JSON.parse(fs.readFileSync("./data/strInnerDocx.json"));
  // strInnerDocx = [strInnerDocx].join();
  // strInnerDocx = strInnerDocx.replaceAll("|-|", "\\" + "\"");
  // strInnerDocx = strInnerDocx.replaceAll(",,", ",");

  
  // disini ada ERROR: bahwasanya refData menghasilkan nilai undifined apabila ref kosong
  await eval(
    `const doc = new Document({
      compatibility: {
        doNotExpandShiftReturn: true,
      },
      styles: {
        paragraphStyles: [
          {
            id: "bold",
            name: "Bold",
            basedOn: "Normal",
            next: "Normal",
            run: {
              color: "000000",
              size: 24,
              font: "Times New Roman",
              bold: true,
            },
          },
          {
            id: "normal",
            name: "Normal",
            basedOn: "Normal",
            next: "Normal",
            run: {
              color: "000000",
              size: 24,
              font: "Times New Roman",
            },
          },
        ],
      },
      numbering: {
        config: [
          {
            reference: "num0",
            levels: [
              {
                level: 0,
                text: "%1.",
                format: LevelFormat.UPPER_LETTER,
                alignment: AlignmentType.LEFT,
              },
            ],
          },
          {
            reference: "num1",
            levels: [
              {
                level: 1,
                text: "%2.",
                format: LevelFormat.DECIMAL,
                alignment: AlignmentType.LEFT,
              },
            ],
          },
          {
            reference: "num2",
            levels: [
              {
                level: 2,
                text: "%3.",
                format: LevelFormat.LOWER_LETTER,
                alignment: AlignmentType.LEFT,
                indent: {
                  hanging: convertMillimetersToTwip(6),
                  left: convertMillimetersToTwip(6),
                },
              },
            ],
          },
          {
            reference: "num3",
            levels: [
              {
                level: 3,
                format: LevelFormat.DECIMAL,
                text: "%4)",
                alignment: AlignmentType.LEFT,
                indent: {
                  hanging: convertMillimetersToTwip(6),
                  left: convertMillimetersToTwip(6),
                },
              },
            ],
          },
          {
            reference: "num4",
            levels: [
              {
                level: 4,
                format: LevelFormat.LOWER_LETTER,
                text: "%5)",
                alignment: AlignmentType.LEFT,
                indent: {
                  hanging: convertMillimetersToTwip(6),
                  left: convertMillimetersToTwip(6),
                },
              },
            ],
          },
        ],
      },
      ${refData.ftNt}
      sections: [
        {
          properties: {
            page: {
              size: {
                orientation: PageOrientation.PORTRAIT,
                width: convertMillimetersToTwip(210),
                height: convertMillimetersToTwip(297),
              },
              margin: {
                top: convertMillimetersToTwip(40),
                right: convertMillimetersToTwip(30),
                bottom: convertMillimetersToTwip(30),
                left: convertMillimetersToTwip(40),
              },
            },
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "COVER",
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ],
        },
        {
          properties: {
            page: {
              pageNumbers: {
                start: 1,
                formatType: NumberFormat.LOWER_ROMAN,
                separator: PageNumberSeparator.EM_DASH,
              },
              size: {
                orientation: PageOrientation.PORTRAIT,
                width: convertMillimetersToTwip(210),
                height: convertMillimetersToTwip(297),
              },
              margin: {
                top: convertMillimetersToTwip(40),
                right: convertMillimetersToTwip(30),
                bottom: convertMillimetersToTwip(30),
                left: convertMillimetersToTwip(40),
              },
            },
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      children: [PageNumber.CURRENT],
                      size: 22,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "KATA PENGANTAR",
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "DAFTAR ISI",
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ],
        },
        {
          properties: {
            page: {

              pageNumbers: {
                start: 1,
                formatType: NumberFormat.DECIMAL,
                separator: PageNumberSeparator.EM_DASH,
              },

              size: {
                orientation: PageOrientation.PORTRAIT,
                width: convertMillimetersToTwip(210),
                height: convertMillimetersToTwip(297),
              },
              margin: {
                top: convertMillimetersToTwip(40),
                right: convertMillimetersToTwip(30),
                bottom: convertMillimetersToTwip(30),
                left: convertMillimetersToTwip(40),
              },
            },
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      children: [PageNumber.CURRENT],
                      size: 22,
                      color: "000000",
                      font: "Times New Roman",
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "BAB I", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "PENDAHULUAN", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "", 
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "BAB II", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "PEMBAHASAN", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "", 
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
            }),
            ${data}
            new Paragraph({
              children: [
                new TextRun({
                  text: "", 
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "BAB III", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "KESIMPULAN", 
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "", 
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
            }),
          ],
        },
        {
          properties: {
            page: {
              pageNumbers: {
                separator: PageNumberSeparator.EM_DASH,
              },
              size: {
                orientation: PageOrientation.PORTRAIT,
                width: convertMillimetersToTwip(210),
                height: convertMillimetersToTwip(297),
              },
              margin: {
                top: convertMillimetersToTwip(40),
                right: convertMillimetersToTwip(30),
                bottom: convertMillimetersToTwip(30),
                left: convertMillimetersToTwip(40),
              },
            },
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({}),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "DAFTAR PUSTAKA",
                  size: 24,
                  color: "000000",
                  bold: true,
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "",
                  size: 24,
                  color: "000000",
                  font: "Times New Roman",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            ${refData.dfPstk}
          ],
        },
      ],
    });
    Packer.toBuffer(doc).then((buffer) => {
      fs.writeFileSync("./doc/My Document.docx", buffer);
    });`
    );


//   const doc = new Document({
//     sections: [
//         {
//             headers: {
//                 default: new Header({
//                     children: [
//                         new Paragraph({
//                             children: [
//                                 new TextRun(""),
//                             ],
//                         }),
//                     ],
//                 }),
//             },
//             children: [
//                 new Paragraph({
//                     children: [new TextRun("First Page")],
//                 }),
//             ],
//         },
//         {
//             properties: {
//                 page: {
//                     pageNumbers: {
//                         start: 1,
//                         formatType: NumberFormat.LOWER_ROMAN,
//                         separator: PageNumberSeparator.EM_DASH,
//                     },
//                 },
//             },
//             headers: {
//                 default: new Header({
//                     children: [
//                         new Paragraph({
//                             alignment: AlignmentType.RIGHT,
//                             children: [
//                                 new TextRun("My Title "),
//                                 new TextRun({
//                                     children: ["Page ", PageNumber.CURRENT],
//                                 }),
//                             ],
//                         }),
//                     ],
//                 }),
//                 first: new Header({
//                     children: [
//                         new Paragraph({
//                             alignment: AlignmentType.RIGHT,
//                             children: [
//                                 new TextRun("First Page Header of Second section"),
//                                 new TextRun({
//                                     children: ["Page ", PageNumber.CURRENT],
//                                 }),
//                             ],
//                         }),
//                     ],
//                 }),
//             },
//             children: [
//                 new Paragraph({
//                     children: [new TextRun("Third Page"), new PageBreak()],
//                 }),
//                 new Paragraph("Fourth Page"),
//             ],
//         },
//     ],
// });
    
//     Packer.toBuffer(doc).then((buffer) => {
//       fs.writeFileSync("./doc/My Document.docx", buffer);
//     });
  };

module.exports = { runDocx };
