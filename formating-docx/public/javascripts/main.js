const inpt = document.getElementById("form-input");
const formPost = document.getElementById("form-post");
const inputPost = document.getElementById("input-post");
const btnShwRef = document.getElementById("btn-showref");
const cntrCntn = document.getElementsByClassName("container-home")[0];
const cntrShwRefHome = document.getElementsByClassName("show-ref-home")[0];

// auto set lebar atau responsif dari tampilan home
let lebarCntrCntn = cntrCntn.getBoundingClientRect().width;

if (lebarCntrCntn >= 1000) {
  inpt.style.width = `${parseInt(0.5 * lebarCntrCntn)}px`;
  formPost.style.width = `${parseInt(0.23 * lebarCntrCntn)}px`;
}
if (lebarCntrCntn <= 1039) {
  inpt.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
  formPost.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
}

// input text
document.addEventListener("keyup", () => {
  if (event.code == "Enter") {
    inputPost.value = JSON.stringify({ teks: inpt.value });
  }
});

// fungsi untuk menampilkan
btnShwRef.addEventListener("click", () => {
  if (document.cookie.split(";")[1]) {
    let data = JSON.parse(document.cookie.split(";")[1].split("=")[1]);

    crtCntrShwRef(data, true);
  } else {
    crtCntrShwRef("Referensi Belum Anda Masukan", false);
  }
});


function crtCntrShwRef(respon, bool) {
  let listItemChild = cntrCntn.children.item(2);
  if (listItemChild.className == "none") {
    let shwRefHome = document.getElementsByClassName("none")[0];
    let attrClass = document.createAttribute("class");
    attrClass.value = "show-ref-home";
    shwRefHome.setAttributeNode(attrClass);

    // auto set lebar dari tampilan cntr ref
    if (lebarCntrCntn >= 1000) {
      shwRefHome.style.width = `${parseInt(0.26 * lebarCntrCntn)}px`;
    }
    if (lebarCntrCntn <= 1039) {
      shwRefHome.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
    }

    if (bool) {
      shwRefHome.style.textAlign = "";
      shwRefHome.style.color = "";
      shwRefHome.style.fontWeight = "";
      crtShowDtHome(respon, listItemChild);
    } else {
      shwRefHome.style.textAlign = "center";
      shwRefHome.style.color = "red";
      shwRefHome.style.fontWeight = "bolder";
      shwRefHome.innerText = respon;
    }
  } else {
    let shwRefHome = document.getElementsByClassName("show-ref-home")[0];
    let attrClass = document.createAttribute("class");
    attrClass.value = "none";
    shwRefHome.setAttributeNode(attrClass);
    shwRefHome.innerText = "";
  }
}

function crtShowDtHome(data, cntrRefHome) {
  data.forEach((e, i) => {
    let showRefParent = document.createElement("div");
    let refClass = document.createAttribute("class");
    refClass.value = "ref-home";
    showRefParent.setAttributeNode(refClass);
    let keyWordBtn = document.createElement("button");
    let idKeyWordBtn = document.createAttribute("id");
    idKeyWordBtn.value = "keyword-btn";
    keyWordBtn.setAttributeNode(idKeyWordBtn);
    keyWordBtn.style.padding = "0 3px";
    keyWordBtn.style.margin = "5px 0 5px 10px";
    keyWordBtn.innerText = "copy";

    let showdFrag = document.createDocumentFragment();
    for (let key in e) {
      let shwTextP = document.createElement("p");
      if (key == "ID") {
        shwTextP.style.color = "black";
        shwTextP.style.backgroundColor = "white";
        shwTextP.style.textAlign = "center";
        shwTextP.style.fontWeight = "bolder";
        shwTextP.style.borderRadius = "5px";
        shwTextP.innerText = `-(footnote:${e[key]})-`;
        shwTextP.appendChild(keyWordBtn);
      } else {
        shwTextP.innerText = `${key}: ${e[key]}`;
      }
      showdFrag.appendChild(shwTextP);
    }
    showRefParent.appendChild(showdFrag);
    cntrRefHome.appendChild(showRefParent);
  });
}

// fitur menyalin keyword footnote
document.addEventListener("click", (event) => {
  let elementClick = event.target.parentElement.innerText.split("copy")[0];
  let btnIdKeyWord = event.target.id;
  if (btnIdKeyWord == "keyword-btn") {
    navigator.clipboard
      .writeText(elementClick)
      .then(function () {
        console.log("Teks berhasil disalin ke papan klip!");
      })
      .catch(function (err) {
        console.error("Gagal menyalin teks:", err);
      });
  }
});
