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

// document.cookie = "obj=; expires=Sun, 11 February 2024 00:00:00 UTC; path=/"

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

    shwRefHome.style.textAlign = "";
    shwRefHome.style.color = "";
    shwRefHome.style.fontWeight = "";

    if (bool) {
      crtShowDtHome(respon, listItemChild);
      // shwRefHome.innerText = "BERHASIL";
    } else {
      shwRefHome.innerText = respon;
    }
  } else {
    let shwRefHome = document.getElementsByClassName("show-ref-home")[0];
    let attrClass = document.createAttribute("class");
    attrClass.value = "none";
    shwRefHome.setAttributeNode(attrClass);
    shwRefHome.innerText = "";
    shwRefHome.style.textAlign = "center";
    shwRefHome.style.color = "red";
    shwRefHome.style.fontWeight = "bolder";
  }
}

function crtShowDtHome(data, cntrRefHome) {
  data.forEach((e, i) => {
    let showRefParent = document.createElement("div");
    let refClass = document.createAttribute("class");
    refClass.value = "ref-home";
    showRefParent.setAttributeNode(refClass);

    let showdFrag = document.createDocumentFragment();
    for (let key in e) {
      let shwTextP = document.createElement("p");
      shwTextP.innerText = `${key}: ${e[key]}`;
      showdFrag.appendChild(shwTextP);
    }
    showRefParent.appendChild(showdFrag);
    cntrRefHome.appendChild(showRefParent);
  });

  // let dtArrKeys = Object.keys(data);

  // for (let i = 0; i < dtArrKeys.length; i++) {
  //   let shwTextP = document.createElement("p");
  //   shwTextP.innerText = `${dtArrKeys[i]}: ${data[dtArrKeys[i]]}`;
  //   showdFrag.appendChild(shwTextP);
  // }
  // showRefParent.appendChild(showdFrag);
  // cntrRef.appendChild(showRefParent);
}
