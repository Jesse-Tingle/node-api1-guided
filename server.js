const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "hello, world" });
});

server.get("/lambda", (req, res) => {
  res.redirect("https:lambdaschool.com");
});

const port = 8080;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;

//   res.setHeader("Content-Type", "application/json");
//   res.write(`{"message: "hello, world"}`);

//   res.end();
// });

// server.listen(8080, () => {
//   console.log("server started at http://localhost:8080");
// });
