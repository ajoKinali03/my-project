const { getInnerDocx } = require("./file-manage");

const runDocx = async () => {
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
  } = require("docx");

  getInnerDocx();
  let strInnerDocx = JSON.parse(fs.readFileSync("./data/strInnerDocx.json"));
  strInnerDocx = [strInnerDocx].join();
  strInnerDocx = strInnerDocx.replaceAll("|-|", "\\" + "\"");
  strInnerDocx = strInnerDocx.replaceAll(",,", ",");

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
        children: [${strInnerDocx}],
      },
    ],
  });
  
  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("./doc/My Document.docx", buffer);
  });`
  );
};
runDocx()
module.exports = {runDocx};