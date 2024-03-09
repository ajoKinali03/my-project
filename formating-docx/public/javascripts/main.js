const inpt = document.getElementById("form-input");
const formPost = document.getElementById("form-post");
const inputPost = document.getElementById("input-post");
const btnShwRef = document.getElementById("btn-showref");
const cntrCntn = document.getElementsByClassName("container-home")[0];
const cntrShwRefHome = document.getElementsByClassName("show-ref-home")[0];
const btnPostText = document.getElementById("btn-post");

// mencari data dari cookie
function searchCookie(key) {
  let arrData = document.cookie.split(";");
  for (let value of arrData) {
    if (value.split("=")[0].replace(" ", "") == key) {
      let key = value.split("=")[0].replace(" ", "");
      let isi = value.split("=")[1];
      return { key: key, value: isi };
    }
  }
}



function openDatabase() {
  return new Promise((resolve, reject) => {
    const dbName = 'myDatabase';
    const request = indexedDB.open(dbName, 1);

    request.onerror = function(event) {
      reject(event.target.error);
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      // Membuat object store (tabel) dengan nama 'myStore'
      const store = db.createObjectStore('myStore', { keyPath: 'id' });
      // Menambahkan indeks untuk pencarian
      store.createIndex('txt', 'txt', { unique: false });
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      resolve(db);
    };
  });
}

