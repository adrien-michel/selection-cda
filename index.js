const express = require("express");
const app = express();
const topics = require("./topics.json");
// Middleware
app.use(express.json())

/*liste des topics */
app.get("/topics", (req, res) => {
  res.status(200).json(topics);
});

app.get("/topics/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const topic = topics.find((topic) => topic.id === id);
  res.status(200).json(topic);
});
app.post("/topics", (req, res) => {
  parkings.push(req.body);
  res.status(200).json(topics);

});
app.put("/topics/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let topic = topics.find((topic) => topic.id === id);
  (topic.title = req.body.title), res.status(200).json(topic);
});






app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});
