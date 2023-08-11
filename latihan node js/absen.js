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
      nim: parseInt("412200" + (i + 1)),
      ip: 3 + i,
    });
  } else {
    return JSON.stringify({
      fakultas: "FUAD",
      jurusan: "Ilmu Al-Qura'an dan Tafsir",
      kelas: "IAT A",
      nama: e,
      nim: parseInt("41220" + (i + 1)),
      ip: 3 + i,
    });
  }
});