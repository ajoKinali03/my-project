const mongoose = require("mongoose");

main().catch((e) => console.error(e));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/format-doc", {autoIndex: true});
  console.log("berhasil tehubung degngan mongoDb!");

  // mongoose.disconnect();
  // console.log("koneksi terputus ke mongoDb!");
}