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

const createTab = (data) => {
  let tingkatan = 0;
  let tab = "";
  data = data.map((e, i) => {
    if (!e.ktgr.tanda_tab) {
      if (e.ktgr.cek_penomoran) {
        tingkatan = e.ktgr.tingkat_penomoran - 1;
        if (e.ktgr.tingkat_penomoran != 0) {
          if (tingkatan != e.ktgr.tingkat_penomoran) {
            tab = "";
          }
          for (let i = 0; i < tingkatan; i++) {
            tab += "\t-";
            e.teks.unshift("\t");
          }
        }
      } else {
        if (tingkatan > 0 && tab != null) {
          e.teks.unshift(...tab.split("-"));
        }
      }
    } else {
      return null;
    }
    return e;
  });
  return data;
};

module.exports = { cekTab, createTab };
