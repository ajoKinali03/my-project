
const inpt = document.getElementById("form-input");
document.addEventListener("keypress", (event) => {
  if(event.code == "Enter"){
    const arrWord = [...inpt.value];
    const arrKos = [];
    let dummyArr = [];
    arrWord.forEach((e, i) => {
      dummyArr.push(e);
      if(e == "\n" || i == arrWord.length-1){
        arrKos.push(dummyArr.join(""));
        dummyArr = [];
      };
    });
    console.log(arrKos);
    // console.log([arrKos.join("").replaceAll(" \n", " ")]);
  }
});




/*
const bts = " -bts-\n-bts-";
const arrObjInput = [];
const dummyObj = {tag: undefined, txt: undefined}
const tag = [
  "jb",
  "text",
  "num0",
  "num1",
  "num2",
  "num3",
  "num4",
  "arab",
  "arti",
];


document.addEventListener("keydown", (event) => {
  const textInput = document.getElementById("textInput"); 
  console.log([textInput.value]);
  let text = textInput.value;

  // membuat dan mengatur cursor ketika di Enter
  if (event.code == "Enter") {
    getCodeTag(text, textInput);
    //mendeteksi teks apabila panjang teks kurang dari 15 maka pindahkan cursor
    if (text.length < 15) {
      setCursor(event, text);
    }
  }
  // menyimpan teks sementara sebelum di kirim ke backend
  if (text.length >= 15) {
    dummySaveInput(event, text, textInput);
  }
});

// membuat tag  -bts-
const getCodeTag = (txt, inptText) => {
  tag.forEach((e, i) => {
    if (txt.endsWith(e) == true) {
      inptText.value += bts;
      // dummyObj.tag = e;
    }
  });
};

// fungsi untuk memposisikan kursor
const setCursor = (ev, txt) => {
  let index = txt.length + 6;
  textInput.selectionStart = index;
  textInput.selectionEnd = index;
  focus();
};

// menyimpan sementara hasil input ke array dan menampilkan nya
const dummySaveInput = (ev, txt, txtInpt) => {
  if (ev.keyCode == 16) {
    let start = txt.indexOf("-bts-") + 6;
    let end = txt.lastIndexOf("-bts-") - 1;
    tag.forEach((e) => {
      if (txt.search(e) == 0) {
        arrObjInput.push({ tag: e, txt: txt.substring(start, end)});
        dummyObj.tag = e;
       dummyObj.txt = txt.substring(start, end);
        console.log(dummyObj.txt + " ok");
      }
    });
    textInput.value = "";
    createTagHtml();
    txtInpt.focus();
    renderInput();
  }
};

// create tag html untuk list data
const createTagHtml = () => {
  const ulIndexList = Array.prototype.slice.call(
    document.getElementById("costume-list").children
  ).length;
  const list = document.getElementById("costume-list");

  let li = document.createElement("li");
  li.setAttribute("id", `list-data${ulIndexList}`);

  let p = document.createElement("p");
  p.setAttribute("class", "mb-0 costume-list-data-p");
  li.appendChild(p);

  let button = document.createElement("button");
  button.setAttribute("class", "btn costume-btn-list-data");
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", `#collapse${ulIndexList}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `collapse${ulIndexList}`);
  button.appendChild(document.createTextNode(dummyObj.tag));
  p.appendChild(button);

  let div = document.createElement("div");
  div.setAttribute("id", `collapse${ulIndexList}`);
  div.setAttribute("class", "mt-1 collapse costume-list-data-div");
  div.appendChild(document.createTextNode(dummyObj.txt));
  li.appendChild(div);

  list.appendChild(li);
};


// menyimpan hasil inputan dan kirim ke backend
const renderInput = () => {
  let postInput = document.getElementById("input-post");  
  postInput.value = JSON.stringify(arrObjInput);
};


const getBtnDownload = () => {

};

window.onunload = () => {
  const btnPost = document.getElementById("btn-post");
  btnPost.disabled = true;
};
*/