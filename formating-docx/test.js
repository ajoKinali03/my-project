// // Numbering and bullet points example
// const fs = require("fs");
// const {
//   AlignmentType,
//   convertInchesToTwip,
//   Document,
//   Footer,
//   Header,
//   HeadingLevel,
//   LevelFormat,
//   Packer,
//   Paragraph,
// } = require("docx");

// // import * as fs from "fs";
// // import {
// //   AlignmentType,
// //   convertInchesToTwip,
// //   Document,
// //   Footer,
// //   Header,
// //   HeadingLevel,
// //   LevelFormat,
// //   Packer,
// //   Paragraph,
// // } from "docx";

// const doc = new Document({
//   numbering: {
//     config: [
//       {
//         reference: "ref1",
//         levels: [
//           {
//             level: 1,
//             format: LevelFormat.DECIMAL,
//             text: "%2",
//           },
//         ],
//       },
//       {
//         reference: "ref2",
//         levels: [
//           {
//             level: 1,
//             format: LevelFormat.UPPER_LETTER,
//             text: "%2",
//           },
//         ],
//       },
//     ],
//   },
//   sections: [
//     {
//         children: [
//             new Paragraph({
//                 text: "REF1 - inst:0 - lvl:0",
//                 numbering: {
//                     reference: "ref1",
//                     instance: 0,
//                     level: 1,
//                 },
//             }),
//             new Paragraph({
//                 text: "REF1 - inst:0 - lvl:0",
//                 numbering: {
//                     reference: "ref1",
//                     instance: 0,
//                     level: 1,
//                 },
//             }),
//             new Paragraph({
//                 text: "REF1 - inst:1 - lvl:0",
//                 numbering: {
//                     reference: "ref1",
//                     instance: 1,
//                     level: 1,
//                 },
//             }),
//             new Paragraph({
//                 text: "REF1 - inst:1 - lvl:0",
//                 numbering: {
//                     reference: "ref1",
//                     instance: 1,
//                     level: 1,
//                 },
//             }),
//             new Paragraph({
//                 text: "REF2 - inst:0 - lvl:0",
//                 numbering: {
//                     reference: "ref2",
//                     instance: 1,
//                     level: 1,
//                 },
//             }),
//             new Paragraph({
//                 text: "REF2 - inst:0 - lvl:0",
//                 numbering: {
//                     reference: "ref2",
//                     instance: 1,
//                     level: 1,
//                 },
//             }),
//         ],
//     },
// ],
// });

// Packer.toBuffer(doc).then((buffer) => {
//   fs.writeFileSync("My Document.docx", buffer);
// });

// Numbering and bullet points example
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

// import * as fs from "fs";
// import {
//   AlignmentType,
//   convertInchesToTwip,
//   Document,
//   Footer,
//   Header,
//   HeadingLevel,
//   LevelFormat,
//   Packer,
//   Paragraph,
// } from "docx";

const doc = new Document({
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
            level: 0,
            text: "%1.",
            format: LevelFormat.DECIMAL,
            alignment: AlignmentType.LEFT,
          },
        ],
      },
      {
        reference: "num2",
        levels: [
          {
            level: 0,
            text: "%1.",
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
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1)",
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
            level: 0,
            format: LevelFormat.LOWER_LETTER,
            text: "%1)",
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
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: "Pengertian Jihad",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "bold",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.8),
            firstLine: convertMillimetersToTwip(0),
            left: convertMillimetersToTwip(5),
          },
          numbering: {
            reference: "num0",
            instance: 0,
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Mengangkat senjata, sebagaimana dalam QS. An-Nisa: 95:",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "normal",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.9),
            firstLine: convertMillimetersToTwip(4.9),
            left: convertMillimetersToTwip(10),
          },
          numbering: {
            reference: "num2",
            instance: 1,
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Ucapan, argumen, dan pendapat (qawl), sebagaimana dalam QS. Al-Furqan: 52:",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "normal",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.9),
            firstLine: convertMillimetersToTwip(4.9),
            left: convertMillimetersToTwip(10),
          },
          numbering: {
            reference: "num2",
            instance: 1,
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Perbedaan Jihad dan Terorisme",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "bold",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.8),
            firstLine: convertMillimetersToTwip(0),
            left: convertMillimetersToTwip(5),
          },
          numbering: {
            reference: "num0",
            instance: 0,
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Mengangkat senjata, sebagaimana dalam QS. An-Nisa: 95:",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "normal",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.9),
            firstLine: convertMillimetersToTwip(4.9),
            left: convertMillimetersToTwip(10),
          },
          numbering: {
            reference: "num2",
            instance: 2,
            level: 0,
          },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Ucapan, argumen, dan pendapat (qawl), sebagaimana dalam QS. Al-Furqan: 52:",
              size: 24,
              color: "000000",
              font: "Times New Roman",
            }),
          ],
          style: "normal",
          alignment: AlignmentType.JUSTIFIED,
          spacing: {
            line: 360,
          },
          indent: {
            hanging: convertMillimetersToTwip(4.9),
            firstLine: convertMillimetersToTwip(4.9),
            left: convertMillimetersToTwip(10),
          },
          numbering: {
            reference: "num2",
            instance: 2,
            level: 0,
          },
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
