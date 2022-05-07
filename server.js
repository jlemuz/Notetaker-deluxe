const { notes } = require("./db/db.json");
const path = require("path");
//Library to generate uniqId
var uniqid = require("uniqid");
const fs = require("fs");

const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//enables access to public files such as JS and CSS
app.use(express.static("public"));

//Initializes app
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//Renders the notes from the db.json
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//directs the page to the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//directs the page to the notes.html page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post("/api/notes", (req, res) => {
  //Uses the uniqid library to set the note ID
  req.body.id = uniqid();

  // add note to json file and notes array in this function
  const note = createNewNote(req.body, notes);

  res.json(notes);
});


function createNewNote(body, noteArray) {
  const note = body;
  noteArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify({ notes: noteArray }, null, 2)
  );

  return note;
}
