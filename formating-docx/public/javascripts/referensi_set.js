const cntrRefInpt = document.getElementsByClassName("container-input")[0];
const selectType = document.getElementById("tipe-ref");
const optType = document.getElementsByTagName("option");

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
    ];
  }

  let form = document.createElement("form");

  let inptdFrag = document.createDocumentFragment();

  console.log(type);
  arrInpt.forEach((e, i) => {
    console.log(e);
    let label = document.createElement("label");
    let namaLabel = document.createAttribute("for");
    namaLabel.value = e;
    label.setAttribute(namaLabel);
    let input = document.createElement("input");
    let namaInput = document.createAttribute("name");
    namaInput.value = e;
    let type = document.createAttribute("type");
    type.value = "text";
    input.setAttribute(namaInput);
    input.setAttribute(type);
    inptdFrag.appendChild(label);
    inptdFrag.appendChild(input);
  });
  form.appendChild(inptdFrag);
  cntrRefInpt.appendChild(form);
};

selectType.addEventListener("change", () => {
  crtInptDt(selectType.value);
});
