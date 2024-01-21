// rVsMtmQGO5TXBBCt

const Mendeley = require("mendeley-api");

// Isi dengan informasi dari aplikasi Mendeley Developer Portal
const clientId = "17480";
const clientSecret = "rVsMtmQGO5TXBBCt";
const redirectUri = "https://localhost:3000";
const accessToken = "YOUR_ACCESS_TOKEN"; // Optional, gunakan jika sudah memiliki token

const api = new Mendeley({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri,
  accessToken: accessToken, // Optional, gunakan jika sudah memiliki token
});

// Contoh permintaan GET untuk mendapatkan daftar dokumen
api.get("/documents", { group_id: "GROUP_ID" }, function (err, data, headers) {
  if (err) {
    console.error(err);
  } else {
    // Proses data sesuai kebutuhan Anda
    console.log(data);
  }
});


