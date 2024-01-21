// // membuat fungsi untuk menjadikan isi dari arrName menjadi random
// const funcRandom = () => {
//   const arrName = [
//     "Hetri Saputra",
//     "Fahmil Nizar Zulmi Tanjung",
//     "Hidayatul Ilma",
//     "Silfia Nuraziah",
//     "Ratna Ningsih",
//     "Nurfauqanur Afri",
//     "Lili Puspa",
//     "Difki Maidika",
//     "Rifaldi Chandra",
//     "Fatimah Azzahra",
//     "Arum Handayani",
//     "Nur Sakinah",
//     "Tia Putriana",
//     "Alfian Chandra",
//     "Jumiran Sahbani",
//     "Mila Anggraini",
//     "Azwar Hamid",
//     "Rahma Yani",
//     "HIdayatul Fadilla",
//     "Qoriatun Nabila",
//     "Muhammad Farhan",
//     "Delvi Wulandari",
//     "Lia Estianti",
//     "Aulia Rahmanah Putri",
//     "Rizki Ananda Harahap",
//     "Muhammad Randi",
//   ];

//   let arrIndex = [];
//   for (let i = 0; i < 500; i++) {
//     const nRandom = Math.floor(Math.random() * 26 + 0);
//     arrIndex.push(nRandom);
//   }
//   const arrFinalIndex = [...new Set(arrIndex)];
//   let dummyArr = [];
//   arrName.forEach((e, i) => {
//     arrFinalIndex.forEach((eNum, iNum) => {
//       if (i == iNum) {
//         dummyArr.push(arrName[eNum]);
//       }
//     });
//   });
//   return dummyArr;
//   // return arrName;
// };


// const createGroup = (jumKel) => {
//   const arrName = funcRandom();
//   let arrKos = [];
//   let point = arrName.length / jumKel;
//   point = Math.floor(point);
//   let count = -1;
  
//   // ganti logika
//   //========================================
//   // membagi nama sesuai kelompok
//   // const newArr = arrName.map(function (el, i) {
//   //   count++;
//   //   if (count == 1) {
//     //     if (arrName.length - 1 == i) {
//       //       return `[ "${el}" ]`;
//       //     }
//       //     return `[ "${el}" `;
//       //   }
//   //   if (count == point || arrName.length - 1 == i) {
//     //     count *= 0;
//     //     return `"${el}"]`;
//     //   }
//     //   return `"${el}"`;
//     // });
//     // // menjalankan kode array yang awal nya string
//     // arrKos = eval(`[${newArr.join()}]`);
//     // ==========================================
    
//     // di ganti dengan ini
//     let arrOrg = [];
//     for (let i = 1; i <= jumKel; i++) {
//       for (let a = 1; a <= point; a++) {
//         count++;
//         if (count == jumKel * point - 1) {
//           for (let b = 0; b < arrName.length - count; b++) {
//             arrOrg.push(arrName[count + b]);
//           }
//         }
//         arrOrg.push(arrName[count]);
//       }
//       arrOrg = [...new Set(arrOrg)];
//     arrKos.push(arrOrg);
//     arrOrg = [];
//   }

//   // mengambil 2 index terakhir dari array arrKos
//   // let arrTest = [];
//   // for (let i = 0; i < arrKos.length; i++) {
//   //   if (i < arrKos.length - 2) {
//   //     arrTest.push(arrKos[i]);
//   //   };
//   // };

//   // // membuat nilai 2 index terakhir hampir sama rata
//   // if (arrKos[arrKos.length - 2].length - arrKos[arrKos.length - 1].length > 1) {
//   //   let arrGabung = [
//   //     ...arrKos[arrKos.length - 2],
//   //     ...arrKos[arrKos.length - 1],
//   //   ];
//   //   let bagi = Math.ceil(arrGabung.length / 2);
//   //   arrTest.push(arrGabung.slice(0, bagi));
//   //   arrTest.push(arrGabung.slice(bagi, arrGabung.length));
//   // }

//   // // mengambalikan nilai sesuai kondisi input
//   // if (jumKel - 2 <= 2) {
//   //   return arrKos;
//   // } else {
//   //   return arrTest;
//   // }
//   return arrKos;
// };

// const content = document.getElementsByClassName("content")[0];
// const nKel = document.getElementById("nKel");
// const btn = document.getElementById("btn");


// btn.addEventListener("click",() => {
//     const arrGroup = createGroup(nKel.value);
    
//     arrGroup.forEach((e, i) => {
//       let ol = document.createElement("ol");
//       content.appendChild(ol);
//       e.forEach((el, index) => {
//         let li = document.createElement("li");
//         ol.appendChild(li);
//         li.innerHTML = el;
//       });
//     });
// }); 

// nKel.addEventListener("click", () => {
//   content.innerHTML = "";
// });


