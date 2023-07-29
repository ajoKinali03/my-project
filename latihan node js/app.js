const http = require("http");
const asisst = require("./openAi-test");

const port = 26;
const hostName = "127.0.0.1";


const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html");
  asisst().then((value) => {
    res.write(`<p>${value.data.choices[0].message.content}</p>`);
    res.end();
  }).catch((err) => {
    res.end(err.response.data);
  });
});

server.listen(port, hostName, () => {
  console.log(`server run at http://${hostName}:${port}`);
});