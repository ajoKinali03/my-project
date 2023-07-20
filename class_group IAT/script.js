// membuat fungsi untuk menjadikan isi dari arrName menjadi random
const funcRandom = () => {
  const arrName = [
    "Hetri Saputra",
    "Fahmil Nizar Zulmi Tanjung",
    "Hidayatul Ilma",
    "Silfia Nuraziah",
    "Ratna Ningsih",
    "Nurfauqanur Afri",
    "Lili Puspa",
    "Difki Maidika",
    "Rifaldi Chandra",
    "Fatimah Azzahra",
    "Arum Handayani",
    "Nur Sakinah",
    "Tia Putriana",
    "Alfian Chandra",
    "Jumiran Sahbani",
    "Mila Anggraini",
    "Azwar Hamid",
    "Rahma Yani",
    "HIdayatul Fadilla",
    "Qoriatun Nabila",
    "Muhammad Farhan",
    "Delvi Wulandari",
    "Lia Estianti",
    "Aulia Rahmanah Putri",
    "Rizki Ananda Harahap",
    "Aprillia Wulandari",
    "Muhammad Randi",
  ];

  let arrIndex = [];
  for (let i = 0; i < 500; i++) {
    const nRandom = Math.floor(Math.random() * 27 + 0);
    arrIndex.push(nRandom);
  }
  const arrFinalIndex = [...new Set(arrIndex)];
  let dummyArr = [];
  arrName.forEach((e, i) => {
    arrFinalIndex.forEach((eNum, iNum) => {
      if (i == iNum) {
        dummyArr.push(arrName[eNum]);
      }
    });
  });
  return dummyArr;
  // return arrName;
};


const createGroup = (jumKel) => {
  const arrName = funcRandom();
  let arrKos = [];
  let point = arrName.length / jumKel;
  point = Math.floor(point);
  let count = -1;
  
  // ganti logika
  //========================================
  // membagi nama sesuai kelompok
  // const newArr = arrName.map(function (el, i) {
  //   count++;
  //   if (count == 1) {
    //     if (arrName.length - 1 == i) {
      //       return `[ "${el}" ]`;
      //     }
      //     return `[ "${el}" `;
      //   }
  //   if (count == point || arrName.length - 1 == i) {
    //     count *= 0;
    //     return `"${el}"]`;
    //   }
    //   return `"${el}"`;
    // });
    // // menjalankan kode array yang awal nya string
    // arrKos = eval(`[${newArr.join()}]`);
    // ==========================================
    
    // di ganti dengan ini
    let arrOrg = [];
    for (let i = 1; i <= jumKel; i++) {
      for (let a = 1; a <= point; a++) {
        count++;
        if (count == jumKel * point - 1) {
          for (let b = 0; b < arrName.length - count; b++) {
            arrOrg.push(arrName[count + b]);
          }
        }
        arrOrg.push(arrName[count]);
      }
      arrOrg = [...new Set(arrOrg)];
    arrKos.push(arrOrg);
    arrOrg = [];
  }

  // mengambil 2 index terakhir dari array arrKos
  // let arrTest = [];
  // for (let i = 0; i < arrKos.length; i++) {
  //   if (i < arrKos.length - 2) {
  //     arrTest.push(arrKos[i]);
  //   };
  // };

  // // membuat nilai 2 index terakhir hampir sama rata
  // if (arrKos[arrKos.length - 2].length - arrKos[arrKos.length - 1].length > 1) {
  //   let arrGabung = [
  //     ...arrKos[arrKos.length - 2],
  //     ...arrKos[arrKos.length - 1],
  //   ];
  //   let bagi = Math.ceil(arrGabung.length / 2);
  //   arrTest.push(arrGabung.slice(0, bagi));
  //   arrTest.push(arrGabung.slice(bagi, arrGabung.length));
  // }

  // // mengambalikan nilai sesuai kondisi input
  // if (jumKel - 2 <= 2) {
  //   return arrKos;
  // } else {
  //   return arrTest;
  // }
  return arrKos;
};

const content = document.getElementsByClassName("content")[0];
const nKel = document.getElementById("nKel");
const btn = document.getElementById("btn");


btn.addEventListener("click",() => {
    const arrGroup = createGroup(nKel.value);
    
    arrGroup.forEach((e, i) => {
      let ol = document.createElement("ol");
      content.appendChild(ol);
      e.forEach((el, index) => {
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerHTML = el;
      });
    });
}); 

nKel.addEventListener("click", () => {
  content.innerHTML = "";
});
