const fs = require("fs");
const { value } = require("../data/innerDocxValue");
const { innerDocx } = require("./inner-docx");
const pathData = "./data";
if (!fs.existsSync(pathData)) {
  fs.mkdirSync(pathData);
}

if (!fs.existsSync(pathData + "/strInnerDocx.json")) {
  fs.writeFileSync(pathData + "/strInnerDocx.json", "[]", "utf-8");
}

if (!fs.existsSync(pathData + "/innerDocxValue.js")) {
  fs.writeFileSync(
    pathData + "/innerDocxValue.js",
    `const value = (tag) => {
    switch (tag) {
      case "jb":
        return 0;
      case "num0":
        return 0;
      case "num1":
        return 0;
      case "num2":
        return 0;
      case "num3":
        return 0;
      case "num4":
        return 30;
    };
  };
  module.exports = {value};
  `,
    "utf-8"
  );
}

const uploadDataToObjData = (data) => {
  if (!fs.existsSync(pathData + "/objData.json")) {
    fs.writeFileSync(pathData + "/objData.json", data, "utf-8");
  } else {
    fs.writeFileSync(pathData + "/objData.json", data, "utf-8");
  }
};

const uploadDataToInnerDocx = (data) => {
  if (!fs.existsSync(pathData + "/strInnerDocx.json")) {
    fs.writeFileSync(pathData + "/strInnerDocx.json", data, "utf-8");
  } else {
    fs.writeFileSync(pathData + "/strInnerDocx.json", data, "utf-8");
  }
};

const getDataObj = () => {
  return JSON.parse(fs.readFileSync("./data/objData.json", "utf-8"));
};
// perbaiki bug disini tentang (")
const getInnerDocx = async () => {
  const arrHslInnerDocx = [];
  let strInnerDocx = JSON.parse(fs.readFileSync("./data/strInnerDocx.json"));

  let tagValue = null;
  getDataObj().forEach((e, i) => {
    // variabel untuk mengganti tanda (") dengan (|-|) pada getDataObj
    let eTxt = e.txt.replaceAll("\"", "|-|");
    innerDocx().forEach((a, b) => {
      if (e.tag == a.tag) {
        const val = value(e.tag);
        if (val != undefined) {
          const hsl = innerDocx(eTxt, val)[b];
          arrHslInnerDocx.push(hsl.text);
          tagValue = i;
        } else if (val == undefined) {
          const hsl = innerDocx(eTxt, value(getDataObj()[tagValue].tag))[b];
          arrHslInnerDocx.push(hsl.text);
        }
      }
    });
  });

  strInnerDocx = arrHslInnerDocx;
  await uploadDataToInnerDocx(JSON.stringify(strInnerDocx));
};

module.exports = { uploadDataToObjData, getDataObj, getInnerDocx };