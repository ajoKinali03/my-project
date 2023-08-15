const mongoose = require("mongoose");

const myScehma = new mongoose.Schema({
  id: String,
  teks: Array,
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
    jenis_penomoran: String,
    sentence_case: String,
  },
});

const mentahanDataDb = mongoose.model("mentahandata", myScehma);

module.exports = mentahanDataDb;
