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
    gender: "L",
    nim: 4122030,
    ip: 32,
  },
];

let arrMatkulKel = [
  {
    matkul: "studi kitab tafsir era klasik sebelum uts",
    crt: "dosen",
    kel: [
      { kelompok1: "lia yuka dila farhan" },
      { kelompok2: "ratna rahma mila fahmil" },
      { kelompok3: "ilma lili arum alvian" },
      { kelompok4: "fatimah difki qari hamid" },
      { kelompok5: "fia kina randi delvi bani" },
      { kelompok6: "tia aul faldi rizki hetri" },
    ],
  },
  {
    matkul: "studi kitab tafsir era klasik setelah uts",
    crt: "kosma",
    kel: [
      { kelompok1: "ilma lili arum alvian" },
      { kelompok2: "fatimah difki qari hamid" },
      { kelompok3: "tia aul faldi rizki hetri" },
      { kelompok4: "ratna rahma mila fahmil" },
      { kelompok5: "fia kina randi delvi bani" },
      { kelompok6: "lia yuka dila farhan" },
    ],
  },
  {
    matkul: "fiqih ibadah",
    crt: "dosen",
    kel: [
      { kelompok1: "kating dila kating" },
      { kelompok2: "kina aul bani" },
      { kelompok3: "ratna fia hetri" },
      { kelompok4: "rahma fatimah" },
      { kelompok5: "difki lili" },
      { kelompok6: "arum hamid" },
      { kelompok7: "qari randi" },
      { kelompok8: "ilma farhan" },
      { kelompok9: "delvi faldi" },
      { kelompok10: "tia alvian" },
      { kelompok11: "rizki fahmil lia" },
      { kelompok12: "yuka mila" },
    ],
  },
  {
    matkul: "takwil al-quran",
    crt: "dosen",
    kel: [
      { kelompok1: "randi fatimah" },
      { kelompok2: "hamid ilma" },
      { kelompok3: "bani lili" },
      { kelompok4: "hetri difki" },
      { kelompok5: "fahmil arum" },
      { kelompok6: "farhan mila" },
      { kelompok7: "faldi yuka" },
      { kelompok8: "alvian ratna" },
      { kelompok9: "dila qari" },
      { kelompok10: "delvi rahma" },
      { kelompok11: "aul kina" },
      { kelompok12: "fia lia" },
      { kelompok13: "tia rizki" },
    ],
  },
  {
    matkul: "hadist tematik",
    crt: "dosen",
    kel: [
      { kelompok1: "randi rizki fahmil faldi alvian" },
      { kelompok2: "difki fia arum lia qari" },
      { kelompok3: "farhan hamid hetri bani" },
      { kelompok4: "delvi ilma lili fatimah" },
      { kelompok5: "mila rahma ratna tia" },
      { kelompok6: "yuka kina dila aul" },
    ],
  },
  {
    matkul: "kritik hadist sebelum uts",
    crt: "kosma",
    kel: [
      { kelompok1: "tia fia rahma ilma lili" },
      { kelompok2: "qari kina arum miftahul hetri" },
      { kelompok3: "fatimah aul difki rafi" },
      { kelompok4: "faldi lia mila fahmil" },
      { kelompok5: "delvi yuka dila alvian hamid" },
      { kelompok6: "bani farhan rizki randi ratna" },
    ],
  },
  {
    matkul: "kritik hadist setelah uts",
    crt: "kosma",
    kel: [
      { kelompok1: "hamid delvi bani ratna" },
      { kelompok2: "arum tia mila lili" },
      { kelompok3: "fahmil rafi alvian miftahul" },
      { kelompok4: "kina faldi dila fia" },
      { kelompok5: "yuka rizki lia fatimah" },
      { kelompok6: "rahma difki farhan randi" },
      { kelompok7: "hetri ilma aul qari" },
    ],
  },
  {
    matkul: "problema hadist kontent porer",
    crt: "kosma",
    kel: [
      { kelompok1: "arum mila" },
      { kelompok2: "yuka fatimah" },
      { kelompok3: "rizki faldi" },
      { kelompok4: "rahma lili" },
      { kelompok5: "hamid bani" },
      { kelompok6: "tia fia ilma" },
      { kelompok7: "ratna lia" },
      { kelompok8: "kina dila" },
      { kelompok9: "alvian farhan" },
      { kelompok10: "qari delvi" },
      { kelompok11: "difki aul" },
      { kelompok12: "fahmil hetri randi" },
    ],
  },
  {
    matkul: "ushul al tafsir wa qawaiduhu",
    crt: "kosma",
    kel: [
      { kelompok1: "rizki difki" },
      { kelompok2: "fia randi" },
      { kelompok3: "tia delvi" },
      { kelompok4: "yuka alvian" },
      { kelompok5: "farhan fahmil" },
      { kelompok6: "lia dila" },
      { kelompok7: "kina fatimah" },
      { kelompok8: "aul hetri" },
      { kelompok9: "rahma farhan" },
      { kelompok10: "faldi arum" },
      { kelompok11: "qari ilma" },
      { kelompok12: "hamid bani" },
      { kelompok13: "mila ratna" },
    ],
  },
  {
    matkul: "filsafat ilmu",
    crt: "kosma",
    kel: [
      { kelompok1: "kina Ratna" },
      { kelompok2: "farhan faldi" },
      { kelompok3: "mila yuka" },
      { kelompok4: "aul dila" },
      { kelompok5: "fia tia ilma" },
      { kelompok6: "fatimah lili" },
      { kelompok7: "delvi alvian" },
      { kelompok8: "bani fahmil" },
      { kelompok9: "hamid randi" },
      { kelompok10: "rizki hetri kating" },
      { kelompok11: "rahma qari lia" },
      { kelompok12: "arum difki" },
    ],
  },
  {
    matkul: "tafsir ayat ibadah",
    crt: "kosma",
    kel: [
      { kelompok1: "hetri alvian" },
      { kelompok2: "aul dila" },
      { kelompok3: "hamid randi" },
      { kelompok4: "ratna kina" },
      { kelompok5: "arum difki" },
      { kelompok6: "lili qari" },
      { kelompok7: "delvi faldi" },
      { kelompok8: "mila yuka" },
      { kelompok9: "lia rahma" },
      { kelompok10: "fahmil bani" },
      { kelompok11: "fia fatimah" },
      { kelompok12: "rizki farhan" },
      { kelompok13: "tia ilma" },
    ],
  },
  {
    matkul: "tema tema pokok Al-Qur'an",
    crt: "kosma",
    kel: [
      { kelompok1: "hamid farhan faldi" },
      { kelompok2: "tia fia" },
      { kelompok3: "rahma lia" },
      { kelompok4: "ilma qari" },
      { kelompok5: "lili fatimah" },
      { kelompok6: "bani hetri" },
      { kelompok7: "kina ratna" },
      { kelompok8: "randi rizki fahmil" },
      { kelompok9: "arum difki" },
      { kelompok10: "aul dila" },
      { kelompok11: "delvi alvian" },
      { kelompok12: "yuka mila" },
    ],
  },
  {
    matkul: "Tafsir tematik setelah uts",
    crt: "kosma",
    kel: [
      { kelompok1: "Hamid lili delvi ratna qari" },
      { kelompok2: "bani fatimah arum farhan faldi" },
      { kelompok3: "hetri fia difki rizki bg_juanda" },
      { kelompok4: "alvian tia ilma bg_rizki" },
      { kelompok5: "fahmil aulia lia yuka rahma" },
      { kelompok6: "randi mila dila kina bg_habib" },
    ],
  },
];

function cekKel(kel, nama) {
  arrMatkulKel.forEach((e, i) => {
    e.kel.forEach((a, idx) => {
      if (Object.keys(a)[0] == kel) {
        if (Object.values(a)[0].includes(nama)) {
          console.log(
            `${kel}: nama = ${nama}, matkul = ${e.matkul}, dibuat = ${
              e.crt
            }, nama kelompok = ${Object.values(a)[0]}\n`
          );
        }
      }
    });
  });
}

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

// cekKel("kelompok4", 'hetri')
let namaNya = "tia";
// let oko = null;
// cekKel("kelompok2", namaNya);
strKel.split("\n").forEach((e, i) => {
  cekKel(e, namaNya);
});

// console.log(oko)
