const cntrRefInpt = document.getElementsByClassName("container-input")[0];
const selectType = document.getElementById("tipe-ref");
const optType = document.getElementsByTagName("option");
const formInpt = document.getElementsByClassName("form-input")[0];

const crtInptDt = (type) => {
  console.log(type);
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

  // munukar input yang sudah ada dengan fungsi repalaceChild(child lama, child baru)

  console.log(arrInpt);
  arrInpt.forEach((e, i) => {
    // console.log(e);
    let input = document.createElement("input");
    let namaInput = document.createAttribute("placeholder");
    namaInput.value = e;
    let type = document.createAttribute("type");
    type.value = "text";
    input.setAttributeNode(namaInput);
    input.setAttributeNode(type);
    inptdFrag.appendChild(input);
  });
  form.appendChild(inptdFrag);
  cntrRefInpt.appendChild(form);
  // formInpt.parentNode.replaceChild(form, formInpt);
};

selectType.addEventListener("change", () => {
  let indukElement = formInpt.parentElement;
  console.log(indukElement);
  indukElement.removeChild(formInpt)
  crtInptDt(selectType.value);
});
