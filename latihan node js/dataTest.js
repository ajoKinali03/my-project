const dataStr = `Piyungan	Gunawan	97 orang	Dewasa	Kesehatan	 Rp40.000.00 	 960000	 Rp4.840.000.00 	10 orang
Banguntapan	Imam Nawawi	85 orang	Dewasa	Kesehatan	 Rp40.000.00 	 960000	 Rp4.360.000.00 	12 orang
Banguntapan	Imam Nawawi	119 orang	Dewasa	Makanan	 Rp42.000.00 	 960000	 Rp5.958.000.00 	12 orang
Banguntapan	Imam Nawawi	152 orang	Lansia	Makanan	 Rp42.000.00 	 1440000	 Rp7.824.000.00 	15 orang
Banguntapan	Imam Nawawi	117 orang	Anak-anak	Mainan	 Rp20.000.00 	 960000	 Rp3.300.000.00 	18 orang
Banguntapan	Imam Nawawi	102 orang	Dewasa	Pakaian	 Rp115.000.00 	 960000	 Rp12.690.000.00 	20 orang
Piyungan	Gunawan	84 orang	Lansia	Pakaian	 Rp115.000.00 	 960000	 Rp10.620.000.00 	10 orang
Depok	Yudi Ashari	55 orang	Dewasa	Pakaian	 Rp115.000.00 	 0	 Rp6.325.000.00 	8 orang
Banguntapan	Imam Nawawi	126 orang	Anak-anak	Mainan	 Rp20.000.00 	 960000	 Rp3.480.000.00 	14 orang
Depok	Yudi Ashari	80 orang	Lansia	Pakaian	 Rp115.000.00 	 0	 Rp9.200.000.00 	10 orang
Depok	Yudi Ashari	56 orang	Lansia	Kesehatan	 Rp40.000.00 	 0	 Rp2.240.000.00 	15 orang
Banguntapan	Imam Nawawi	97 orang	Dewasa	Pakaian	 Rp115.000.00 	 960000	 Rp12.115.000.00 	9 orang`;

const ketStr = `LOKASI POSKO	PENANGGUNG JAWAB	JUMLAH PENGUNGSI	KATEGORI PENGUNGSI	JENIS BANTUAN	BANTUAN PERORANG	BANTUAN TENDA	JUMLAH BANTUAN	JUMLAH RELAWAN
`;

const arrData = dataStr.split("\n").map((e) => e.split("\t"));
const arrKet = ketStr.replace("\n", "").toLowerCase().split("\t");
let arrKos = [];

arrData.forEach((e) => {
  let dummyArr = [];
  e.forEach((a, i) => {
    a = a.replace(" orang", "").replace(" Rp", "").replace(".00 ", "");
    arrKet.forEach((c, d) => {
      c = c.replace(
        " " + c.charAt(c.indexOf(" ") + 1),
        c.charAt(c.indexOf(" ") + 1).toLocaleUpperCase()
      );
      if (i == d) {
        /\d/.test(a)
          ? dummyArr.push(`"${c}": "${a}"`)
          : dummyArr.push(`"${c}": "${a}"`);
        // dummyArr.push(`"${c}": "${a}"`);
      }
    });
  });
  arrKos.push(dummyArr);
});

const strArr = arrKos
  .map((e) => `{${e}}`)
  .map((e) => JSON.parse(e))
  .map((e) => {
    return {
      lokasiPosko: e.lokasiPosko,
      penanggungJawab: e.penanggungJawab,
      jumlahPengungsi: parseFloat(e.jumlahPengungsi),
      kategoriPengungsi: e.kategoriPengungsi,
      jenisBantuan: e.jenisBantuan,
      bantuanPerorang: parseFloat(e.bantuanPerorang),
      bantuanTenda: parseFloat(e.bantuanTenda),
      jumlahBantuan: parseFloat(e.jumlahBantuan),
      jumlahRelawan: parseFloat(e.jumlahRelawan),
    };
  });

module.exports = strArr;
