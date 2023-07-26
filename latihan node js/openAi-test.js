const { Configuration, OpenAIApi } = require("openai");
const apiKey = "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";
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
const teksEdit =
  "Pastikan untuk selalu mematuhi hak cipta dan lisensi penggunaan gambar yang Anda temukan. Jika Anda ingin menggunakan gambar untuk tujuan komersial atau di luar penggunaan pribadi, pastikan untuk mendapatkan izin dari pemilik gambar atau memeriksa lisensi yang terkait dengan gambar tersebut.";

async function result() {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `tolong jadikan teks ini menjadi kalimat anda sendiri${teksEdit}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
}

module.exports = result;

// result().then(
//   function (value) {
//     const asisstance = value.data.choices[0].message.role;
//     const content = value.data.choices[0].message.content;
//     // console.log(`${asisstance}: ${content}`);
//     module.exports = `${asisstance}: ${content}`;
//   },
//   function (error) {
//     console.error(error.response.data);
//   }
// );
