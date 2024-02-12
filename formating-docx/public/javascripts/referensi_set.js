const cntrRefInpt = document.getElementsByClassName("container-input")[0];
const selectType = document.getElementById("tipe-ref");
const optType = document.getElementsByTagName("option");
const btnConfirmTxt = document.getElementById("btn-confirm-text");
const inptTxt = document.getElementsByClassName("inpt-txt");



// fungsi membuat input yang selalu berganti sesui opsi yang diinginkan
const crtInptDt = (type) => {
  let arrInpt;
  if (type == "jurnal") {
    arrInpt = [
      "Judul",
      "Penulis",
      "Nama Jurnal",
      "Tahun",
      "Volume",
      "Nomor",
      "Halaman",
      "ISBN",
    ];
  } else if (type == "buku") {
    arrInpt = [
      "Judul",
      "Penulis",
      "Kota Terbit",
      "Penerbit",
      "Halaman",
      "ISBN",
    ];
  } else if (type == "tesis") {
    arrInpt = ["Judul", "Penulis", "Jurusan", "Universitas"];
  }

  let form = document.createElement("form");
  let classForm = document.createAttribute("class");
  classForm.value = "form-input";
  form.setAttributeNode(classForm);

  let inptdFrag = document.createDocumentFragment();

  arrInpt.forEach((e, i) => {
    let input = document.createElement("input");
    let namaInput = document.createAttribute("placeholder");
    if(e == "ISBN"){
      namaInput.value = e + " (Opsional)";
    }else{
      namaInput.value = e;
    }
    let type = document.createAttribute("type");
    type.value = "text";
    let classInpt = document.createAttribute("class");
    classInpt.value = "inpt-txt";
    input.setAttributeNode(namaInput);
    input.setAttributeNode(type);
    input.setAttributeNode(classInpt);
    inptdFrag.appendChild(input);
  });
  form.appendChild(inptdFrag);
  cntrRefInpt.appendChild(form);
};

//stage menampilkan data ref jika ada ci cookie
if(document.cookie.split(";")[1]){
  const data = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
  data.forEach(e => crtShowDt(e));
};

// penjalan fungsi crtInptDt
selectType.addEventListener("change", () => {
  const formInpt = document.getElementsByClassName("form-input")[0];
  let indukElement = formInpt.parentElement;
  indukElement.removeChild(formInpt);

  crtInptDt(selectType.value);
});

// fungsi untuk mengambil data text dari input
btnConfirmTxt.addEventListener("click", () => {
  const objDataTxt = {};
  objDataTxt.type = selectType.value;
  for (let i = 0; i < inptTxt.length; i++) {
    let e = inptTxt[i];
    objDataTxt[e.attributes.placeholder.value.split(" ")[0]] = e.value;
    console.log(e.attributes.placeholder.value.split(" ")[0]);
  }
  cookieFunc(objDataTxt);
  crtShowDt(objDataTxt);
});

// fungsi membuat tampilan show ref
function crtShowDt(data) {
  let cntrRef = document.getElementsByClassName("container-ref")[0];

  let showRefParent = document.createElement("div");
  let refClass = document.createAttribute("class");
  refClass.value = "show-ref";
  showRefParent.setAttributeNode(refClass);

  let showdFrag = document.createDocumentFragment();
  let dtArrKeys = Object.keys(data);

  for (let i = 0; i < dtArrKeys.length; i++) {
    let shwTextP = document.createElement("p");
    shwTextP.innerText = `${dtArrKeys[i]}: ${data[dtArrKeys[i]]}`;
    showdFrag.appendChild(shwTextP);
  }
  showRefParent.appendChild(showdFrag);
  cntrRef.appendChild(showRefParent);
}

// minyimpan data ke cookie
function cookieFunc(data) {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  if (document.cookie.split(";")[1]) {
    let cekCookieValue = document.cookie.split(";")[1].split("=")[1];
    let objArray = cekCookieValue ? JSON.parse(cekCookieValue) : [];
    objArray.push(data);

    document.cookie = `obj=${JSON.stringify(objArray)};${expires};path=/`;
  } else {
    document.cookie = `obj=${JSON.stringify([data])};${expires};path=/`;
  }
}
