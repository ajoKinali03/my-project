const mongoose = require("mongoose");

main().catch((e) => console.error(e));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test", {autoIndex: true});

  const newSchema = new mongoose.Schema({
    nama: String
  });

  newSchema.methods.yelYel = function yelYel(){
    const sorak = this.nama ? "HIDUP MAHASISWA!" : `${this.nama} bukan masasiswa`;
    console.log(sorak);
  };

  const mhs = mongoose.model("mahasiswa", newSchema);

  const mhs1 = new mhs({nama: "Hamid"});
  const mhs2 = new mhs({nama: "joni"});
  const mhs3 = new mhs({nama: "ijon"});

  // mhs1.save();
  // mhs2.save();
  // mhs3.save();

  const namaMhs = await mhs.find().select({_id: 0, nama: 1}).limit(1);
  console.log(namaMhs);

  mongoose.disconnect();
  console.log("koneksi terputus ke mongoDb!");
}
