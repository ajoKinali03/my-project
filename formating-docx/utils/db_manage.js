const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
// const dbName = "data_bencana";
const dbName = "absenIAT_A";
const collName = "datas";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*  
  lokasiPosko: 'Banguntapan',
  penanggungJawab: 'Imam Nawawi',
  jumlahPengungsi: 97,
  kategoriPengungsi: 'Dewasa',
  jenisBantuan: 'Pakaian',
  bantuanPerorang: 115,
  bantuanTenda: 960000,
  jumlahBantuan: 12.115,
  jumlahRelawan: 9

*/

async function run() {
  await client.connect();

  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log("Berhasil Terhubung Dengan MongoDb!\n");

    const coll = client.db(dbName).collection(collName);

    const data = await coll
      .find()
      // .project( {_id: 0, nama: 1, ip: 1} )
      .toArray();

    // const data = await coll.updateMany({fakultas: "FUAD"}, {$currentDate: {"lastModified": true}})

    console.log(data);
  } finally {
    await client.close();
    console.log("\nMongoDb Telah Berhenti Terhubung.");
  }
}

run().catch(console.error);
