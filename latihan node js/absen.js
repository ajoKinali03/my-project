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
    gender: "L",
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
    nama: "unknownChar",
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
    gender: "L",
    nim: 4122030,
    ip: 32,
  },
];

let arrMatkulKel = [
  {
    matkul: "Pengantar Linguistik dan filologi",
    crt: "dosen",
    kel: [
      { kelompok1: "aul qari hetri" },
      { kelompok2: "fatimah dila" },
      { kelompok3: "kina delvi" },
      { kelompok4: "tia arum" },
      { kelompok5: "ilma difki" },
      { kelompok6: "lia alfian" },
      { kelompok7: "rahma randi" },
      { kelompok8: "yona hamid" },
      { kelompok9: "fahmil yuka" },
      { kelompok10: "mila faldi" },
      { kelompok11: "dia farhan" },
      { kelompok12: "ratna bani" },
    ],
  },
  {
    matkul: "Studi Kitab Tafsir Era Pertengahan",
    crt: "dosen",
    kel: [
      { kelompok1: "qari yona delvi fahmil" },
      { kelompok2: "fatimah yuka arum hamid" },
      { kelompok3: "mila difki kina bani" },
      { kelompok4: "tia fia hetri alfian" },
      { kelompok5: "ilma ratna randi adib" },
      { kelompok6: "aul lia rifaldi rian" },
      { kelompok7: "rahma dila lili farhan" },
    ],
  },
  {
    crt: "kosma",
    matkul: "Tafsir Ayat Aqidah sebelum uts",
    kel: [
      { kelompok1: "alfian hamid kina mila" },
      { kelompok2: "tia lili rahma lia" },
      { kelompok3: "hetri randi yuka ilma" },
      { kelompok4: "faldi bani delvi aul ratna" },
      { kelompok5: "farhan fatimah kakYona qari" },
      { kelompok6: "fahmil difki dila fia arum" },
    ],
  },
  {
    crt: "kosma",
    matkul: "Tafsir Ayat Aqidah setelah uts",
    kel: [
      { kelompok1: "ratna randi yuka ilma" },
      { kelompok2: "kakYona fia mila kina" },
      { kelompok3: "bani alfian hetri" },
      { kelompok4: "hamid farhan fatimah" },
      { kelompok5: "arum rahma lia tia" },
      { kelompok6: "faldi delvi dila aul" },
      { kelompok7: "fahmil difki lili qari" },
    ],
  },
];








let strKel = `kelompok1
kelompok2
kelompok3
kelompok4
kelompok5
kelompok6
kelompok7
kelompok8
kelompok9
kelompok10
kelompok11
kelompok12
kelompok13`;

let namaNya = "hetri";
strKel.split("\n").forEach((e, i) => {
  cekKel(e, namaNya);
});

function cekKel(kel, nama) {
  let shwKel = "kelompok5";
  arrMatkulKel.forEach((e, i) => {
    e.kel.forEach((a, idx) => {
      if (Object.keys(a)[0] == kel) {
        if (Object.keys(a)[0] == shwKel) {
          console.log(`=====================`);
          console.log(`${e.matkul}`);
          console.log(`${Object.keys(a)[0]}: ${a[shwKel]}`);
          console.log(`=====================`);
        } else {
          if (Object.values(a)[0].includes(nama) && shwKel == "") {
            console.log(
              `${kel}: nama = ${nama}, matkul = ${e.matkul}, dibuat = ${
                e.crt
              }, nama kelompok = ${Object.values(a)[0]}\n`
            );
          }
        }
      }
    });
  });
}

// cekKel("kelompok4", 'hetri')
// let oko = null;
// cekKel("kelompok2", namaNya);

// console.log(oko)
