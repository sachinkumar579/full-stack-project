const express = require("express");
const app = express();
const port = 3003;
const data = require("./data.json");
const dataSmall = require("./data-small.json");

app.get("/all", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
});

app.get("/few", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(dataSmall);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
