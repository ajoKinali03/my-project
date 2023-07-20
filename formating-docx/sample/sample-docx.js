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

const doc = new Document({
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
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: "judul bab",
              bold: true,
              size: 24,
              color: "000000",
              allCaps: true,
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: {
            line: 360,
          },
          indent: {
            left: 0,
            hanging: 0,
            firstLine: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini judul num0",
            }),
          ],
          style: "bold",
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(6),
            firstLine: convertMillimetersToTwip(0),
            left: convertMillimetersToTwip(6),
          },
          numbering: {
            reference: "num0",
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(6),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini judul num1",
            }),
          ],
          style: "normal",
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(5),
            firstLine: convertMillimetersToTwip(5),
            left: convertMillimetersToTwip(12),
          },
          numbering: {
            reference: "num1",
            level: 1,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(12),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini judul num2",
            }),
          ],
          style: "normal",
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(5),
            firstLine: convertMillimetersToTwip(5),
            left: convertMillimetersToTwip(18),
          },
          numbering: {
            reference: "num2",
            level: 2,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(18),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini judul num3",
            }),
          ],
          style: "normal",
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(6),
            firstLine: convertMillimetersToTwip(6),
            left: convertMillimetersToTwip(24),
          },
          numbering: {
            reference: "num3",
            level: 3,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(24),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini judul num4",
            }),
          ],
          style: "normal",
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(6),
            firstLine: convertMillimetersToTwip(6),
            left: convertMillimetersToTwip(30),
          },
          numbering: {
            reference: "num4",
            level: 4,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem.",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(30),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "شنستيلابتسلا يبتا سنتيالا باسباسلا يا سياب تساي بنتاسي لاتبا لاستيالا بنتسا يلاتبا ستنيالا بتسايلا بنتسلايخعبس بتايلا يغبعغلي بغليب تنىيلابليلاغبر يتبرلاعيغب لاريبلا رنتياب رلاينغبلار يغبريق رتلاسمعيرسع رتقلايعب",
              size: 36,
              color: "000000",
              font: "Traditional Arabic",
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: {
            line: 360,
          },
          indent: {
            firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(30),
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: '"ini materi setelah isi judul bab: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium cumque soluta rerum delectus dolorem."',
              size: 24,
              italics: true,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 240,
          },
          indent: {
            // firstLine: convertMillimetersToTwip(12),
            left: convertMillimetersToTwip(30),
          },
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
