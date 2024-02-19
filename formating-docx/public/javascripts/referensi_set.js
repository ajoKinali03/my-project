const cntrRefInpt = document.getElementsByClassName("container-input")[0];
const selectType = document.getElementById("tipe-ref");
const optType = document.getElementsByTagName("option");
const btnConfirmTxt = document.getElementById("btn-confirm-text");
const inptTxt = document.getElementsByClassName("inpt-txt");
const cntrRef = document.getElementsByClassName("container-ref")[0];

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
      "Tahun",
      "Halaman",
      "Penterjemah",
      "ISBN",
    ];
  } else if (type == "tesis") {
    arrInpt = [
      "Tipe EX: Tesis/Skripsi/Diseratsi",
      "Judul",
      "Penulis",
      "Kota",
      "Universitas",
      "Tahun",
      "Halaman",
    ];
  } else if (type == "website") {
    arrInpt = ["Judul", "Penulis", "Tanggal_Akses", "URL"];
  }

  let form = document.createElement("form");
  let classForm = document.createAttribute("class");
  classForm.value = "form-input";
  form.setAttributeNode(classForm);

  let inptdFrag = document.createDocumentFragment();

  arrInpt.forEach((e, i) => {
    let input = document.createElement("input");
    let namaInput = document.createAttribute("placeholder");
    if (e == "ISBN" || e == "Penterjemah") {
      namaInput.value = e + " (Opsional)";
    } else {
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

//stage menampilkan data ref jika ada di cookie
if (document.cookie.split(";")[1]) {
  const data = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
  data.forEach((e) => crtShowDt(e));
}

// penjalan fungsi crtInptDt
selectType.addEventListener("change", () => {
  const formInpt = document.getElementsByClassName("form-input")[0];
  let indukElement = formInpt.parentElement;
  indukElement.removeChild(formInpt);
  console.log(selectType.value);
  crtInptDt(selectType.value);
});

// fungsi untuk mengambil data text dari input
btnConfirmTxt.addEventListener("click", () => {
  const cekPanjangDtCookie = document.cookie.split(";")[1]
    ? JSON.parse(document.cookie.split(";")[1].split("=")[1]).length
    : 0;
  const objDataTxt = {};
  let idRef = 0 + cekPanjangDtCookie;
  idRef++;
  objDataTxt.ID = idRef;
  objDataTxt.type = selectType.value;
  for (let i = 0; i < inptTxt.length; i++) {
    let e = inptTxt[i];
    objDataTxt[e.attributes.placeholder.value.split(" ")[0]] = e.value;
  }
  cookieFunc(objDataTxt);
  crtShowDt(objDataTxt);
});

// fungsi membuat tampilan show ref
function crtShowDt(data) {
  let showRefParent = document.createElement("div");
  let refClass = document.createAttribute("class");
  refClass.value = "show-ref";
  showRefParent.setAttributeNode(refClass);

  let showdFrag = document.createDocumentFragment();
  let dtArrKeys = Object.keys(data);

  for (let i = 0; i < dtArrKeys.length; i++) {
    let shwTextP = document.createElement("p");
    if (dtArrKeys[i] == "ID") {
      shwTextP.innerText = `${dtArrKeys[i]}:${data[dtArrKeys[i]]}`;
      shwTextP.style.display = "none";
    } else {
      shwTextP.innerText = `${dtArrKeys[i]}: ${data[dtArrKeys[i]]}`;
    }
    showdFrag.appendChild(shwTextP);
  }
  showRefParent.appendChild(showdFrag);

  let btnDel = document.createElement("button");
  let idBtnDel = document.createAttribute("id");
  idBtnDel.value = "ref-btn-del";
  btnDel.setAttributeNode(idBtnDel);
  btnDel.innerText = "HAPUS";
  showRefParent.appendChild(btnDel);

  cntrRef.appendChild(showRefParent);
}

// minyimpan data ke cookie
function cookieFunc(data) {
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
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

// fungsi untuk menghapus data refrensi
document.addEventListener("click", (event) => {
  let arrayChildren = event.target.parentElement.children;
  let triger = event.target;

  if (triger.id == "ref-btn-del") {
    let dataCookie = JSON.parse(document.cookie.split(";")[1].split("=")[1]);

    for (let value of arrayChildren) {
      if (value.innerText.includes("ID:")) {
        let idElement = value.innerText.split(":")[1];
        let dataAfterDelete = dataCookie.filter((e) => e.ID != idElement);
        delElment(dataAfterDelete);
        location.reload(true);
      }
    }
  }
});

function delElment(dataDel) {
  let expiredDate = new Date(0);
  document.cookie =
    "obj" + "=; expires=" + expiredDate.toUTCString() + "; path=/";
  dataDel.forEach((e, i) => {
    i++;
    e.ID = i;
    cookieFunc(e);
  });
}
