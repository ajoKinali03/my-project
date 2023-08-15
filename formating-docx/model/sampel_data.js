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
  formatStyle: {
    fontFormat:{
      fontStyle: String,
      fontSize: Number,
      sentanceCase: String,
      textDecoration: String,
      textColor: String,
      textEffect: String,
    },
    paragrafFormat: {
      alignment: String,
      numbering: String,
      spacing: Number,
      indentasi: Number,
      textDirections: String
    },
    insertFormat: {
      footer: Object,
      header: Object,
      numberPage: Number
    },
    pageLayout: {
      margin: Array,
      pageSize: Array
    }
  },
  formatCode: Object
});

const sampelDataDb = mongoose.model("sampeldata", myScehma);

module.exports = sampelDataDb;
