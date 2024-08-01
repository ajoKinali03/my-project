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
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
  LeaderType,
} = require("docx");
// const {
//   TabStopPosition,
//   Tab,
//   TabStopType,
//   PositionalTab,
//   BorderStyle,
//   Document,
//   Packer,
//   Paragraph,
//   TextRun,
//   Underline,
//   UnderlineType,
//   convertInchesToTwip,
//   LevelFormat,
//   AlignmentType,
//   Header,
//   Footer,
//   Spacing,
//   convertMillimetersToTwip,
//   PageOrientation,
//   PageSize,
//   page,
//   HeadingLevel,
//   FootnoteReferenceRun,
//   PageBreak,
//   PageNumber,
//   NumberFormat,
//   SectionType,
//   PageNumberSeparator,
// } = require("docx");

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

const columnWidth = TabStopPosition.MAX / 4;
const receiptTabStops = [
    // no need to define first left tab column
    // the right aligned tab column position should point to the end of column
    // i.e. in this case
    // (end position of 1st) + (end position of current)
    // columnWidth + columnWidth = columnWidth * 2

    { type: TabStopType.RIGHT, position: columnWidth * 2 },
    { type: TabStopType.RIGHT, position: columnWidth * 3 },
    { type: TabStopType.RIGHT, position: TabStopPosition.MAX },
  ],
  twoTabStops = [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }];

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
              text: "tesst",
              type: "normal",
              alignment: AlignmentType.JUSTIFIED,
              indent: {
                hanging: convertMillimetersToTwip(4.9),
                firstLine: convertMillimetersToTwip(4.9),
                left: convertMillimetersToTwip(10),
              },
            }),
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("Receipt 001")],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "To Bob.\tBy Alice.",
              bold: true,
            }),
          ],
          tabStops: [
            {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
              leader: LeaderType.DOT,
            },
          ],
        }),
        new Paragraph({
          tabStops: twoTabStops,
          children: [new TextRun("Foo Inc\tBar Inc")],
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          tabStops: receiptTabStops,

          children: [
            new TextRun({
              text: "Item\tPrice\tQuantity\tSub-total",
              bold: true,
            }),
          ],
        }),
        new Paragraph({
          tabStops: receiptTabStops,
          text: "Item 3\t10\t5\t50",
        }),
        new Paragraph({
          tabStops: receiptTabStops,
          text: "Item 3\t10\t5\t50",
        }),
        new Paragraph({
          tabStops: receiptTabStops,
          text: "Item 3\t10\t5\t50",
        }),
        new Paragraph({
          tabStops: receiptTabStops,
          children: [
            new TextRun({
              text: "\t\t\tTotal: 200",
              bold: true,
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
