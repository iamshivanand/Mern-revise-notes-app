const express = require("express");
const res = require("express/lib/response");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is good and running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is up and runnning on port ${PORT}`));