function saveData(txt) {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction(['myStore'], 'readwrite');
        const store = transaction.objectStore('myStore');

        const data = { id: 1, txt: txt };
        const request = store.put(data);

        request.onsuccess = function(event) {
          console.log('Data saved successfully');
          resolve();
        };

        request.onerror = function(event) {
          reject(event.target.error);
        };
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteData() {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction(['myStore'], 'readwrite');
        const store = transaction.objectStore('myStore');

        const request = store.delete(1);

        request.onsuccess = function(event) {
          console.log('Data deleted successfully');
          resolve();
        };

        request.onerror = function(event) {
          reject(event.target.error);
        };
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function displayData() {
  openDatabase()
    .then((db) => {
      const transaction = db.transaction(['myStore'], 'readonly');
      const store = transaction.objectStore('myStore');

      const getRequest = store.get(1);

      getRequest.onsuccess = function(event) {
        const data = event.target.result;
        if (data) {
          inpt.value = decodeURIComponent(data.txt)
        } else {
          console.log('Data tidak ditemukan atau kosong.');
        }
      };

      getRequest.onerror = function(event) {
        console.error('Error retrieving data:', event.target.error);
      };
    })
    .catch((error) => {
      console.error('Error opening database:', error);
    });
}

// Contoh penggunaan




document.addEventListener("keypress", () => {
  deleteData()
  saveData(inpt.value)
  .then(() => {
    console.log("Data saved successfully");
    // Di sini, Anda dapat memanggil fungsi lain atau melakukan operasi lain yang diperlukan
    // Misalnya, displayData() untuk menampilkan data setelah penyimpanan
    // deleteData() untuk menghapus data setelah penyimpanan
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });
  // saveData(encodeURIComponent(inpt.value));
});

// pencekan awal apakah ada text yang tersimpan di dalam cookie
if (displayData() != undefined) {
  displayData()
}








// auto set lebar atau responsif dari tampilan home
let lebarCntrCntn = cntrCntn.getBoundingClientRect().width;

if (lebarCntrCntn >= 1000) {
  inpt.style.width = `${parseInt(0.5 * lebarCntrCntn)}px`;
  formPost.style.width = `${parseInt(0.22 * lebarCntrCntn)}px`;
}
if (lebarCntrCntn <= 1039) {
  inpt.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
  formPost.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
}

// searchData("txt").then((data) => {
//   console.log(data)
//   if (data !== undefined && data.value.length !== 0) {
//     inpt.value = decodeURIComponent(data.value);
//   }
// }).catch((error) => {
//   console.error('Gagal mencari data:', error);
// });




// input text
document.addEventListener("keyup", (event) => {
  let text = inpt.value;
  if (event.code == "Enter") {
    if (searchCookie("obj") != undefined) {
      inputPost.value = JSON.stringify({
        teks: text,
        ref: JSON.parse(searchCookie("obj").value),
      });
    } else {
      inputPost.value = JSON.stringify({ teks: text, ref: null });
    }
  }
  if (text == "") {
    deleteData();
  }
});

// fungsi untuk menampilkan
btnShwRef.addEventListener("click", () => {
  let target = searchCookie("obj");
  if (target != undefined) {
    let data = JSON.parse(target.value);

    crtCntrShwRef(data, true);
  } else {
    crtCntrShwRef("Referensi Belum Anda Masukan", false);
  }
});
// btnShwRef.addEventListener("click", () => {
//   // Ganti pencarian cookie dengan pencarian di IndexedDB
//   searchRefData("obj")
//     .then((data) => {
//       if (data !== undefined) {
//         crtCntrShwRef(data, true);
//       } else {
//         crtCntrShwRef("Referensi Belum Anda Masukkan", false);
//       }
//     })
//     .catch((error) => {
//       console.error("Gagal mencari referensi data:", error);
//       crtCntrShwRef("Gagal mencari referensi data", false);
//     });
// });

function crtCntrShwRef(respon, bool) {
  let listItemChild = cntrCntn.children.item(2);
  if (listItemChild.className == "none") {
    let shwRefHome = document.getElementsByClassName("none")[0];
    let attrClass = document.createAttribute("class");
    attrClass.value = "show-ref-home";
    shwRefHome.setAttributeNode(attrClass);

    if (lebarCntrCntn >= 1000) {
      shwRefHome.style.height = "85vh";
    }

    // auto set lebar dari tampilan cntr ref
    if (lebarCntrCntn >= 1000) {
      shwRefHome.style.width = `${parseInt(0.26 * lebarCntrCntn)}px`;
    }
    if (lebarCntrCntn <= 1039) {
      shwRefHome.style.width = `${parseInt(0.99 * lebarCntrCntn)}px`;
    }

    if (bool) {
      shwRefHome.style.textAlign = "";
      shwRefHome.style.color = "";
      shwRefHome.style.fontWeight = "";
      crtShowDtHome(respon, listItemChild);
    } else {
      shwRefHome.style.textAlign = "center";
      shwRefHome.style.color = "red";
      shwRefHome.style.fontWeight = "bolder";
      shwRefHome.innerText = respon;
    }
  } else {
    let shwRefHome = document.getElementsByClassName("show-ref-home")[0];
    let attrClass = document.createAttribute("class");
    attrClass.value = "none";
    shwRefHome.setAttributeNode(attrClass);
    shwRefHome.innerText = "";
  }
}

function crtShowDtHome(data, cntrRefHome) {
  data.forEach((e, i) => {
    let showRefParent = document.createElement("div");
    let refClass = document.createAttribute("class");
    refClass.value = "ref-home";
    showRefParent.setAttributeNode(refClass);
    let keyWordBtn = document.createElement("button");
    let idKeyWordBtn = document.createAttribute("id");
    idKeyWordBtn.value = "keyword-btn";
    keyWordBtn.setAttributeNode(idKeyWordBtn);
    keyWordBtn.style.padding = "0 3px";
    keyWordBtn.style.margin = "5px 0 5px 10px";
    keyWordBtn.innerText = "copy";

    let showdFrag = document.createDocumentFragment();
    for (let key in e) {
      let shwTextP = document.createElement("p");
      if (key == "ID") {
        shwTextP.style.color = "black";
        shwTextP.style.backgroundColor = "white";
        shwTextP.style.textAlign = "center";
        shwTextP.style.fontWeight = "bolder";
        shwTextP.style.borderRadius = "5px";
        shwTextP.innerText = `-(footnote:${e[key]})-`;
        shwTextP.appendChild(keyWordBtn);
      } else {
        shwTextP.innerText = `${key}: ${e[key]}`;
      }
      showdFrag.appendChild(shwTextP);
    }
    showRefParent.appendChild(showdFrag);
    cntrRefHome.appendChild(showRefParent);
  });
}

// fitur menyalin keyword footnote
document.addEventListener("click", (event) => {
  let elementClick = event.target.parentElement.innerText.split("copy")[0];
  let btnIdKeyWord = event.target.id;
  if (btnIdKeyWord == "keyword-btn") {
    navigator.clipboard
      .writeText(elementClick)
      .then(function () {
        console.log("Teks berhasil disalin ke papan klip!");
      })
      .catch(function (err) {
        console.error("Gagal menyalin teks:", err);
      });
  }
});

// document.addEventListener("keypress", () => {
//   delData()
//   saveData(encodeURIComponent(inpt.value));
// });



// // minyimpan data ke cookie
// function saveData(txt) {
//   const d = new Date();
//   d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   console.log(txt, "data tersimpan")
//   document.cookie = `txt=${txt}; ${expires}; path=/home`;
// }
// // fungsi untuk menghapus data
// function delData() {
//   let expiredDate = new Date(0);
//   document.cookie =
//     "txt" + "=; expires=" + expiredDate.toUTCString() + "; path=/home";
// }



// Fungsi untuk menghapus data

