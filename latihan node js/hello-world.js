// const http = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!");
// });

// server.listen(port, hostname, () => {
//   console.log(`server running at http://${hostname}:${port}`);
// });

const http = require("http");
const os = require("os");
console.log(os.cpus());

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html")
  res.write("<p style=\"color: red;\">hello world</p>");
  res.end();
});

// server.listen(3000);
// console.log(`server running at http://127.0.0.1:3000`);