// let arrMatkulKel = [
//   {
//     matkul: "studi kitab tafsir era klasik",
//     crt: "dosen",
//     kel: [
//       { kelompok1: "lia yuka dila farhan" },
//       { kelompok2: "ratna rahma mila fahmil" },
//       { kelompok3: "ilma lili arum alvian" },
//       { kelompok4: "fatimah difki qari hamid" },
//       { kelompok5: "fia kina randi delvi bani" },
//       { kelompok6: "tia aul faldi rizki hetri" },
//     ],
//   },
//   {
//     matkul: "fiqih ibadah",
//     crt: "dosen",
//     kel: [
//       { kelompok1: "kating dila kating" },
//       { kelompok2: "kina aul bani" },
//       { kelompok3: "ratna fia hetri" },
//       { kelompok4: "rahma fatimah" },
//       { kelompok5: "difki lili" },
//       { kelompok6: "arum hamid" },
//       { kelompok7: "qari randi" },
//       { kelompok8: "ilma farhan" },
//       { kelompok9: "delvi faldi" },
//       { kelompok10: "tia alvian" },
//       { kelompok11: "rizki fahmil lia" },
//       { kelompok12: "yuka mila" },
//     ],
//   },
//   {
//     matkul: "takwil al-quran",
//     crt: "dosen",
//     kel: [
//       { kelompok1: "randi fatimah" },
//       { kelompok2: "hamid ilma" },
//       { kelompok3: "bani lili" },
//       { kelompok4: "hetri difki" },
//       { kelompok5: "fahmil arum" },
//       { kelompok6: "farhan mila" },
//       { kelompok7: "faldi yuka" },
//       { kelompok8: "alvian ratna" },
//       { kelompok9: "dila qari" },
//       { kelompok10: "delvi rahma" },
//       { kelompok11: "aul kina" },
//       { kelompok12: "fia lia" },
//       { kelompok13: "tia rizki" },
//     ],
//   },
//   {
//     matkul: "hadist tematik",
//     crt: "dosen",
//     kel: [
//       { kelompok1: "randi rizki fahmil faldi" },
//       { kelompok2: "difki fia arum lia qari" },
//       { kelompok3: "farhan hamid hetri bani" },
//       { kelompok4: "delvi ilma lili fatimah" },
//       { kelompok5: "mila rahma ratna tia" },
//       { kelompok6: "yuka kina dila aul" },
//     ],
//   },
//   {
//     matkul: "kritik hadist sebelum uts",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "tia fia mila ilma" },
//       { kelompok2: "delivi yuka dila alvian" },
//       { kelompok3: "fatimah ratna difki lili rafi" },
//       { kelompok4: "qari kina arum miftahul hetri" },
//       { kelompok5: "bani farhan rizki randi aul" },
//       { kelompok6: "faldi fahmil hamid lia rahma" },
//     ],
//   },
//   {
//     matkul: "kritik hadist setelah uts",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "hamid delvi arum ratna" },
//       { kelompok2: "kina faldi difki fia" },
//       { kelompok3: "hetri ilma tia qari" },
//       { kelompok4: "bani aul mila fatimah" },
//       { kelompok5: "fahmil randi alvian miftahul" },
//       { kelompok6: "rahma dila farhan rafi" },
//       { kelompok7: "yuka rizki lia lili" },
//     ],
//   },
//   {
//     matkul: "problema hadist kontent porer",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "arum mila" },
//       { kelompok2: "yuka fatimah" },
//       { kelompok3: "randi hamid" },
//       { kelompok4: "rahma lili" },
//       { kelompok5: "faldi bani" },
//       { kelompok6: "tia fia ilma" },
//       { kelompok7: "qari delvi" },
//       { kelompok8: "ratna lia" },
//       { kelompok9: "alvian farhan" },
//       { kelompok10: "kina dila" },
//       { kelompok11: "difki aul" },
//       { kelompok12: "fahmil hetri rizki" },
//     ],
//   },
//   {
//     matkul: "ushul al tafsir wa qawaiduhu",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "rizki difki" },
//       { kelompok2: "aul ratna" },
//       { kelompok3: "fia alvian" },
//       { kelompok4: "tia randi" },
//       { kelompok5: "lili lia" },
//       { kelompok6: "fahmil dila" },
//       { kelompok7: "qari ilma" },
//       { kelompok8: "yuka hetri" },
//       { kelompok9: "rahma farhan" },
//       { kelompok10: "faldi arum" },
//       { kelompok11: "kina fatimah" },
//       { kelompok12: "hamid bani" },
//       { kelompok13: "mila delvi" },
//     ],
//   },
//   {
//     matkul: "filsafat ilmu",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "kina Ratna" },
//       { kelompok2: "farhan faldi" },
//       { kelompok3: "rizki hetri" },
//       { kelompok4: "arum difki" },
//       { kelompok5: "fia tia ilma" },
//       { kelompok6: "fatimah lili" },
//       { kelompok7: "delvi alvian" },
//       { kelompok8: "rahma qari lia" },
//       { kelompok9: "hamid randi" },
//       { kelompok10: "mila yuka" },
//       { kelompok11: "bani fahmil" },
//       { kelompok12: "aul dila" },
//     ],
//   },
//   {
//     matkul: "tafsir ayat ibadah",
//     crt: "kosma",
//     kel: [
//       { kelompok1: "hetri alvian" },
//       { kelompok2: "tia ilma" },
//       { kelompok3: "hamid randi" },
//       { kelompok4: "ratna kina" },
//       { kelompok5: "arum difki" },
//       { kelompok6: "lili qari" },
//       { kelompok7: "delvi faldi" },
//       { kelompok8: "mila yuka" },
//       { kelompok9: "lia rahma" },
//       { kelompok10: "fahmil bani" },
//       { kelompok11: "rizki farhan" },
//       { kelompok12: "fia fatimah" },
//       { kelompok13: "aul dila" },
//     ],
//   },
// ];

