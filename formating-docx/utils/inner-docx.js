const innerDocx = (text, point, indentLeftValue) => {
  // console.log(text, point);
  return [
    {
      id: "jb",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
          left: ${indentLeftValue},
          hanging: 0,
          firstLine: 0,
        },
      }),`,
    },
    {
      id: "teks",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
      }),`,
    },
    {
      id: "1",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${point}",
          }),
        ],
        style: "bold",
        spacing: {
          line: 360,
        },
        indent: {
          hanging: convertMillimetersToTwip(6),
          firstLine: convertMillimetersToTwip(0),
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
        numbering: {
          reference: "num0",
          level: 0,
        },
      }),`,
    },
    {
      id: "2",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${point}",
          }),
        ],
        style: "normal",
        spacing: {
          line: 360,
        },
        indent: {
          hanging: convertMillimetersToTwip(5),
          firstLine: convertMillimetersToTwip(5),
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
        numbering: {
          reference: "num1",
          level: 1,
        },
      }),`,
    },
    {
      id: "3",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${point}",
          }),
        ],
        style: "normal",
        spacing: {
          line: 360,
        },
        indent: {
          hanging: convertMillimetersToTwip(5),
          firstLine: convertMillimetersToTwip(5),
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
        numbering: {
          reference: "num2",
          level: 2,
        },
      }),`,
    },
    {
      id: "4",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${point}",
          }),
        ],
        style: "normal",
        spacing: {
          line: 360,
        },
        indent: {
          hanging: convertMillimetersToTwip(6),
          firstLine: convertMillimetersToTwip(6),
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
        numbering: {
          reference: "num3",
          level: 3,
        },
      }),`,
    },
    {
      id: "5",
      style: `new Paragraph({
        children: [
          new TextRun({
            text: "${point}",
          }),
        ],
        style: "normal",
        spacing: {
          line: 360,
        },
        indent: {
          hanging: convertMillimetersToTwip(6),
          firstLine: convertMillimetersToTwip(6),
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
        numbering: {
          reference: "num4",
          level: 4,
        },
      }),`,
    },
  ];
};
// ,
//       new Paragraph({
//           children: [
//             new TextRun({
//               text: "${text}",
//               size: 36,
//               color: "000000",
//               font: "Traditional Arabic",
//             }),
//           ],
//           alignment: AlignmentType.RIGHT,
//           spacing: {
//             line: 360,
//           },
//           indent: {
//             firstLine: convertMillimetersToTwip(12),
//             left: convertMillimetersToTwip(${indentLeftValue}),
//           },
//         }),
//         new TextRun({
//           text: '"${text}"',
//           size: 24,
//           italics: true,
//           color: "000000",
//           font: "Times New Roman",
//         }),
//         ],
//         alignment: AlignmentType.JUSTIFIED,
//         spacing: {
//           line: 240,
//         },
//         indent: {
//           // firstLine: convertMillimetersToTwip(12),
//           left: convertMillimetersToTwip(${indentLeftValue}),
//         },
//       }),

module.exports = { innerDocx };
