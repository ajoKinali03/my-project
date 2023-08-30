const arrName = [
  "Hetri Saputra",
  "Fahmil Nizar Zulmi Tanjung",
  "Hidayatul Ilma",
  "Silfia Nuraziah",
  "Ratna Ningsih",
  "Nurfauqanur Afri",
  "unknownChar",
  "unknownChar",
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
  "unknownChar",
  "Aprillia Wulandari",
  "Muhammad Randi",
];

const arrAbsen = arrName.map((e, i) => {
  if (i.toString().length == 1) {
    return JSON.stringify({
      fakultas: "FUAD",
      jurusan: "Ilmu Al-Qura'an dan Tafsir",
      kelas: "IAT A",
      nama: e,
      gender: null,
      nim: parseInt("412200" + (i + 1)),
      ip: 3 + i,
    });
  } else {
    return JSON.stringify({
      fakultas: "FUAD",
      jurusan: "Ilmu Al-Qura'an dan Tafsir",
      kelas: "IAT A",
      nama: e,
      gender: null,
      nim: parseInt("41220" + (i + 1)),
      ip: 3 + i,
    });
  }
});

// console.log(JSON.parse(arrAbsen));
let arrObjAbsn = [
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Hetri Saputra",
    gender: "L",
    nim: 4122001,
    ip: 3,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Fahmil Nizar Zulmi Tanjung",
    gender: "L",
    nim: 4122002,
    ip: 4,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Hidayatul Ilma",
    gender: "P",
    nim: 4122003,
    ip: 5,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Silfia Nuraziah",
    gender: "P",
    nim: 4122004,
    ip: 6,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Ratna Ningsih",
    gender: "P",
    nim: 4122005,
    ip: 7,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Nurfauqanur Afri",
    gender: "P",
    nim: 4122006,
    ip: 8,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "unknownChar",
    gender: null,
    nim: 4122007,
    ip: 9,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "unknownChar",
    gender: null,
    nim: 4122008,
    ip: 10,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Lili Puspa",
    gender: "P",
    nim: 4122009,
    ip: 11,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Difki Maidika",
    gender: "P",
    nim: 41220010,
    ip: 12,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Rifaldi Chandra",
    gender: "L",
    nim: 4122011,
    ip: 13,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Fatimah Azzahra",
    gender: "P",
    nim: 4122012,
    ip: 14,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Arum Handayani",
    gender: "P",
    nim: 4122013,
    ip: 15,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Nur Sakinah",
    gender: "P",
    nim: 4122014,
    ip: 16,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Tia Putriana",
    gender: "P",
    nim: 4122015,
    ip: 17,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Alfian Chandra",
    gender: "P",
    nim: 4122016,
    ip: 18,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Jumiran Sahbani",
    gender: "L",
    nim: 4122017,
    ip: 19,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Mila Anggraini",
    gender: "P",
    nim: 4122018,
    ip: 20,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Azwar Hamid",
    gender: "L",
    nim: 4122019,
    ip: 21,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Rahma Yani",
    gender: "P",
    nim: 4122020,
    ip: 22,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "HIdayatul Fadilla",
    gender: "P",
    nim: 4122021,
    ip: 23,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Qoriatun Nabila",
    gender: "P",
    nim: 4122022,
    ip: 24,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Muhammad Farhan",
    gender: "L",
    nim: 4122023,
    ip: 25,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Delvi Wulandari",
    gender: "P",
    nim: 4122024,
    ip: 26,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Lia Estianti",
    gender: "P",
    nim: 4122025,
    ip: 27,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Aulia Rahmanah Putri",
    gender: "P",
    nim: 4122026,
    ip: 28,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Rizki Ananda Harahap",
    gender: "L",
    nim: 4122027,
    ip: 29,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "unknownChar",
    gender: null,
    nim: 4122028,
    ip: 30,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "unknownChar",
    gender: null,
    nim: 4122029,
    ip: 31,
  },
  {
    fakultas: "FUAD",
    jurusan: "Ilmu Al-Qura'an dan Tafsir",
    kelas: "IAT A",
    nama: "Muhammad Randi",
    gender: "P",
    nim: 4122030,
    ip: 32,
  },
];

let arrIndex = [];
    for (let i = 0; i < 500; i++) {
      const nRandom = Math.floor(Math.random() * 9 + 0);
      arrIndex.push(nRandom);
    }
    arrIndex = [...new Set(arrIndex)];
    
 let kelOk = arrObjAbsn.map((e, i) => {
     let ok = null;
   if(e.gender == "L"){
     ok = e.nama + "\n"
   }
   return ok;
   }).join("-").replaceAll("null", "").replaceAll("-", "").split("\n");
   
   let hslOk = arrIndex.map((e, i) => {
     let hsl = null;
     kelOk.forEach((a, idx) => {
       if (e == idx) {
         hsl = a;
       }
     })
     return hsl
   })
   console.log(hslOk)
