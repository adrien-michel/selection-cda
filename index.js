const express = require("express");
const app = express();
const topics = require("./topics.json");

app.get("/topics", (req, res) => {
  res.status(200).json(topics);
});
app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});
