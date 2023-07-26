// const axios = require('axios');

// // Ganti 'YOUR_API_KEY' dengan API-key OpenAI Anda
// const apiKey = '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';
// const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// // Fungsi untuk mengirim permintaan ke OpenAI API
// async function callOpenAIAPI(prompt) {
//   try {
//     const response = await axios.post(apiUrl, {
//       prompt: prompt,
//       max_tokens: 100,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//       },
//     });

//     // Tangani respon dari OpenAI API sesuai kebutuhan Anda
//     console.log(response.data.choices[0].text);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// // Contoh panggilan fungsi dengan prompt
// callOpenAIAPI('apa itu javascript');

const { Configuration, OpenAIApi } = require("openai");
const apiKey = "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";
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
const teksEdit = "Pastikan untuk selalu mematuhi hak cipta dan lisensi penggunaan gambar yang Anda temukan. Jika Anda ingin menggunakan gambar untuk tujuan komersial atau di luar penggunaan pribadi, pastikan untuk mendapatkan izin dari pemilik gambar atau memeriksa lisensi yang terkait dengan gambar tersebut.";

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

result().then(
  function (value) {
    const asisstance = value.data.choices[0].message.role
    const content = value.data.choices[0].message.content
    console.log(`${asisstance}: ${content}`);
  },
  function (error) {
    console.error(error);
  }
);

// const response = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{
//     "role":"user",
//     "content":"siapa nama mu?"
//   }],
//   temperature: 1,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
