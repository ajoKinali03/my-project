const mongoose = require("mongoose");
//untuk data dgn key jumlah akan digunakan ketika memformat panjang paragraf
const myScehma = new mongoose.Schema({
  id: String,
  teks: Array,
  grup_id: String,
  ktgr: {
    jumlah_huruf: Number,
    bahasa: Object,
    tanda_enter: Boolean,
    tanda_spasi: Boolean,
    jumlah_spasi: Number,
    tanda_tab: Boolean,
    jumlah_tab: Number,
    jumlah_titik: Number,
    jumlah_koma: Number,
    cek_penomoran: Boolean,
    tingkat_penomoran: Number,
    jenis_penomoran: String,
    sentence_case: String,
  },
});

const mentahanDataDb = mongoose.model("mentahandata", myScehma);

module.exports = mentahanDataDb;
