const cekTab = (value) => {
  let bool = false;
  let jum = 0;
  if (value.ktgr.tanda_tab) {
    bool = true;
    jum = value.ktgr.jumlah_tab;
  } else {
    return false;
  }
  return { exist: bool, jum: jum };
};

// disini ada BUG: tab tidak bisa mendeteksi mana yang harus di beritab atau tidak
const createTab = (data) => {
  let tingkatan = 0;
  let tab = "";
  data = data.map((e, i) => {
    if (e.teks.join("").length != 1 && e.ktgr.tanda_enter) {
      if (!e.ktgr.tanda_tab && !e.ktgr.jumlah_huruf < 1) {
        if (e.ktgr.cek_penomoran) {
          tingkatan = e.ktgr.tingkat_penomoran - 1;
          if (tingkatan != e.ktgr.tingkat_penomoran) {
            tab = "";
          }
          e.ktgr.tanda_tab = true;
          e.ktgr.jumlah_tab = tingkatan;
          for (let i = 0; i < tingkatan; i++) {
            tab += "\t-";
            e.teks.unshift("\t");
          }
        }
        if (!e.ktgr.cek_penomoran) {
          if (
            tab != null &&
            e.ktgr.sentence_case != "uppercase" &&
            e.teks.join("").length >= 100
          ) {
            tab += "\t";
            e.ktgr.tanda_tab = true;
            e.ktgr.jumlah_tab = tingkatan;
            e.teks.unshift(...tab.split("-"));
          }
        }
      } else {
        return null;
      }
    }
    return e;
  });
  return data;
};

module.exports = { cekTab, createTab };
