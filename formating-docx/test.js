// Numbering and bullet points example
const fs = require("fs");
const {
  AlignmentType,
  convertInchesToTwip,
  Document,
  Footer,
  Header,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
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
              reference: "ref1",
              levels: [
                  {
                      level: 0,
                      format: LevelFormat.DECIMAL,
                      text: "%1",
                  },
              ],
          },
          {
              reference: "ref2",
              levels: [
                  {
                      level: 2,
                      format: LevelFormat.DECIMAL,
                      text: "%1",
                  },
              ],
          },
      ],
  },
  sections: [
      {
          children: [
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
                      instance: 0,
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
                      instance: 0,
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
                      instance: 1,
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
                      instance: 1,
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
                      instance: 2,
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "REF1 - inst:0 - lvl:0",
                  numbering: {
                      reference: "ref1",
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
