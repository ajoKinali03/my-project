const innerDocx = (text, indentLeftValue) => {
  return [
    {
      tag: "jb",
      text: 
      `new Paragraph({
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
      }),`
    },
    {
      tag: "text",
      text: 
      `new Paragraph({
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
      }),`
    },
    {
      tag: "num0",
      text:
      `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
      }),`
    },
    {
      tag: "num1",
      text:
      `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
      }),`
    },
    {
      tag: "num2",
      text:
      `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
      }),`
    },
    {
      tag: "num3",
      text:
      `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
      }),`
    },
    {
      tag: "num4",
      text:
      `new Paragraph({
        children: [
          new TextRun({
            text: "${text}",
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
      }),
      new Paragraph({
          children: [
            new TextRun({
              text: "${text}",
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
            left: convertMillimetersToTwip(${indentLeftValue}),
          },
        }),
        new TextRun({
          text: '"${text}"',
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
          left: convertMillimetersToTwip(${indentLeftValue}),
        },
      }),`
    },
  ]
};


module.exports = {innerDocx};